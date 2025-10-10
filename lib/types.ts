export interface Property {
  id: string
  title: string
  titleAr: string
  location: string
  locationAr: string
  city: string
  price: number
  priceAr?: number
  description: string
  descriptionAr: string
  images: string[]
  features?: string[]
  featuresAr?: string[]
  paymentPlans?: string
  paymentPlansAr?: string
  developer?: string
  type: string;
  currency: string;
  currencyAr?: string;
  bedrooms: number;
  bathrooms: number;
  area?: number;
  featured?: any;
}

export interface BlogPost {
  id: string
  title: string
  titleAr: string
  excerpt: string
  excerptAr: string
  content: string
  contentAr: string
  image: string
  date: string
  author: string
}

export interface TeamMember {
  id: string
  name: string
  nameAr: string
  role: string
  roleAr: string
  experience: string
  experienceAr: string
  image: string
  linkedin?: string
}

export interface Service {
  id: string
  title: string
  titleAr: string
  description: string
  descriptionAr: string
  icon: string
}
