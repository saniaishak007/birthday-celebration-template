# 🚀 Quick Deployment Steps

## One-Time Setup (5 minutes)

### 1. Install Vercel CLI

```bash
npm install -g vercel
```

### 2. Login to Vercel

```bash
vercel login
```

This will open your browser - sign in with GitHub/GitLab/Email.

---

## Deploy (Every Time)

### Method 1: Using npm scripts (Easiest)

```bash
# Preview deployment (for testing)
npm run deploy:preview

# Production deployment (live site)
npm run deploy:prod
```

### Method 2: Using Vercel CLI directly

```bash
# Preview deployment
vercel

# Production deployment
vercel --prod
```

### Method 3: Using the deploy script (Windows)

```bash
# Double-click deploy.bat
# OR run in terminal:
./deploy.bat
```

---

## First Deployment Prompts

When you run `vercel` for the first time, answer:

```
? Set up and deploy "~/Divyanshi"? [Y/n] y
? Which scope do you want to deploy to? [Your Account]
? Link to existing project? [y/N] n
? What's your project's name? divyanshi
? In which directory is your code located? ./
? Want to override the settings? [y/N] n
```

**That's it!** 🎉

Vercel will:

1. ✅ Build your project
2. ✅ Deploy to their CDN
3. ✅ Give you a live URL: `https://divyanshi-[random].vercel.app`

---

## After Deployment

### Your Project URLs:

- **Production**: `https://your-project.vercel.app`
- **Dashboard**: `https://vercel.com/dashboard`

### Automatic Deployments:

Once connected to Git, every push to `main` = automatic production deploy! 🚀

---

## Troubleshooting

### "Command not found: vercel"

```bash
npm install -g vercel
```

### Build errors?

Test locally first:

```bash
npm run build
```

### Need to redeploy?

```bash
vercel --prod --force
```

---

## 🎯 Pro Tips

1. **Preview First**: Always run `vercel` (preview) before `vercel --prod`
2. **Check Build**: Run `npm run build` locally to catch errors early
3. **Environment Variables**: Add them in Vercel Dashboard → Settings → Environment Variables
4. **Custom Domain**: Add in Vercel Dashboard → Settings → Domains

---

## Support Links

- 📚 [Full Deployment Guide](./DEPLOYMENT_GUIDE.md)
- 🌐 [Vercel Docs](https://vercel.com/docs)
- 💬 [Vercel Support](https://vercel.com/support)

---

**Ready to deploy? Run:** `npm run deploy:preview` 🚀
