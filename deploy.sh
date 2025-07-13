#!/bin/bash

# TimelyZones Deployment Script
echo "🚀 Deploying TimelyZones to Vercel..."

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "📦 Installing Vercel CLI..."
    npm install -g vercel
fi

# Build the project first to catch any errors
echo "🔨 Building project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful! Deploying..."
    
    # Deploy to Vercel
    vercel --prod
    
    echo "🎉 Deployment complete!"
    echo "📋 Next steps:"
    echo "1. Set up environment variables in Vercel dashboard"
    echo "2. Configure database"
    echo "3. Connect your domain timelyzones.com"
else
    echo "❌ Build failed. Please fix errors before deploying."
fi
