import { PropertyDetailsClient } from "@/components/property-details-client";
import { getAllProperties, getPropertyById } from "@/lib/data-fetcher";
import { notFound } from "next/navigation";

interface PropertyDetailsPageProps {
  params: {
    id: string;
  };
}

export default async function ProjectDetailsPage({ params }: PropertyDetailsPageProps) {
  const property = await getPropertyById(params.id);

  // If property not found, show 404
  if (!property) {
    notFound();
  }

  return <PropertyDetailsClient property={property} />;
}

// Generate static params for all properties (optional, for static generation)
export async function generateStaticParams() {
  const properties = await getAllProperties();
  
  return properties.map((property) => ({
    id: property.id,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PropertyDetailsPageProps) {
  const property = await getPropertyById(params?.id);

  if (!property) {
    return {
      title: "Property Not Found",
    };
  }

  return {
    title: `${property.title} - Livora Real Estate`,
    description: property.description,
    openGraph: {
      title: property.title,
      description: property.description,
      images: property.images.slice(0, 1),
    },
  };
}