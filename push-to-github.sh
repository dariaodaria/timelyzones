#!/bin/bash

echo "🚀 TimelyZones GitHub Setup & Push Script"
echo "========================================="

# Step 1: Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Please run this script from the TimelyZones directory"
    exit 1
fi

echo "✅ In TimelyZones directory"

# Step 2: Initialize git if needed
if [ ! -d ".git" ]; then
    echo "📦 Initializing Git repository..."
    git init
else
    echo "✅ Git already initialized"
fi

# Step 3: Add all files
echo "📝 Adding files to git..."
git add .

# Step 4: Check if there are changes to commit
if git diff --staged --quiet; then
    echo "✅ No new changes to commit"
else
    echo "📝 Committing changes..."
    git commit -m "Initial commit: TimelyZones time zone converter

Features:
- Fast timezone conversion between global cities
- Mobile-responsive design with dark/light mode
- Business hours indicators
- SEO-optimized pages
- Multi-location comparison
- Copy/share functionality"
fi

echo ""
echo "🎯 NEXT STEPS - Please do these manually:"
echo ""
echo "1. Go to GitHub.com and create a new repository:"
echo "   - Name: 'timelyzones'"
echo "   - Make it Public"
echo "   - DON'T initialize with README"
echo ""
echo "2. Copy your repository URL (it will look like):"
echo "   https://github.com/YOUR_USERNAME/timelyzones.git"
echo ""
echo "3. Run these commands (replace YOUR_USERNAME):"
echo ""
echo "   git remote add origin https://github.com/YOUR_USERNAME/timelyzones.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "4. Then go back to Vercel and click 'Continue with GitHub'"
echo ""
echo "🎉 After that, your site will be live!"

# Check git status
echo ""
echo "📊 Current Git Status:"
git status --short
