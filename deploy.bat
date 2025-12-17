@echo off
echo 🚀 Deploying to Vercel...
echo.

REM Check if vercel CLI is installed
where vercel >nul 2>nul
if %errorlevel% neq 0 (
    echo ⚠️  Vercel CLI is not installed.
    echo Installing Vercel CLI globally...
    call npm install -g vercel
    echo ✅ Vercel CLI installed!
    echo.
)

REM Build the project first to catch any errors
echo 📦 Building project locally...
call npm run build

if %errorlevel% equ 0 (
    echo ✅ Local build successful!
    echo.
    
    REM Ask if user wants to deploy to production or preview
    echo Select deployment type:
    echo 1^) Preview deployment ^(default^)
    echo 2^) Production deployment
    set /p choice="Enter your choice (1 or 2): "
    
    if "%choice%"=="2" (
        echo.
        echo 🚀 Deploying to PRODUCTION...
        call vercel --prod
    ) else (
        echo.
        echo 🚀 Deploying PREVIEW...
        call vercel
    )
    
    echo.
    echo ✨ Deployment complete!
) else (
    echo ❌ Build failed! Please fix errors before deploying.
    exit /b 1
)

pause
