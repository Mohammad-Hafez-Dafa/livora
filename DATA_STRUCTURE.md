# Data Structure Guide

This document describes the JSON data structure for all content in the Livora Properties website.

## Properties Data

**File**: `properties.json`

\`\`\`json
[
  {
    "id": "unique-id",
    "title": "Property Title in English",
    "titleAr": "عنوان العقار بالعربية",
    "location": "Location in English",
    "locationAr": "الموقع بالعربية",
    "city": "cairo" | "dubai",
    "price": "Price in English (e.g., EGP 15,000,000)",
    "priceAr": "السعر بالعربية (مثال: 15,000,000 جنيه مصري)",
    "description": "Full description in English",
    "descriptionAr": "الوصف الكامل بالعربية",
    "images": [
      "https://cdn.example.com/image1.jpg",
      "https://cdn.example.com/image2.jpg"
    ],
    "features": [
      "Feature 1 in English",
      "Feature 2 in English"
    ],
    "featuresAr": [
      "الميزة 1 بالعربية",
      "الميزة 2 بالعربية"
    ],
    "paymentPlans": "Payment plans description in English (optional)",
    "paymentPlansAr": "وصف خطط الدفع بالعربية (اختياري)",
    "developer": "Developer name (optional)",
    "type": "sale" | "resale"
  }
]
\`\`\`

### Field Descriptions

- **id**: Unique identifier (string)
- **title/titleAr**: Property name in both languages
- **location/locationAr**: Specific location/neighborhood
- **city**: Either "cairo" or "dubai" (used for filtering)
- **price/priceAr**: Display price with currency
- **description/descriptionAr**: Detailed property description
- **images**: Array of CDN image URLs (3-5 recommended)
- **features/featuresAr**: Array of property features
- **paymentPlans/paymentPlansAr**: Optional payment information
- **developer**: Optional developer name
- **type**: "sale" for new properties, "resale" for resale

## Blog Posts Data

**File**: `blog.json`

\`\`\`json
[
  {
    "id": "unique-id",
    "title": "Blog Post Title in English",
    "titleAr": "عنوان المقال بالعربية",
    "excerpt": "Short excerpt in English",
    "excerptAr": "مقتطف قصير بالعربية",
    "content": "<p>Full HTML content in English</p>",
    "contentAr": "<p>المحتوى الكامل بالعربية</p>",
    "image": "https://cdn.example.com/blog-image.jpg",
    "date": "2025-01-15",
    "author": "Author Name"
  }
]
\`\`\`

### Field Descriptions

- **id**: Unique identifier
- **title/titleAr**: Article title
- **excerpt/excerptAr**: Short summary (2-3 sentences)
- **content/contentAr**: Full article content (HTML supported)
- **image**: Featured image URL
- **date**: Publication date (YYYY-MM-DD format)
- **author**: Author name

## Team Members Data

**File**: `team.json`

\`\`\`json
[
  {
    "id": "unique-id",
    "name": "Full Name in English",
    "nameAr": "الاسم الكامل بالعربية",
    "role": "Job Title in English",
    "roleAr": "المسمى الوظيفي بالعربية",
    "experience": "Experience description in English",
    "experienceAr": "وصف الخبرة بالعربية",
    "image": "https://cdn.example.com/team-member.jpg",
    "linkedin": "https://linkedin.com/in/username"
  }
]
\`\`\`

### Field Descriptions

- **id**: Unique identifier
- **name/nameAr**: Team member full name
- **role/roleAr**: Job title/position
- **experience/experienceAr**: Brief experience summary
- **image**: Professional photo URL
- **linkedin**: LinkedIn profile URL (optional)

## Services Data

**File**: `services.json`

\`\`\`json
[
  {
    "id": "unique-id",
    "title": "Service Title in English",
    "titleAr": "عنوان الخدمة بالعربية",
    "description": "Service description in English",
    "descriptionAr": "وصف الخدمة بالعربية",
    "icon": "building-2"
  }
]
\`\`\`

### Field Descriptions

- **id**: Unique identifier
- **title/titleAr**: Service name
- **description/descriptionAr**: Service description
- **icon**: Lucide icon name (e.g., "building-2", "refresh-cw")

## Image Guidelines

### Recommended Sizes

- **Property Images**: 1920x1440px (4:3 ratio)
- **Blog Featured Images**: 1920x1080px (16:9 ratio)
- **Team Photos**: 800x800px (1:1 ratio)

### Format

- Use WebP or JPEG format
- Compress images (aim for <500KB per image)
- Use descriptive filenames

### CDN Setup

1. Upload images to your chosen CDN
2. Organize in folders:
   - `/properties/` - Property images
   - `/blog/` - Blog images
   - `/team/` - Team photos
3. Use full CDN URLs in JSON files

## Validation

Before deploying, validate your JSON:

1. Use a JSON validator (jsonlint.com)
2. Ensure all required fields are present
3. Check that all image URLs are accessible
4. Verify bilingual content is complete

## Example Complete Property

\`\`\`json
{
  "id": "villa-new-cairo-001",
  "title": "Luxury Villa in New Cairo",
  "titleAr": "فيلا فاخرة في القاهرة الجديدة",
  "location": "Fifth Settlement, New Cairo",
  "locationAr": "التجمع الخامس، القاهرة الجديدة",
  "city": "cairo",
  "price": "EGP 15,000,000",
  "priceAr": "15,000,000 جنيه مصري",
  "description": "Stunning 5-bedroom villa with modern amenities and private garden in the heart of New Cairo. This exceptional property offers luxurious living spaces, high-end finishes, and a perfect blend of contemporary design and comfort.",
  "descriptionAr": "فيلا مذهلة من 5 غرف نوم مع وسائل راحة حديثة وحديقة خاصة في قلب القاهرة الجديدة. يوفر هذا العقار الاستثنائي مساحات معيشة فاخرة وتشطيبات راقية ومزيج مثالي من التصميم المعاصر والراحة.",
  "images": [
    "https://cdn.example.com/properties/villa-new-cairo-001-exterior.jpg",
    "https://cdn.example.com/properties/villa-new-cairo-001-living.jpg",
    "https://cdn.example.com/properties/villa-new-cairo-001-bedroom.jpg",
    "https://cdn.example.com/properties/villa-new-cairo-001-kitchen.jpg",
    "https://cdn.example.com/properties/villa-new-cairo-001-garden.jpg"
  ],
  "features": [
    "5 Bedrooms",
    "6 Bathrooms",
    "Private Garden",
    "Swimming Pool",
    "Smart Home System",
    "Covered Parking",
    "Security System",
    "Modern Kitchen"
  ],
  "featuresAr": [
    "5 غرف نوم",
    "6 حمامات",
    "حديقة خاصة",
    "حمام سباحة",
    "نظام منزل ذكي",
    "موقف سيارات مغطى",
    "نظام أمني",
    "مطبخ حديث"
  ],
  "paymentPlans": "Flexible payment plans available with up to 5 years installments. 10% down payment, 90% over 5 years.",
  "paymentPlansAr": "خطط دفع مرنة متاحة مع أقساط تصل إلى 5 سنوات. 10٪ دفعة أولى، 90٪ على مدى 5 سنوات.",
  "developer": "Premium Developments Egypt",
  "type": "sale"
}
\`\`\`
\`\`\`
