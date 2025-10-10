import { WhyChooseUsSection } from "@/components/why-choose-us-section";
import { CTASection } from "@/components/cta-section"
import type { Property } from "@/lib/types";
import { HeroSection } from "@/components/hero-sections";
import { FeaturedPropertiesCarousel } from "@/components/featured-properties-carousel";
import { StatsSection } from "@/components/stats-sectio";
export default async function HomePage() {
  const featuredProperties = await getFeaturedProperties();

  return (
    <div className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <div className="container mx-auto px-4 py-16 md:py-24 bg-background">
        <FeaturedPropertiesCarousel properties={featuredProperties} />
      </div>
      <WhyChooseUsSection />
      <CTASection />
    </div>
  );
}

// Server-side data fetching
async function getFeaturedProperties(): Promise<Property[]> {
  try {
    // Replace with your actual GitHub raw URL or API endpoint
    // const response = await fetch('YOUR_GITHUB_RAW_URL', {
    //   next: { revalidate: 3600 } // Revalidate every hour
    // })
    // const properties = await response.json()
    // return properties.filter(p => p.featured)

    // Mock data for now
    const mockProperties: Property[] = [
      {
        id: "1",
        title: "Luxury Villa in New Cairo",
        titleAr: "فيلا فاخرة في القاهرة الجديدة",
        description: "Stunning 5-bedroom villa with private pool and garden",
        descriptionAr: "فيلا مذهلة بـ 5 غرف نوم مع مسبح وحديقة خاصة",
        price: 12500000,
        currency: "EGP",
        location: "New Cairo, Egypt",
        locationAr: "القاهرة الجديدة، مصر",
        city: "Cairo",
        type: "Villa",
        bedrooms: 5,
        bathrooms: 4,
        area: 450,
        images: ["/luxury-villa-exterior-new-cairo.jpg"],
        featured: true,
      },
      {
        id: "2",
        title: "Modern Apartment in Dubai Marina",
        titleAr: "شقة عصرية في دبي مارينا",
        description: "Luxurious 3-bedroom apartment with stunning marina views",
        descriptionAr: "شقة فاخرة بـ 3 غرف نوم مع إطلالات خلابة على المارينا",
        price: 2800000,
        currency: "AED",
        location: "Dubai Marina, UAE",
        locationAr: "دبي مارينا، الإمارات",
        city: "Dubai",
        type: "Apartment",
        bedrooms: 3,
        bathrooms: 3,
        area: 220,
        images: ["/dubai-marina-apartment-exterior.jpg"],
        featured: true,
      },
      {
        id: "3",
        title: "Penthouse in Downtown Cairo",
        titleAr: "بنتهاوس في وسط القاهرة",
        description: "Exclusive penthouse with panoramic city views",
        descriptionAr: "بنتهاوس حصري مع إطلالات بانورامية على المدينة",
        price: 18000000,
        currency: "EGP",
        location: "Downtown Cairo, Egypt",
        locationAr: "وسط القاهرة، مصر",
        city: "Cairo",
        type: "Penthouse",
        bedrooms: 4,
        bathrooms: 4,
        area: 380,
        images: ["/cairo-penthouse-exterior.jpg"],
        featured: true,
      },
    ];
    return mockProperties;
  } catch (error) {
    console.error("Error fetching properties:", error);
    return [];
  }
}

// Add metadata for SEO
export const metadata = {
  title: "Livora - Luxury Real Estate in Cairo & Dubai",
  description:
    "From Cairo to Dubai — Your Real Estate Journey Starts Here. Discover premium properties and investment opportunities.",
  openGraph: {
    title: "Livora - Luxury Real Estate in Cairo & Dubai",
    description: "From Cairo to Dubai — Your Real Estate Journey Starts Here",
    images: ["/luxury-skyline-cairo-dubai.jpg"],
  },
};
