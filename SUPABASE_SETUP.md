# Supabase Setup Guide for Sarawanas Jewellery

This guide will help you set up Supabase Storage for storing jewelry images organized by category.

## Step 1: Create a Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Sign up or log in to your account
3. Click "New Project"
4. Fill in the project details:
   - **Project Name**: Sarawanas Jewellery
   - **Database Password**: Create a strong password (save this!)
   - **Region**: Choose the closest region to your users
5. Click "Create new project" and wait for it to initialize (takes ~2 minutes)

## Step 2: Create Storage Bucket

1. In your Supabase project dashboard, go to **Storage** (left sidebar)
2. Click "Create a new bucket"
3. Configure the bucket:
   - **Name**: `jewellery-images`
   - **Public bucket**: Toggle ON (to allow public access to images)
   - **File size limit**: 5MB (or adjust as needed)
   - **Allowed MIME types**: Leave empty or specify: `image/jpeg, image/png, image/gif, image/webp`
4. Click "Create bucket"

## Step 3: Set Up Folder Structure (Optional)

Supabase will automatically create folders when you upload files. The structure will be:

```
jewellery-images/
├── rings/
├── necklaces/
├── earrings/
├── bangles/
├── pendants/
└── chains/
```

## Step 4: Configure Storage Policies

1. In the **Storage** section, click on your `jewellery-images` bucket
2. Go to the **Policies** tab
3. Click "New Policy" for SELECT operations:
   - **Policy Name**: Public Access for Images
   - **Allowed operation**: SELECT
   - **Target roles**: public
   - **Policy definition**: 
     ```sql
     true
     ```
   - Click "Review" then "Save policy"

4. Create another policy for INSERT operations (for admin uploads):
   - **Policy Name**: Allow Authenticated Uploads
   - **Allowed operation**: INSERT
   - **Target roles**: authenticated (or public if you want anyone to upload)
   - **Policy definition**:
     ```sql
     true
     ```
   - Click "Review" then "Save policy"

5. Create a policy for DELETE operations:
   - **Policy Name**: Allow Authenticated Deletes
   - **Allowed operation**: DELETE
   - **Target roles**: authenticated (or public)
   - **Policy definition**:
     ```sql
     true
     ```
   - Click "Review" then "Save policy"

## Step 5: Get Your Supabase Credentials

1. Go to **Settings** > **API** in your Supabase dashboard
2. Copy the following values:
   - **Project URL** (e.g., `https://xxxxx.supabase.co`)
   - **service_role key** (for backend - bypasses RLS)
   - **anon/public key** (for frontend - respects RLS)

## Step 6: Configure Backend Environment Variables

1. Open `backend/.env` file
2. Update the Supabase configuration with the **service_role key**:

```env
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_KEY=your-service-role-key-here
```

⚠️ **Important**: Use the **service_role** key for backend (not the anon key). This bypasses RLS policies and should NEVER be exposed to the frontend!

## Step 7: Configure Frontend Environment Variables

1. Open `frontend/.env.local` file
2. Update the Supabase configuration:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

## Step 8: Test the Setup

1. Start the backend server:
   ```bash
   cd backend
   npm run start:dev
   ```

2. Start the frontend server:
   ```bash
   cd frontend
   npm run dev
   ```

3. Go to the admin portal at `http://localhost:3000/admin`
4. Try uploading a jewelry item with an image
5. The image should be uploaded to Supabase Storage in the appropriate category folder

## Image Upload Flow

### Backend (NestJS):
- Images are received via `multer` in memory (buffer)
- `SupabaseService.uploadFile()` uploads the buffer to Supabase
- Images are organized in folders by category: `{category}/{timestamp}-{filename}`
- The public URL is saved in the database

### Frontend (Next.js):
- Admin portal uses FormData to upload images
- Images can be uploaded directly from the browser using `uploadImage()` helper
- All uploaded images are publicly accessible via their URLs

## Category Folders

Images are automatically organized by jewelry type:
- **Rings**: `/rings/`
- **Necklaces**: `/necklaces/`
- **Earrings**: `/earrings/`
- **Bangles**: `/bangles/`
- **Pendants**: `/pendants/`
- **Chains**: `/chains/`

## Storage Limits

- **Free Tier**: 1GB storage, 2GB bandwidth per month
- **Pro Tier**: 100GB storage, 200GB bandwidth per month
- File size limit: 5MB (configurable in the code)

## Security Best Practices

1. **Never expose your service_role key** - Only use the anon/public key in frontend
2. **Use Row Level Security (RLS)** - Already configured in the policies above
3. **Validate file types** - Already implemented in the backend multer config
4. **Set appropriate CORS policies** - Supabase handles this automatically

## Troubleshooting

### Images not uploading?
- Check that the bucket name is exactly `jewellery-images`
- Verify your Supabase credentials in .env files
- Check the browser console and backend logs for errors
- Ensure the bucket is set to public

### Can't access images?
- Verify the SELECT policy is set to public access
- Check if the URL is correct (should contain `supabase.co/storage/v1/object/public/`)

### Images uploading but not displaying?
- Check CORS settings in Supabase (should be configured automatically)
- Verify the imageUrl in database matches the actual Supabase URL

## Additional Features

The Supabase integration includes:
- ✅ Automatic image uploads to category-specific folders
- ✅ Old image deletion when updating products
- ✅ Image deletion when removing products
- ✅ Public URL generation for uploaded images
- ✅ File type validation (jpg, jpeg, png, gif, webp)
- ✅ File size limits (5MB)

## Need Help?

Supabase Documentation: https://supabase.com/docs/guides/storage
