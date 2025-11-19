# Fix Supabase Storage RLS Policy Error

## Quick Fix: Disable RLS on Storage Bucket

1. Go to your Supabase Dashboard: https://supabase.com/dashboard
2. Select your project: `Sarawanas Jewellery`
3. Go to **Storage** (left sidebar)
4. Click on the `jewellery-images` bucket
5. Click on **Policies** tab
6. Click **New Policy** button

### Create INSERT Policy:
- **Policy name**: `Allow public uploads`
- **Allowed operation**: `INSERT`
- **Target roles**: `public`
- **Policy definition**: Paste this SQL:
  ```sql
  true
  ```
- Click **Review** → **Save policy**

### Create SELECT Policy:
- **Policy name**: `Allow public reads`
- **Allowed operation**: `SELECT`
- **Target roles**: `public`
- **Policy definition**: Paste this SQL:
  ```sql
  true
  ```
- Click **Review** → **Save policy**

### Create DELETE Policy:
- **Policy name**: `Allow public deletes`
- **Allowed operation**: `DELETE`
- **Target roles**: `public`
- **Policy definition**: Paste this SQL:
  ```sql
  true
  ```
- Click **Review** → **Save policy**

### Create UPDATE Policy:
- **Policy name**: `Allow public updates`
- **Allowed operation**: `UPDATE`
- **Target roles**: `public`
- **Policy definition**: Paste this SQL:
  ```sql
  true
  ```
- Click **Review** → **Save policy**

## Alternative: Use Service Role Key (More Secure)

Instead of using the anon key, use the service_role key for backend operations:

1. Go to **Settings** > **API** in Supabase Dashboard
2. Copy the **service_role key** (NOT the anon key)
3. Update `backend/.env`:
   ```env
   SUPABASE_KEY=your_service_role_key_here
   ```

⚠️ **Important**: The service_role key bypasses RLS and should ONLY be used on the backend, never in frontend code!

## Recommended Approach

For production, use the service_role key on the backend:
- ✅ Backend uses `service_role` key (bypasses RLS)
- ✅ Frontend uses `anon` key (respects RLS)
- ✅ Keep the anon key in `frontend/.env.local`

This way you have full control on the backend while maintaining security on the frontend.

## After Fixing

Restart your backend server and try uploading an image again. The error should be resolved!
