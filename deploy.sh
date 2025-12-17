#!/bin/bash

echo "🚀 Deploying to Vercel..."
echo ""

# Check if vercel CLI is installed
if ! command -v vercel &> /dev/null
then
    echo "⚠️  Vercel CLI is not installed."
    echo "Installing Vercel CLI globally..."
    npm install -g vercel
    echo "✅ Vercel CLI installed!"
    echo ""
fi

# Build the project first to catch any errors
echo "📦 Building project locally..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Local build successful!"
    echo ""
    
    # Ask if user wants to deploy to production or preview
    echo "Select deployment type:"
    echo "1) Preview deployment (default)"
    echo "2) Production deployment"
    read -p "Enter your choice (1 or 2): " choice
    
    case $choice in
        2)
            echo ""
            echo "🚀 Deploying to PRODUCTION..."
            vercel --prod
            ;;
        *)
            echo ""
            echo "🚀 Deploying PREVIEW..."
            vercel
            ;;
    esac
    
    echo ""
    echo "✨ Deployment complete!"
else
    echo "❌ Build failed! Please fix errors before deploying."
    exit 1
fi
