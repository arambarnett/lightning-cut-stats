# GitHub Pages Setup Instructions

Since the GitHub Actions workflow is failing, follow these manual steps to enable GitHub Pages:

1. Go to the repository settings on GitHub:
   https://github.com/Lightning-Cut/lightningcut-stats/settings/pages

2. Under "Source", change the setting to:
   - Deploy from a branch
   - Branch: main
   - Folder: / (root)

3. Click "Save"

4. Wait a few minutes for the site to be published

5. The site should be available at:
   https://lightning-cut.github.io/lightningcut-stats/

If that doesn't work, try these additional troubleshooting steps:

1. Check if the repository is private:
   - If private, make sure your GitHub account has GitHub Pro, Team, or Enterprise
   - GitHub Pages requires a paid account to work with private repositories

2. Check GitHub account settings:
   - Go to your organization settings
   - Under "Pages", ensure GitHub Pages is enabled for the organization

3. Create a dedicated gh-pages branch:
   ```
   git checkout -b gh-pages
   git push origin gh-pages
   ```
   - Then in Settings > Pages, choose the gh-pages branch instead of main