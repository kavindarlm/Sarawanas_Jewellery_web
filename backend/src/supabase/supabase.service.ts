import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class SupabaseService {
  private supabase: SupabaseClient;
  private bucketName = 'jewellery-images';

  constructor(private configService: ConfigService) {
    const supabaseUrl = this.configService.get<string>('SUPABASE_URL');
    const supabaseKey = this.configService.get<string>('SUPABASE_KEY');
    
    this.supabase = createClient(supabaseUrl, supabaseKey);
  }

  /**
   * Get content type from file extension
   */
  private getContentType(fileName: string): string {
    const ext = fileName.toLowerCase().split('.').pop();
    const contentTypes: { [key: string]: string } = {
      'jpg': 'image/jpeg',
      'jpeg': 'image/jpeg',
      'png': 'image/png',
      'gif': 'image/gif',
      'webp': 'image/webp',
      'svg': 'image/svg+xml',
    };
    return contentTypes[ext || ''] || 'image/jpeg';
  }

  /**
   * Upload a file to Supabase Storage
   * @param file - The file buffer to upload
   * @param category - The jewelry category (rings, necklaces, etc.)
   * @param fileName - The name of the file
   * @returns The public URL of the uploaded file
   */
  async uploadFile(
    file: Buffer,
    category: string,
    fileName: string,
  ): Promise<string> {
    const filePath = `${category.toLowerCase()}/${Date.now()}-${fileName}`;
    const contentType = this.getContentType(fileName);

    const { data, error } = await this.supabase.storage
      .from(this.bucketName)
      .upload(filePath, file, {
        contentType,
        upsert: false,
        cacheControl: '3600',
      });

    if (error) {
      throw new Error(`Failed to upload file: ${error.message}`);
    }

    const { data: publicUrlData } = this.supabase.storage
      .from(this.bucketName)
      .getPublicUrl(filePath);

    return publicUrlData.publicUrl;
  }

  /**
   * Delete a file from Supabase Storage
   * @param fileUrl - The public URL of the file to delete
   */
  async deleteFile(fileUrl: string): Promise<void> {
    // Extract the file path from the URL
    const urlParts = fileUrl.split(`${this.bucketName}/`);
    if (urlParts.length < 2) {
      throw new Error('Invalid file URL');
    }

    const filePath = urlParts[1];

    const { error } = await this.supabase.storage
      .from(this.bucketName)
      .remove([filePath]);

    if (error) {
      throw new Error(`Failed to delete file: ${error.message}`);
    }
  }

  /**
   * List all files in a category folder
   * @param category - The jewelry category
   */
  async listFiles(category: string): Promise<any[]> {
    const { data, error } = await this.supabase.storage
      .from(this.bucketName)
      .list(category.toLowerCase());

    if (error) {
      throw new Error(`Failed to list files: ${error.message}`);
    }

    return data || [];
  }

  /**
   * Get the public URL for a file
   * @param filePath - The path to the file in storage
   */
  getPublicUrl(filePath: string): string {
    const { data } = this.supabase.storage
      .from(this.bucketName)
      .getPublicUrl(filePath);

    return data.publicUrl;
  }
}
