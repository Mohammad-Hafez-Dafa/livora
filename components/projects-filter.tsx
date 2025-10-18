"use client";

import { PropertyCard } from "@/components/property-card";
import { useLanguage } from "@/lib/language-context";
import { useState, useCallback, useEffect } from "react";
import { Button } from "@/components/ui/button";
import type { Property } from "@/lib/types";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ScrollToTop from "./ScrollToTop";

interface ProjectsFilterProps {
  properties: Property[];
}

export function ProjectsFilter({ properties }: ProjectsFilterProps) {
  const { t, language } = useLanguage();
  const [filter, setFilter] = useState<string>("all");
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: true,
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const filteredProperties = properties.filter((property) => {
    if (filter === "all") return true;
    // Filter by the English city name regardless of display language
    return property.city === filter;
  });

  // Get unique cities from properties with their translations
  const uniqueCities = Array.from(
    new Map(
      properties.map(p => [p.city, { city: p.city, cityAr: p.cityAr }])
    ).values()
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);


  return (
    <>
      {/* Filter Section with Embla Slider */}
      <section className="pt-8 border-b border-border sticky top-15 bg-background/95 backdrop-blur-sm z-40">
        <div className="container mx-auto px-4">
          <div className="relative">
            {/* Previous Button */}
            <button
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm rounded-full p-2 shadow-md transition-opacity ${
                canScrollPrev ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
              aria-label="Previous filters"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Embla Carousel */}
            <div className="overflow-hidden pb-4" ref={emblaRef}>
              <div className="flex gap-4">
                {/* All Properties Button */}
                <div className="flex-[0_0_auto]">
                  <Button
                    variant={filter === "all" ? "default" : "outline"}
                    onClick={() => setFilter("all")}
                    className={filter === "all" ? "bg-primary text-off-white cursor-pointer" : ""}
                  >
                    {t("All Properties", "جميع العقارات")}
                  </Button>
                </div>

                {/* City Buttons */}
                {uniqueCities.map(({ city, cityAr }) => {
                  const displayName = language === "ar" ? (cityAr || city) : city;

                  return (
                    <div key={city} className="flex-[0_0_auto]">
                      <Button
                        variant={filter === city ? "default" : "outline"}
                        onClick={() => setFilter(city)}
                        className={filter === city ? "bg-primary text-off-white cursor-pointer" : "cursor-pointer"}
                      >
                        {displayName}
                      </Button>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Next Button */}
            <button
              onClick={scrollNext}
              disabled={!canScrollNext}
              className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm rounded-full p-2 shadow-md transition-opacity ${
                canScrollNext ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
              aria-label="Next filters"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
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

      {/* Scroll to Top Button */}
      <ScrollToTop/>
    </>
  );
}