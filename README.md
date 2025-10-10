# Livora Properties - Real Estate Portfolio

A high-performance, bilingual (English/Arabic) real estate portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Bilingual Support**: Full English and Arabic language support with RTL layout
- **High Performance**: Optimized Next.js App Router with server-side rendering
- **Embla Carousel**: Smooth property image galleries
- **Responsive Design**: Mobile-first design that works on all devices
- **Luxury Design**: Black and gold color scheme with sophisticated typography
- **Dynamic Data**: Fetch property data from GitHub raw links
- **SEO Optimized**: Built-in SEO best practices

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Carousel**: Embla Carousel
- **Fonts**: Playfair Display (serif), Geist Sans, Cairo (Arabic)
- **Deployment**: Hostinger-ready

## Project Structure

\`\`\`
├── app/
│   ├── about/          # About Us page
│   ├── blog/           # Blog listing and posts
│   ├── contact/        # Contact page with form
│   ├── projects/       # Property listings and details
│   ├── services/       # Services page
│   ├── team/           # Team members page
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/
│   ├── navigation.tsx  # Header navigation
│   ├── footer.tsx      # Footer component
│   ├── property-card.tsx
│   └── property-carousel.tsx
├── lib/
│   ├── types.ts        # TypeScript interfaces
│   ├── data-fetcher.ts # GitHub data fetching utility
│   └── language-context.tsx # Bilingual support
└── public/             # Static assets
\`\`\`

## Getting Started

### Installation

\`\`\`bash
# Install dependencies
npm install

# Run development server
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Data Configuration

Update the GitHub raw URLs in `lib/data-fetcher.ts`:

\`\`\`typescript
export const DATA_SOURCES = {
  properties: "YOUR_GITHUB_RAW_URL/properties.json",
  blog: "YOUR_GITHUB_RAW_URL/blog.json",
  team: "YOUR_GITHUB_RAW_URL/team.json",
  services: "YOUR_GITHUB_RAW_URL/services.json",
}
\`\`\`

### Image Hosting

For production, upload images to a free CDN service like:
- Cloudinary
- ImageKit
- Vercel Blob Storage
- Cloudflare Images

Update image URLs in your data files accordingly.

## Data Structure

### Properties JSON Format

\`\`\`json
{
  "id": "1",
  "title": "Luxury Villa in New Cairo",
  "titleAr": "فيلا فاخرة في القاهرة الجديدة",
  "location": "New Cairo, Egypt",
  "locationAr": "القاهرة الجديدة، مصر",
  "city": "cairo",
  "price": "EGP 15,000,000",
  "priceAr": "15,000,000 جنيه مصري",
  "description": "...",
  "descriptionAr": "...",
  "images": ["url1", "url2", "url3"],
  "features": ["5 Bedrooms", "6 Bathrooms"],
  "featuresAr": ["5 غرف نوم", "6 حمامات"],
  "type": "sale"
}
\`\`\`

## Deployment to Hostinger

1. Build the project:
\`\`\`bash
npm run build
\`\`\`

2. The build output will be in the `.next` folder

3. Upload to Hostinger using:
   - FTP/SFTP
   - Git deployment
   - Hostinger's Node.js hosting

4. Set up environment variables if needed

5. Configure Node.js version (18+) in Hostinger panel

## Customization

### Colors

Edit the color scheme in `app/globals.css`:

\`\`\`css
--color-primary: #000000;
--color-gold: #d4af37;
--color-accent: #f5f53d;
\`\`\`

### Fonts

Update fonts in `app/layout.tsx`:

\`\`\`typescript
import { Playfair_Display } from 'next/font/google'
\`\`\`

### Content

All content is bilingual. Update translations using the `t()` function:

\`\`\`typescript
const { t } = useLanguage()
t("English text", "النص العربي")
\`\`\`

## Performance Optimizations

- Image optimization with Next.js Image component
- Server-side rendering for SEO
- Code splitting and lazy loading
- Optimized fonts with `next/font`
- Caching with `revalidate` for data fetching

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

© 2025 Livora Properties. All rights reserved.

## Support

For support, email: support@livora.com
\`\`\`

```json file="" isHidden
