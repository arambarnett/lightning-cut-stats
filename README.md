# LightningCut Analytics Dashboard

This repository contains the LightningCut Analytics Dashboard, which displays user statistics and video processing metrics.

## Features

- Password-protected access for investors and stakeholders
- User growth analytics
- Video processing job statistics
- Storage usage metrics
- Subscription tier distribution

## Updating the Data

The dashboard displays statistics generated from the LightningCut database. To update the data:

1. Run the data extraction script (requires database access)
2. Replace the `raw_stats.html` file with the updated version
3. Commit and push changes to GitHub

## Development

### Local Setup

1. Clone this repository
2. Open `index.html` in a browser to view the login screen
3. Use the password "investor" to access the dashboard

### Structure

- `index.html` - Login page with password protection
- `stats.html` - Main dashboard that loads data from raw_stats.html
- `raw_stats.html` - Generated statistics content
- `css/` - Stylesheet directory
- `js/` - JavaScript utilities
- `assets/` - Images and other static assets

## Deployment

This dashboard is deployed using GitHub Pages, making it accessible online with the same password protection.

## Security Note

The dashboard uses client-side authentication with a fixed password. While this provides basic protection against casual browsing, it is not meant for highly sensitive data.

For additional security:
- Ensure you don't include personally identifiable information
- Consider using server-side authentication for more sensitive metrics
- Rotate the password periodically