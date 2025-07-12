Write-Host "==================================" -ForegroundColor Cyan
Write-Host "  GitHub Pages Deployment Script" -ForegroundColor Cyan
Write-Host "==================================" -ForegroundColor Cyan
Write-Host ""

# Function to run a command and handle errors
function Invoke-CommandWithErrorHandling {
    param (
        [string]$Command,
        [string]$Description
    )
    
    Write-Host "🔄 $Description..." -ForegroundColor Yellow
    
    try {
        Invoke-Expression $Command
        if ($LASTEXITCODE -ne 0) {
            throw "Command failed with exit code $LASTEXITCODE"
        }
        Write-Host "✅ Done." -ForegroundColor Green
    }
    catch {
        Write-Host "❌ Error: $_" -ForegroundColor Red
        exit 1
    }
}

# Step 1: Ensure we're on the main branch
Invoke-CommandWithErrorHandling -Command "git checkout main" -Description "Switching to main branch"

# Step 2: Pull latest changes
Invoke-CommandWithErrorHandling -Command "git pull origin main" -Description "Pulling latest changes"

# Step 3: Make sure CNAME file is in place
if (-not (Test-Path "CNAME")) {
    Write-Host "⚠️ CNAME file not found. Creating it..." -ForegroundColor Yellow
    Set-Content -Path "CNAME" -Value "www.harshitj183.in"
    Invoke-CommandWithErrorHandling -Command "git add CNAME" -Description "Adding CNAME file"
}

# Step 4: Make sure CNAME is also in the public folder
if (-not (Test-Path "public/CNAME")) {
    Write-Host "⚠️ public/CNAME file not found. Creating it..." -ForegroundColor Yellow
    Copy-Item -Path "CNAME" -Destination "public/CNAME" -Force
    Invoke-CommandWithErrorHandling -Command "git add public/CNAME" -Description "Adding public/CNAME file"
}

# Step 5: Check if there are changes to commit
$gitStatus = git status --porcelain
if ($gitStatus) {
    # We have changes to commit
    Invoke-CommandWithErrorHandling -Command "git commit -m 'Deployment preparation: Update CNAME and configuration files'" -Description "Committing changes"
}

# Step 6: Push to GitHub to trigger the workflow
Invoke-CommandWithErrorHandling -Command "git push origin main" -Description "Pushing to GitHub"

# Step 7: Show GitHub Actions URL
Write-Host ""
Write-Host "🌐 Deployment triggered! Monitor the progress at:" -ForegroundColor Green
Write-Host "    https://github.com/harshitj183/harshitj183.in/actions" -ForegroundColor Cyan
Write-Host ""
Write-Host "📱 Your site will be available at:" -ForegroundColor Green
Write-Host "    https://www.harshitj183.in" -ForegroundColor Cyan
Write-Host ""
Write-Host "⏱️ It may take a few minutes for the deployment to complete." -ForegroundColor Yellow
