"use client";

import { useParams } from "next/navigation";
import { useLanguage } from "@/lib/language-context";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { mockProperties } from "@/data/projects";
import {
  Bed,
  Bath,
  Square,
  MapPin,
  Building2,
  Phone,
  Mail,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactFormModal } from "@/components/contact-form-modal";
import { formatPrice } from "@/lib/format-currency";

export default function ProjectDetailsPage() {
  const params = useParams();
  const { t, language } = useLanguage();

  // Find the property by ID
  const property = mockProperties.find((p) => p.id === params.id);

  // If property not found, show 404
  if (!property) {
    notFound();
  }

  const title = language === "ar" ? property.titleAr : property.title;
  const description =
    language === "ar" ? property.descriptionAr : property.description;
  const location = language === "ar" ? property.locationAr : property.location;

  return (
    <div className="min-h-screen">
      {/* Page Header with first property image as background */}
      <PageHeader
        title={title}
        description={location}
        backgroundImage={property.images[0] || undefined}
      />

      {/* Property Details Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Image Gallery */}
            <div className="mb-12">
              {property.images.length === 1 && (
                // Single image - full width
                <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden">
                  <Image
                    src={property.images[0]}
                    alt={title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}

              {property.images.length === 2 && (
                // Two images - side by side
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {property.images.map((image, index) => (
                    <div
                      key={index}
                      className="relative h-80 md:h-96 rounded-lg overflow-hidden"
                    >
                      <Image
                        src={image}
                        alt={`${title} - Image ${index + 1}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              )}

              {property.images.length === 3 && (
                // Three images - one large, two small
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden">
                    <Image
                      src={property.images[0]}
                      alt={`${title} - Main`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    {property.images.slice(1, 3).map((image, index) => (
                      <div
                        key={index + 1}
                        className="relative h-48 md:h-[242px] rounded-lg overflow-hidden"
                      >
                        <Image
                          src={image}
                          alt={`${title} - Image ${index + 2}`}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {property.images.length === 4 && (
                // Four images - two rows of two
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {property.images.map((image, index) => (
                    <div
                      key={index}
                      className="relative h-64 md:h-80 rounded-lg overflow-hidden"
                    >
                      <Image
                        src={image}
                        alt={`${title} - Image ${index + 1}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              )}

              {property.images.length >= 5 && (
                // Five or more images - masonry style grid
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {/* First image - large featured */}
                  <div className="md:col-span-2 md:row-span-2 relative h-96 md:h-[500px] rounded-lg overflow-hidden">
                    <Image
                      src={property.images[0]}
                      alt={`${title} - Main`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Next 4 images in grid */}
                  {property.images.slice(1, 5).map((image, index) => (
                    <div
                      key={index + 1}
                      className={`relative ${
                        index < 2
                          ? "md:col-span-2 h-60 md:h-[242px]"
                          : "md:col-span-1 h-60"
                      } rounded-lg overflow-hidden`}
                    >
                      <Image
                        src={image}
                        alt={`${title} - Image ${index + 2}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}

                  {/* Show remaining images indicator if more than 5 */}
                  {property.images.length > 5 && (
                    <div className="md:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                      {property.images.slice(5).map((image, index) => (
                        <div
                          key={index + 5}
                          className="relative h-48 rounded-lg overflow-hidden"
                        >
                          <Image
                            src={image}
                            alt={`${title} - Image ${index + 6}`}
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                {/* Price and Type */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl font-serif font-bold text-gold">
                      {formatPrice(property.price, property.currency, language)}
                    </div>
                    <div className="bg-primary/10 px-4 py-2 rounded-full">
                      <span className="text-sm font-medium">
                        {property.type}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-5 w-5" />
                    <span>{location}</span>
                  </div>
                </div>

                {/* Property Features */}
                <div className="mb-8 pb-8 border-b">
                  <h2 className="font-serif text-2xl font-bold mb-4">
                    {t("Property Features", "مميزات العقار")}
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="flex items-center gap-3 p-4 bg-card rounded-lg">
                      <Bed className="h-6 w-6 text-gold" />
                      <div>
                        <div className="text-sm text-muted-foreground">
                          {t("Bedrooms", "غرف النوم")}
                        </div>
                        <div className="text-lg font-semibold">
                          {property.bedrooms}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-card rounded-lg">
                      <Bath className="h-6 w-6 text-gold" />
                      <div>
                        <div className="text-sm text-muted-foreground">
                          {t("Bathrooms", "الحمامات")}
                        </div>
                        <div className="text-lg font-semibold">
                          {property.bathrooms}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-card rounded-lg">
                      <Square className="h-6 w-6 text-gold" />
                      <div>
                        <div className="text-sm text-muted-foreground">
                          {t("Area", "المساحة")}
                        </div>
                        <div className="text-lg font-semibold">
                          {property.area} {t("sqm", "م²")}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-card rounded-lg">
                      <Building2 className="h-6 w-6 text-gold" />
                      <div>
                        <div className="text-sm text-muted-foreground">
                          {t("Type", "النوع")}
                        </div>
                        <div className="text-lg font-semibold">
                          {property.type}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-8">
                  <h2 className="font-serif text-2xl font-bold mb-4">
                    {t("Description", "الوصف")}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {description}
                  </p>
                </div>

                {/* Amenities */}
                {property.amenities && property.amenities.length > 0 && (
                  <div>
                    <h2 className="font-serif text-2xl font-bold mb-4">
                      {t("Amenities", "المرافق")}
                    </h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {property.amenities.map((amenity, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-gold" />
                          <span>{amenity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Sidebar - Contact Form */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 bg-card p-6 rounded-lg border">
                  <h3 className="font-serif text-xl font-bold mb-4">
                    {t("Interested in this property?", "مهتم بهذا العقار؟")}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    {t(
                      "Contact our team for more information and to schedule a viewing.",
                      "اتصل بفريقنا للحصول على مزيد من المعلومات وتحديد موعد للمعاينة."
                    )}
                  </p>

                  <div className="space-y-4 mb-6">
                    <a
                      href="+20 10 55 11 99 2701"
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
                    >
                      <Phone className="h-5 w-5 text-gold" />
                      <span dir="ltr">+20 10 55 11 99 2701</span>
                    </a>
                    <a
                      href="mailto:Info@livoraproperties.com"
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
                    >
                      <Mail className="h-5 w-5 text-gold" />
                      <span>Info@livoraproperties.com</span>
                    </a>
                  </div>

                  <ContactFormModal
                    propertyTitle={title}
                    trigger={
                      <Button
                        size="lg"
                        className="w-full bg-primary text-off-white hover:bg-primary/90"
                      >
                        {t(
                          "Request More Information",
                          "طلب المزيد من المعلومات"
                        )}
                      </Button>
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Similar Properties Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-3xl font-bold mb-8 text-center">
              {t("Similar Properties", "عقارات مشابهة")}
            </h2>
            {/* Add PropertyCard components here for similar properties */}
            <div className="text-center">
              <Button asChild variant="outline">
                <Link href="/projects">
                  {t("View All Properties", "عرض جميع العقارات")}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
