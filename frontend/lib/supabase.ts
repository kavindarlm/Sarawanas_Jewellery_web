import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseKey);

/**
 * Upload an image to Supabase Storage
 * @param file - The file to upload
 * @param category - The jewelry category (rings, necklaces, etc.)
 * @returns The public URL of the uploaded file
 */
export async function uploadImage(file: File, category: string): Promise<string> {
  const fileExt = file.name.split('.').pop();
  const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
  const filePath = `${category.toLowerCase()}/${fileName}`;

  const { data, error } = await supabase.storage
    .from('jewellery-images')
    .upload(filePath, file, {
      cacheControl: '3600',
      upsert: false,
    });

  if (error) {
    throw new Error(`Failed to upload image: ${error.message}`);
  }

  const { data: publicUrlData } = supabase.storage
    .from('jewellery-images')
    .getPublicUrl(filePath);

  return publicUrlData.publicUrl;
}

/**
 * Delete an image from Supabase Storage
 * @param imageUrl - The public URL of the image to delete
 */
export async function deleteImage(imageUrl: string): Promise<void> {
  const urlParts = imageUrl.split('jewellery-images/');
  if (urlParts.length < 2) {
    throw new Error('Invalid image URL');
  }

  const filePath = urlParts[1];

  const { error } = await supabase.storage
    .from('jewellery-images')
    .remove([filePath]);

  if (error) {
    throw new Error(`Failed to delete image: ${error.message}`);
  }
}

/**
 * Get the public URL for an image
 * @param filePath - The path to the image in storage
 */
export function getPublicUrl(filePath: string): string {
  const { data } = supabase.storage
    .from('jewellery-images')
    .getPublicUrl(filePath);

  return data.publicUrl;
}
