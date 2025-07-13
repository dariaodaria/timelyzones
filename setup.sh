#!/bin/bash

# TimelyZones Setup Script
echo "🚀 Setting up TimelyZones..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    echo "Visit: https://nodejs.org/"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node --version | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18+ is required. Current version: $(node --version)"
    exit 1
fi

echo "✅ Node.js $(node --version) detected"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo "✅ Dependencies installed successfully"

# Copy environment variables
if [ ! -f .env.local ]; then
    cp .env.example .env.local
    echo "📝 Created .env.local from .env.example"
    echo "⚠️  Please update .env.local with your actual values"
else
    echo "📝 .env.local already exists"
fi

# Build the project to check for errors
echo "🔨 Building project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi

echo "✅ Build successful"

# Success message
echo ""
echo "🎉 TimelyZones setup complete!"
echo ""
echo "📋 Next steps:"
echo "1. Update .env.local with your environment variables"
echo "2. Run 'npm run dev' to start the development server"
echo "3. Open http://localhost:3000 in your browser"
echo ""
echo "🚀 To deploy:"
echo "1. Install Vercel CLI: npm i -g vercel"
echo "2. Run 'vercel' to deploy"
echo ""
echo "📚 Read README.md for more information"
echo ""
echo "Happy coding! 🚀"
