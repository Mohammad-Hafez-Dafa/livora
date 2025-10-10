"use client"

import { PropertyCarousel } from "@/components/property-carousel"
import { ContactFormModal } from "@/components/contact-form-modal"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/lib/language-context"
import { MapPin, Check, ArrowLeft } from "lucide-react"
import Link from "next/link"

// Mock data - in production, fetch from GitHub
const mockProperty = {
  id: "1",
  title: "Luxury Villa in New Cairo",
  titleAr: "فيلا فاخرة في القاهرة الجديدة",
  location: "New Cairo, Egypt",
  locationAr: "القاهرة الجديدة، مصر",
  city: "cairo" as const,
  price: "EGP 15,000,000",
  priceAr: "15,000,000 جنيه مصري",
  description:
    "Stunning 5-bedroom villa with modern amenities and private garden in the heart of New Cairo. This exceptional property offers luxurious living spaces, high-end finishes, and a perfect blend of contemporary design and comfort.",
  descriptionAr:
    "فيلا مذهلة من 5 غرف نوم مع وسائل راحة حديثة وحديقة خاصة في قلب القاهرة الجديدة. يوفر هذا العقار الاستثنائي مساحات معيشة فاخرة وتشطيبات راقية ومزيج مثالي من التصميم المعاصر والراحة.",
  images: [
    "/luxury-villa-exterior-new-cairo.jpg",
    "/luxury-villa-living-room.png",
    "/luxury-villa-bedroom.png",
    "/luxury-villa-kitchen.png",
    "/luxury-villa-garden.png",
  ],
  features: [
    "5 Bedrooms",
    "6 Bathrooms",
    "Private Garden",
    "Swimming Pool",
    "Smart Home System",
    "Covered Parking",
    "Security System",
    "Modern Kitchen",
  ],
  featuresAr: [
    "5 غرف نوم",
    "6 حمامات",
    "حديقة خاصة",
    "حمام سباحة",
    "نظام منزل ذكي",
    "موقف سيارات مغطى",
    "نظام أمني",
    "مطبخ حديث",
  ],
  paymentPlans: "Flexible payment plans available with up to 5 years installments",
  paymentPlansAr: "خطط دفع مرنة متاحة مع أقساط تصل إلى 5 سنوات",
  developer: "Premium Developments Egypt",
  type: "sale" as const,
}

export default function PropertyDetailPage({ params }: { params: { id: string } }) {
  const { id } = params
  const { language, t } = useLanguage()

  // In production, fetch property data based on id
  const property = mockProperty

  const title = language === "en" ? property.title : property.titleAr
  const location = language === "en" ? property.location : property.locationAr
  const price = language === "en" ? property.price : property.priceAr
  const description = language === "en" ? property.description : property.descriptionAr
  const features = language === "en" ? property.features : property.featuresAr
  const paymentPlans = language === "en" ? property.paymentPlans : property.paymentPlansAr

  return (
    <div className="min-h-screen">
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Button asChild variant="ghost" className="mb-8">
            <Link href="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t("Back to Projects", "العودة للمشروعات")}
            </Link>
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Images */}
            <div className="lg:col-span-2">
              <PropertyCarousel images={property.images} alt={title} />
            </div>

            {/* Details */}
            <div className="lg:col-span-1">
              <Badge variant="secondary" className="mb-4">
                {property.city === "cairo" ? "Cairo" : "Dubai"}
              </Badge>
              <h1 className="font-serif text-4xl font-bold mb-4">{title}</h1>
              <div className="flex items-center gap-2 text-muted-foreground mb-6">
                <MapPin className="h-5 w-5" />
                <span>{location}</span>
              </div>

              <div className="font-serif text-4xl font-bold text-gold mb-8">{price}</div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-xl font-bold mb-3">{t("Description", "الوصف")}</h3>
                  <p className="text-muted-foreground leading-relaxed">{description}</p>
                </div>

                <div>
                  <h3 className="font-serif text-xl font-bold mb-3">{t("Features", "المميزات")}</h3>
                  <ul className="grid grid-cols-2 gap-3">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <Check className="h-4 w-4 text-gold flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {paymentPlans && (
                  <div>
                    <h3 className="font-serif text-xl font-bold mb-3">{t("Payment Plans", "خطط الدفع")}</h3>
                    <p className="text-sm text-muted-foreground">{paymentPlans}</p>
                  </div>
                )}

                {property.developer && (
                  <div>
                    <h3 className="font-serif text-xl font-bold mb-3">{t("Developer", "المطور")}</h3>
                    <p className="text-sm text-muted-foreground">{property.developer}</p>
                  </div>
                )}

                <ContactFormModal
                  propertyTitle={title}
                  trigger={
                    <Button size="lg" className="w-full bg-primary text-off-white hover:bg-primary/90">
                      {t("Request More Information", "طلب المزيد من المعلومات")}
                    </Button>
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
