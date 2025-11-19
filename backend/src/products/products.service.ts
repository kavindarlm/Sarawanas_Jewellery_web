import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './products.entity';
import { SupabaseService } from '../supabase/supabase.service';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
    private supabaseService: SupabaseService,
  ) {}

  findAll(): Promise<Product[]> {
    return this.productsRepository.find({ 
      where: { isActive: true },
      order: { createdAt: 'DESC' }
    });
  }

  async findOne(id: string): Promise<Product> {
    const product = await this.productsRepository.findOne({ where: { id } });
    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    return product;
  }

  async findByCategory(category: string): Promise<Product[]> {
    return this.productsRepository.find({ 
      where: { category, isActive: true },
      order: { createdAt: 'DESC' }
    });
  }

  async createWithImage(
    productData: Partial<Product>,
    imageFile?: Express.Multer.File,
  ): Promise<Product> {
    if (imageFile) {
      const imageUrl = await this.supabaseService.uploadFile(
        imageFile.buffer,
        productData.category,
        imageFile.originalname,
      );
      productData.imageUrl = imageUrl;
    }

    const product = this.productsRepository.create(productData);
    return this.productsRepository.save(product);
  }

  create(productData: Partial<Product>): Promise<Product> {
    const product = this.productsRepository.create(productData);
    return this.productsRepository.save(product);
  }

  async updateWithImage(
    id: string,
    productData: Partial<Product>,
    imageFile?: Express.Multer.File,
  ): Promise<Product> {
    const existingProduct = await this.findOne(id);

    if (imageFile) {
      // Delete old image if it exists and is from Supabase
      if (existingProduct.imageUrl && existingProduct.imageUrl.includes('supabase')) {
        try {
          await this.supabaseService.deleteFile(existingProduct.imageUrl);
        } catch (error) {
          console.error('Error deleting old image:', error);
        }
      }

      // Upload new image
      const imageUrl = await this.supabaseService.uploadFile(
        imageFile.buffer,
        productData.category || existingProduct.category,
        imageFile.originalname,
      );
      productData.imageUrl = imageUrl;
    }

    await this.productsRepository.update(id, productData);
    const updatedProduct = await this.productsRepository.findOne({ where: { id } });
    if (!updatedProduct) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    return updatedProduct;
  }

  async update(id: string, productData: Partial<Product>): Promise<Product> {
    await this.productsRepository.update(id, productData);
    const updatedProduct = await this.productsRepository.findOne({ where: { id } });
    if (!updatedProduct) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    return updatedProduct;
  }

  async remove(id: string): Promise<void> {
    const product = await this.findOne(id);

    // Delete image from Supabase if it exists
    if (product.imageUrl && product.imageUrl.includes('supabase')) {
      try {
        await this.supabaseService.deleteFile(product.imageUrl);
      } catch (error) {
        console.error('Error deleting image:', error);
      }
    }

    const result = await this.productsRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
  }
}
