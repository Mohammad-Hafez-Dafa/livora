"use client"

import { PropertyCarousel } from "./property-carousel"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import type { Property } from "@/lib/types"
import Link from "next/link"

interface PropertyCardProps {
  property: Property
}

export function PropertyCard({ property }: PropertyCardProps) {
  const { language } = useLanguage()

  const title = language === "en" ? property.title : property.titleAr
  const location = language === "en" ? property.location : property.locationAr
  const price = language === "en" ? property.price : property.priceAr
  const description = language === "en" ? property.description : property.descriptionAr

  return (
    <div className="bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow h-full flex flex-col">
      <PropertyCarousel images={property?.images} alt={title} />

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-3">
          <div>
            <Badge variant="secondary" className="mb-2">
              {property.city === "cairo" ? "Cairo" : "Dubai"}
            </Badge>
            <h3 className="font-serif text-xl font-bold mb-1">{title}</h3>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{location}</span>
            </div>
          </div>
        </div>

        <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed flex-1">{description}</p>

        <div className="flex flex-col sm:flex-row sm:items-center gap-y-3 justify-between pt-4 border-t border-border mt-auto">
          <div className="font-serif text-2xl font-bold text-gold">{price} {property.currency}</div>
          <Button asChild size="sm" className="bg-primary text-off-white hover:bg-primary/90">
            <Link href={`/projects/${property.id}`}>View Details</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
