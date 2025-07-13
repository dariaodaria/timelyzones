#!/bin/bash

echo "🚀 Setting up TimelyZones GitHub repository..."

# Initialize git if not already done
if [ ! -d ".git" ]; then
    echo "📦 Initializing Git repository..."
    git init
    git add .
    git commit -m "Initial commit: TimelyZones time zone converter"
fi

# Create .gitignore if it doesn't exist
if [ ! -f ".gitignore" ]; then
    echo "📝 Creating .gitignore..."
    cat > .gitignore << EOF
# Dependencies
/node_modules
/.pnp
.pnp.js

# Testing
/coverage

# Next.js
/.next/
/out/

# Production
/build

# Misc
.DS_Store
*.pem

# Debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Local env files
.env*.local
.env

# Vercel
.vercel

# TypeScript
*.tsbuildinfo
next-env.d.ts

# Prisma
/prisma/migrations/
EOF
fi

echo "✅ Git setup complete!"
echo ""
echo "📋 Next steps:"
echo "1. Go to GitHub.com and create a new repository called 'timelyzones'"
echo "2. Copy the repository URL (something like: https://github.com/yourusername/timelyzones.git)"
echo "3. Run these commands:"
echo "   git remote add origin YOUR_REPO_URL"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "4. Then go back to Vercel and click 'Continue with GitHub'"
