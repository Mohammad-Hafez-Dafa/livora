import { WhyChooseUsSection } from "@/components/why-choose-us-section";
import { CTASection } from "@/components/cta-section";
import { HeroSection } from "@/components/hero-sections";
import { FeaturedPropertiesCarousel } from "@/components/featured-properties-carousel";
import { StatsSection } from "@/components/stats-sectio";
import { getFeaturedProperties } from "@/lib/data-fetcher";

export default async function HomePage() {
  const featuredProperties = await getFeaturedProperties(6);

  return (
    <div className="min-h-screen">
      <HeroSection />
      
      <div className="relative z-0">
        <StatsSection />
        <section className="px-4 py-16 md:py-24 bg-card">
          <div className="container mx-auto">
            <FeaturedPropertiesCarousel properties={featuredProperties} />
          </div>
        </section>
        <WhyChooseUsSection />
        <CTASection />
      </div>
    </div>
  );
}

export const metadata = {
  title: "Livora - Luxury Real Estate in Cairo & Dubai",
  description:
    "From Dubai to Cairo — Your Real Estate Journey Starts Here. Discover premium properties and investment opportunities.",
  openGraph: {
    title: "Livora - Luxury Real Estate in Cairo & Dubai",
    description: "From Dubai to Cairo — Your Real Estate Journey Starts Here",
    images: ["/luxury-skyline-cairo-dubai.jpg"],
  },
};