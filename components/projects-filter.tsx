"use client";

import { PropertyCard } from "@/components/property-card";
import { useLanguage } from "@/lib/language-context";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import type { Property } from "@/lib/types";

interface ProjectsFilterProps {
  properties: Property[];
}

export function ProjectsFilter({ properties }: ProjectsFilterProps) {
  const { t, language } = useLanguage();
  const [filter, setFilter] = useState<"all" | "Cairo" | "Dubai" | "North Coast">("all");

  const filteredProperties = properties.filter((property) => {
    if (filter === "all") return true;
    return property.city === filter;
  });

  // Get unique cities from properties
  const cities = Array.from(new Set(properties.map(p => p.city)));
  return (
    <>
      {/* Filter Section */}
      <section className="py-8 border-b border-border sticky top-20 bg-background/95 backdrop-blur-sm z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
              className={filter === "all" ? "bg-primary text-off-white" : ""}
            >
              {t("All Properties", "جميع العقارات")}
            </Button>
            
            {cities.map((city) => {
              const property = properties.find(p => p.city === city);
              const cityLabel = language === "ar" ? property?.cityAr || city : city;
              
              return (
                <Button
                  key={city}
                  variant={filter === city ? "default" : "outline"}
                  onClick={() => setFilter(city as any)}
                  className={filter === city ? "bg-primary text-off-white" : ""}
                >
                  {cityLabel}
                </Button>
              );
            })}
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
    </>
  );
}