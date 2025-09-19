@echo off
cd /d "C:\Users\user\Documents\GitHub\BizIdentity"

echo Creating .gitignore...
echo # Dependencies > .gitignore
echo node_modules/ >> .gitignore
echo **/node_modules/ >> .gitignore
echo # Builds >> .gitignore
echo dist/ >> .gitignore
echo **/dist/ >> .gitignore
echo .turbo/ >> .gitignore
echo .tsbuildinfo/ >> .gitignore
echo # Env >> .gitignore
echo .env >> .gitignore
echo **/.env* >> .gitignore
echo # Logs >> .gitignore
echo logs/ >> .gitignore
echo *.log >> .gitignore
echo # OS / editor >> .gitignore
echo .DS_Store >> .gitignore
echo Thumbs.db >> .gitignore
echo .idea/ >> .gitignore
echo .vscode/ >> .gitignore

echo Adding files to git...
git add .

echo Committing...
git commit -m "Initial commit: BizIdentity monorepo"

echo Setting up remote...
git branch -M main
git remote add origin https://github.com/relaya17/BizIdentity.git

echo Pushing to GitHub...
git push -u origin main

echo Done!
pause
