# PowerShell script to deploy to GitHub
Set-Location "C:\Users\user\Documents\GitHub\BizIdentity"

Write-Host "Setting up Git repository..." -ForegroundColor Green

# Create .gitignore if it doesn't exist
if (-not (Test-Path ".gitignore")) {
    Write-Host "Creating .gitignore..." -ForegroundColor Yellow
    @"
# Dependencies
node_modules/
**/node_modules/

# Builds
dist/
**/dist/
.turbo/
.tsbuildinfo/

# Env
.env
**/.env*

# Logs
logs/
*.log

# OS / editor
.DS_Store
Thumbs.db
.idea/
.vscode/
"@ | Out-File -FilePath ".gitignore" -Encoding UTF8
}

# Configure Git user if needed
try {
    git config --global user.name "relaya17"
    git config --global user.email "relaya17@example.com"
    Write-Host "Git user configured" -ForegroundColor Green
} catch {
    Write-Host "Git user already configured" -ForegroundColor Yellow
}

# Add files to Git
Write-Host "Adding files to Git..." -ForegroundColor Yellow
git add .

# Commit
Write-Host "Committing changes..." -ForegroundColor Yellow
git commit -m "Initial commit: BizIdentity monorepo with React client and Node.js server"

# Set up remote
Write-Host "Setting up remote..." -ForegroundColor Yellow
git branch -M main
git remote remove origin 2>$null
git remote add origin https://github.com/relaya17/BizIdentity.git

# Push to GitHub
Write-Host "Pushing to GitHub..." -ForegroundColor Yellow
git push -u origin main

Write-Host "✅ Successfully deployed to GitHub!" -ForegroundColor Green
Write-Host "Repository: https://github.com/relaya17/BizIdentity" -ForegroundColor Cyan
