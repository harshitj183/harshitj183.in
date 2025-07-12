# Simple GitHub Pages Deployment Script
Write-Host "==================================" 
Write-Host "  GitHub Pages Deployment Script" 
Write-Host "=================================="
Write-Host ""

# Step 1: Ensure we're on the main branch
Write-Host "Switching to main branch..."
git checkout main

# Step 2: Pull latest changes
Write-Host "Pulling latest changes..."
git pull origin main

# Step 3: Make sure CNAME file is in place
if (-not (Test-Path "CNAME")) {
    Write-Host "CNAME file not found. Creating it..."
    Set-Content -Path "CNAME" -Value "www.harshitj183.in"
    git add CNAME
}

# Step 4: Make sure CNAME is also in the public folder
if (-not (Test-Path "public/CNAME")) {
    Write-Host "public/CNAME file not found. Creating it..."
    Copy-Item -Path "CNAME" -Destination "public/CNAME" -Force
    git add public/CNAME
}

# Step 5: Check if there are changes to commit
$gitStatus = git status --porcelain
if ($gitStatus) {
    # We have changes to commit
    Write-Host "Committing changes..."
    git commit -m "Deployment preparation: Update CNAME and configuration files"
}

# Step 6: Push to GitHub to trigger the workflow
Write-Host "Pushing to GitHub..."
git push origin main

# Step 7: Show GitHub Actions URL
Write-Host ""
Write-Host "Deployment triggered! Monitor the progress at:"
Write-Host "    https://github.com/harshitj183/harshitj183.in/actions"
Write-Host ""
Write-Host "Your site will be available at:"
Write-Host "    https://www.harshitj183.in"
Write-Host ""
Write-Host "It may take a few minutes for the deployment to complete."
