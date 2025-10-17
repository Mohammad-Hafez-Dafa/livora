import { PageHeader } from "@/components/page-header";
import { ProjectsFilter } from "@/components/projects-filter";
import { getAllProperties } from "@/lib/data-fetcher";

export default async function ProjectsPage() {
  const properties = await getAllProperties();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHeader
        title="Our Projects"
        titleAr="مشروعاتنا"
        description="Discover premium properties across Cairo and Dubai"
        descriptionAr="اكتشف العقارات المميزة في القاهرة ودبي"
      />

      {/* Client Component for Filtering */}
      <ProjectsFilter properties={properties} />
    </div>
  );
}

export const metadata = {
  title: "Our Projects - Livora Real Estate",
  description: "Browse our exclusive collection of luxury properties in Cairo and Dubai",
};