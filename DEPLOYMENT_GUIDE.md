# Vercel Deployment Guide

This guide will help you deploy your birthday celebration website to Vercel.

## Prerequisites

1. A [Vercel account](https://vercel.com/signup) (free tier is sufficient)
2. Git installed on your computer
3. Your project pushed to a Git repository (GitHub, GitLab, or Bitbucket)

## Option 1: Deploy via Vercel CLI (Recommended)

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Login to Vercel

```bash
vercel login
```

This will open your browser to authenticate.

### Step 3: Deploy

Navigate to your project directory and run:

```bash
vercel
```

Follow the prompts:

- **Set up and deploy**: Yes
- **Which scope**: Select your account
- **Link to existing project**: No (first time) or Yes (subsequent deployments)
- **Project name**: divyanshi (or your preferred name)
- **In which directory is your code located**: ./
- **Want to override the settings**: No

### Step 4: Deploy to Production

Once the preview deployment is successful, deploy to production:

```bash
vercel --prod
```

## Option 2: Deploy via Vercel Dashboard

### Step 1: Push to Git Repository

If you haven't already, initialize git and push to GitHub:

```bash
git init
git add .
git commit -m "Initial commit - Birthday celebration website"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

### Step 2: Import to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"Add New..."** → **"Project"**
3. Import your Git repository
4. Vercel will automatically detect it's a Vite project
5. Configure the project:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
6. Click **"Deploy"**

## Configuration Files

The following files have been created for Vercel deployment:

### `vercel.json`

- Configures build settings and routing
- Enables SPA (Single Page Application) routing
- Ensures all routes redirect to `index.html`

### `.vercelignore`

- Excludes unnecessary files from deployment
- Reduces deployment size and time

## Environment Variables (If Needed)

If you add any environment variables in the future:

1. Create a `.env.local` file (already gitignored)
2. Add your variables with `VITE_` prefix:
   ```
   VITE_API_KEY=your_api_key
   ```
3. In Vercel Dashboard:
   - Go to **Project Settings** → **Environment Variables**
   - Add each variable
   - Redeploy

## Custom Domain (Optional)

To add a custom domain:

1. Go to your project in Vercel Dashboard
2. Click **"Settings"** → **"Domains"**
3. Add your domain
4. Update your domain's DNS settings as instructed

## Continuous Deployment

Once connected to Git:

- Every push to `main` branch triggers a production deployment
- Pull requests create preview deployments automatically

## Testing Your Deployment

After deployment, Vercel provides:

- **Production URL**: `https://your-project.vercel.app`
- **Preview URLs**: For each deployment

Test all features:

- ✅ Countdown timer
- ✅ Music player (both buttons)
- ✅ Celebration page animations
- ✅ Gallery
- ✅ Message card
- ✅ All page transitions

## Troubleshooting

### Build Fails

- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Test local build: `npm run build`

### Routes Not Working

- Verify `vercel.json` rewrites configuration
- Clear browser cache

### Assets Not Loading

- Check file paths are relative (e.g., `/music.mp3`, not `./music.mp3`)
- Verify files are in the `public` folder
- Check browser console for 404 errors

### Music Not Playing

- Browsers require user interaction to play audio
- Test in different browsers
- Check audio file format (MP3 is widely supported)

## Performance Tips

1. **Image Optimization**: Convert images to WebP format
2. **Lazy Loading**: Images are loaded on demand
3. **CDN**: Vercel automatically uses CDN
4. **Analytics**: Enable Vercel Analytics in project settings

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [Vercel Community](https://github.com/vercel/vercel/discussions)

## Quick Commands Reference

```bash
# Preview deployment
vercel

# Production deployment
vercel --prod

# Check deployment status
vercel ls

# View logs
vercel logs

# Remove deployment
vercel rm [deployment-url]
```

---

**Note**: The first deployment might take a few minutes. Subsequent deployments are faster due to caching.

Good luck with your deployment! 🚀✨
