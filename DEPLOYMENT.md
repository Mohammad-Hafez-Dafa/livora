# Deployment Guide for Livora Properties

This guide will help you deploy the Livora Properties website to Hostinger.

## Prerequisites

- Hostinger account with Node.js hosting
- GitHub repository with your data files (properties.json, blog.json, etc.)
- Images uploaded to a CDN service

## Step 1: Prepare Your Data

### 1.1 Create Data Files

Create JSON files in your GitHub repository:

**properties.json**
\`\`\`json
[
  {
    "id": "1",
    "title": "Luxury Villa in New Cairo",
    "titleAr": "فيلا فاخرة في القاهرة الجديدة",
    "location": "New Cairo, Egypt",
    "locationAr": "القاهرة الجديدة، مصر",
    "city": "cairo",
    "price": "EGP 15,000,000",
    "priceAr": "15,000,000 جنيه مصري",
    "description": "Stunning 5-bedroom villa with modern amenities...",
    "descriptionAr": "فيلا مذهلة من 5 غرف نوم مع وسائل راحة حديثة...",
    "images": [
      "https://your-cdn.com/villa1-1.jpg",
      "https://your-cdn.com/villa1-2.jpg",
      "https://your-cdn.com/villa1-3.jpg"
    ],
    "features": ["5 Bedrooms", "6 Bathrooms", "Private Garden", "Swimming Pool"],
    "featuresAr": ["5 غرف نوم", "6 حمامات", "حديقة خاصة", "حمام سباحة"],
    "paymentPlans": "Flexible payment plans available",
    "paymentPlansAr": "خطط دفع مرنة متاحة",
    "developer": "Premium Developments Egypt",
    "type": "sale"
  }
]
\`\`\`

### 1.2 Upload Images to CDN

Recommended free CDN services:
- **Cloudinary**: 25GB free storage
- **ImageKit**: 20GB free bandwidth
- **Vercel Blob**: Free tier available

Upload all property images and get the URLs.

### 1.3 Get GitHub Raw URLs

1. Upload your JSON files to GitHub
2. Navigate to each file
3. Click "Raw" button
4. Copy the URL (format: `https://raw.githubusercontent.com/username/repo/branch/file.json`)

## Step 2: Configure the Project

Update `lib/data-fetcher.ts` with your GitHub raw URLs:

\`\`\`typescript
export const DATA_SOURCES = {
  properties: "https://raw.githubusercontent.com/YOUR_USERNAME/YOUR_REPO/main/properties.json",
  blog: "https://raw.githubusercontent.com/YOUR_USERNAME/YOUR_REPO/main/blog.json",
  team: "https://raw.githubusercontent.com/YOUR_USERNAME/YOUR_REPO/main/team.json",
  services: "https://raw.githubusercontent.com/YOUR_USERNAME/YOUR_REPO/main/services.json",
}
\`\`\`

## Step 3: Build the Project

\`\`\`bash
# Install dependencies
npm install

# Build for production
npm run build
\`\`\`

This creates an optimized production build in the `.next` folder.

## Step 4: Deploy to Hostinger

### Option A: Using FTP/SFTP

1. **Connect to Hostinger via FTP**
   - Use FileZilla or similar FTP client
   - Get FTP credentials from Hostinger panel

2. **Upload Files**
   - Upload entire project folder
   - Ensure `.next`, `node_modules`, and all source files are uploaded

3. **Configure Node.js in Hostinger**
   - Go to Hostinger control panel
   - Navigate to Node.js settings
   - Set Node.js version to 18 or higher
   - Set application root to your project folder
   - Set application startup file to `node_modules/next/dist/bin/next`
   - Add startup command: `start`

### Option B: Using Git Deployment

1. **Push to GitHub**
   \`\`\`bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   \`\`\`

2. **Connect GitHub to Hostinger**
   - In Hostinger panel, go to Git deployment
   - Connect your GitHub repository
   - Set branch to `main`
   - Configure build command: `npm install && npm run build`
   - Configure start command: `npm start`

## Step 5: Configure Environment

In Hostinger control panel, set environment variables if needed:

\`\`\`
NODE_ENV=production
PORT=3000
\`\`\`

## Step 6: Start the Application

1. In Hostinger Node.js panel, click "Start Application"
2. Your site should now be live at your domain

## Step 7: Configure Domain

1. Go to Hostinger domain settings
2. Point your domain to the Node.js application
3. Enable SSL certificate (free with Hostinger)

## Troubleshooting

### Build Errors

If build fails:
\`\`\`bash
# Clear cache and rebuild
rm -rf .next
npm run build
\`\`\`

### Port Issues

Ensure Hostinger is configured to use the correct port (usually 3000 or as specified by Hostinger).

### Memory Issues

If build fails due to memory:
\`\`\`bash
NODE_OPTIONS=--max_old_space_size=4096 npm run build
\`\`\`

### Data Not Loading

- Verify GitHub raw URLs are correct
- Check CORS settings
- Ensure JSON files are valid

## Performance Optimization

### Enable Caching

The project uses Next.js revalidation. Data is cached for 1 hour by default.

### Image Optimization

- Use WebP format for images
- Compress images before uploading to CDN
- Use appropriate image sizes

### CDN Configuration

Configure your CDN to:
- Enable compression
- Set cache headers
- Use CDN edge locations

## Monitoring

Monitor your site:
- Check Hostinger application logs
- Monitor response times
- Track error rates

## Updates

To update the site:

1. Make changes locally
2. Test with `npm run dev`
3. Build with `npm run build`
4. Upload via FTP or push to GitHub
5. Restart application in Hostinger

## Support

For issues:
- Check Hostinger documentation
- Review Next.js deployment guides
- Contact Hostinger support

## Backup

Regular backups:
- Backup data files in GitHub
- Backup images in CDN
- Export Hostinger database if using one
\`\`\`
