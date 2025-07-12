Write-Host "Starting GitHub Pages deployment setup..."

# Add modified files
git add next.config.js
Write-Host "Added next.config.js"

git add .github/workflows/nextjs.yml
Write-Host "Added .github/workflows/nextjs.yml"

# Commit the changes
git commit -m "Configure GitHub Pages deployment:
- Add GitHub Actions workflow for Next.js deployment
- Update next.config.js for static export
- Enable unoptimized images for static build"
Write-Host "Committed changes"

# Push to GitHub
git push origin main
Write-Host "Pushed to GitHub"

# Check status
git status
Write-Host "Deployment setup complete!"
