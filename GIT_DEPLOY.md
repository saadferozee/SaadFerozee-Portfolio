# 🔄 Git-Based Deployment to saadferozee.netlify.app

## Step 1: Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio commit"

# Add GitHub remote (replace with your repo URL)
git remote add origin https://github.com/saadferozee/portfolio.git

# Push to GitHub
git push -u origin main
```

## Step 2: Connect to Netlify

1. Go to [netlify.com](https://netlify.com)
2. Click **"New site from Git"**
3. Choose **GitHub** and authorize
4. Select your **portfolio repository**
5. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `build`
6. Click **"Deploy site"**

## Step 3: Set Custom Name

1. Go to **Site settings** → **General**
2. Click **"Change site name"**
3. Enter: `saadferozee`
4. Save changes

## ✅ Result

Your site will be live at: **https://saadferozee.netlify.app**

## 🔄 Automatic Updates

Now whenever you:
1. Make changes to your code
2. Push to GitHub (`git push`)
3. Netlify automatically rebuilds and deploys!

## 🎯 Quick Update Workflow

```bash
# Make your changes
# Then:
git add .
git commit -m "Update portfolio"
git push

# Site automatically updates in ~2 minutes!
```