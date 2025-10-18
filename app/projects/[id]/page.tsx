import { notFound } from "next/navigation";
import { getPropertyById, getAllProperties } from "@/lib/data-fetcher";
import { PropertyDetailsClient } from "@/components/property-details-client";

interface PropertyDetailsPageProps {
  params: Promise<{ id: string }>; 
}

export default async function ProjectDetailsPage({ params }: PropertyDetailsPageProps) {
  const { id } = await params; 
  
  const property = await getPropertyById(id);
console.log(property)
  if (!property) {
    notFound();
  }

  return <PropertyDetailsClient property={property} />;
}

// Generate static params
export async function generateStaticParams() {
  const properties = await getAllProperties();
  
  return properties.map((property) => ({
    id: property.id,
  }));
}

// Generate metadata
export async function generateMetadata({ params }: PropertyDetailsPageProps) {
  const { id } = await params;  // ✅ await الـ Promise
  const property = await getPropertyById(id);

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

export const dynamic = 'force-static';
export const revalidate = 3600;