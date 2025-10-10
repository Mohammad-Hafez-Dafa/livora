"use client";

import { PropertyCard } from "@/components/property-card";
import { useLanguage } from "@/lib/language-context";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { mockProperties } from "@/data/projects";
import { PageHeader } from "@/components/page-header";

export default function ProjectsPage() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<"all" | "cairo" | "dubai">("all");

  const filteredProperties = mockProperties.filter((property) => {
    if (filter === "all") return true;
    return property.city === filter;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHeader
        title={t("Our Projects", "مشروعاتنا")}
        description={t(
          "Discover premium properties across Cairo and Dubai",
          "اكتشف العقارات المميزة في القاهرة ودبي"
        )}
      />

      {/* Filter Section */}
      <section className="py-8 border-b border-border sticky top-20 bg-background/95 backdrop-blur-sm z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
              className={filter === "all" ? "bg-primary text-off-white" : ""}
            >
              {t("All Properties", "جميع العقارات")}
            </Button>
            <Button
              variant={filter === "cairo" ? "default" : "outline"}
              onClick={() => setFilter("cairo")}
              className={filter === "cairo" ? "bg-primary text-off-white" : ""}
            >
              {t("Cairo", "القاهرة")}
            </Button>
            <Button
              variant={filter === "dubai" ? "default" : "outline"}
              onClick={() => setFilter("dubai")}
              className={filter === "dubai" ? "bg-primary text-off-white" : ""}
            >
              {t("Dubai", "دبي")}
            </Button>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          {filteredProperties.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">
                {t("No properties found", "لم يتم العثور على عقارات")}
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
