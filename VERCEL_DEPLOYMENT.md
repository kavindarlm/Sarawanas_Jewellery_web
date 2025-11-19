# Vercel Deployment Guide for Sarawanas Jewellery

This guide will help you deploy your Next.js frontend to Vercel.

## Prerequisites

1. A [Vercel account](https://vercel.com/signup) (free tier available)
2. Your backend API deployed and accessible via a public URL
3. Git repository with your code pushed to GitHub/GitLab/Bitbucket

## Step 1: Prepare Your Backend API

Before deploying the frontend, ensure your backend (NestJS) is deployed and accessible. You can deploy it to:
- Railway
- Render
- Heroku
- AWS/DigitalOcean/Google Cloud
- Any other hosting service that supports Node.js

**Important:** Note down your backend API URL (e.g., `https://your-backend.railway.app`)

## Step 2: Update Environment Variables

1. Open `.env.production` in the `frontend` folder
2. Update the `NEXT_PUBLIC_API_URL` with your actual backend API URL:

```env
NEXT_PUBLIC_API_URL=https://your-backend-api.com/api
```

**Note:** The URL should end with `/api` (e.g., `https://your-backend.railway.app/api`)

## Step 3: Deploy to Vercel

### Option A: Using Vercel Dashboard (Recommended)

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"Add New Project"**
3. Import your Git repository
4. Configure the project:
   - **Framework Preset:** Next.js
   - **Root Directory:** `frontend`
   - **Build Command:** `npm run build` (default)
   - **Output Directory:** `.next` (default)

5. Add Environment Variables:
   - Click on **"Environment Variables"**
   - Add the following variables:
     ```
     NEXT_PUBLIC_SUPABASE_URL = https://jlkxcokofkegzaxkdreq.supabase.co
     NEXT_PUBLIC_SUPABASE_ANON_KEY = your_supabase_anon_key
     NEXT_PUBLIC_API_URL = https://your-backend-api.com/api
     ```

6. Click **"Deploy"**

### Option B: Using Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

3. Login to Vercel:
   ```bash
   vercel login
   ```

4. Deploy:
   ```bash
   vercel
   ```

5. Follow the prompts:
   - Set up and deploy? **Y**
   - Which scope? **Select your account**
   - Link to existing project? **N**
   - What's your project's name? **sarawanas-jewellery**
   - In which directory is your code located? **.**
   - Want to override the settings? **N**

6. Add environment variables:
   ```bash
   vercel env add NEXT_PUBLIC_API_URL
   ```
   Enter your backend API URL when prompted.

7. Deploy to production:
   ```bash
   vercel --prod
   ```

## Step 4: Configure Backend CORS

Update your backend to allow requests from your Vercel domain:

1. Open `backend/src/main.ts`
2. Update the CORS configuration:

```typescript
app.enableCors({
  origin: [
    'http://localhost:3000',
    'https://your-vercel-app.vercel.app', // Add your Vercel URL
    'https://your-custom-domain.com' // If you have a custom domain
  ],
  credentials: true,
});
```

3. Redeploy your backend with the updated CORS settings

## Step 5: Test Your Deployment

1. Visit your Vercel URL (e.g., `https://sarawanas-jewellery.vercel.app`)
2. Test the following features:
   - ✅ Homepage loads correctly
   - ✅ Product listings display
   - ✅ Product detail pages work
   - ✅ Admin login works
   - ✅ Admin panel can add/edit/delete products
   - ✅ Images upload and display correctly

## Step 6: Custom Domain (Optional)

1. In Vercel Dashboard, go to your project
2. Click on **"Settings"** → **"Domains"**
3. Add your custom domain
4. Update your DNS records as instructed by Vercel
5. Wait for DNS propagation (can take up to 48 hours)

## Environment Variables Reference

All environment variables should be prefixed with `NEXT_PUBLIC_` to be accessible in the browser:

| Variable | Description | Example |
|----------|-------------|---------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL | `https://xxxxx.supabase.co` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anonymous key | `eyJhbGc...` |
| `NEXT_PUBLIC_API_URL` | Backend API URL with /api suffix | `https://api.example.com/api` |

## Troubleshooting

### Issue: "API calls are failing"
- **Solution:** Check that `NEXT_PUBLIC_API_URL` is set correctly in Vercel environment variables
- Verify your backend is running and accessible
- Check backend CORS settings

### Issue: "Images not loading"
- **Solution:** Ensure your backend serves images correctly
- Check that image URLs are being constructed properly
- Verify the backend is accessible from your frontend

### Issue: "Environment variables not working"
- **Solution:** Make sure all variables start with `NEXT_PUBLIC_`
- Redeploy after adding/changing environment variables
- Check the Vercel logs for errors

### Issue: "Build fails on Vercel"
- **Solution:** Check the build logs in Vercel dashboard
- Ensure all dependencies are listed in `package.json`
- Try building locally first: `npm run build`

## Continuous Deployment

Vercel automatically redeploys your site when you push changes to your Git repository:

1. Push changes to your main branch
2. Vercel automatically builds and deploys
3. Preview deployments are created for pull requests

## Monitoring

- View deployment logs in the Vercel Dashboard
- Monitor performance and analytics
- Set up error tracking with Sentry or similar tools

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Environment Variables in Next.js](https://nextjs.org/docs/basic-features/environment-variables)

## Support

For issues or questions:
- Check Vercel logs for errors
- Review backend server logs
- Verify all environment variables are set correctly
