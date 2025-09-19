@echo off
echo Adding presentation materials to git...
git add presentation/
git add apps/client/src/components/
git add apps/client/src/i18n/
git add apps/client/src/pages/CRM.tsx
git add apps/client/src/App.tsx
git add apps/client/src/main.tsx
git add apps/client/src/theme/ThemeContext.tsx
git add apps/client/index.html
git add apps/client/package.json
git add apps/client/README.md
git add apps/client/public/
git add .gitignore

echo Committing changes...
git commit -m "Add comprehensive presentation materials and platform improvements

- Complete pitch deck with 14 slides covering all aspects
- Investor one-pager with key metrics and financial projections  
- Detailed presentation script with timing and Q&A preparation
- Screenshot guide for creating professional demo images
- Demo video guide with technical specifications and workflow
- Investor list with 50+ potential investors and outreach strategy
- PowerPoint guide with design guidelines and slide-by-slide instructions
- Comprehensive README with all materials and next steps

Platform improvements:
- Added i18n internationalization (EN/HE)
- Enhanced UI with framer-motion animations
- Added PWA capabilities with service worker
- Improved SEO with meta tags and structured data
- Added analytics and performance monitoring
- Enhanced error handling with ErrorBoundary
- Added loading states and skeleton components
- Improved theme persistence in localStorage

All materials ready for seed funding round of $500K"

echo Pushing to GitHub...
git push origin main

echo Done! All presentation materials have been committed and pushed to GitHub.
pause
