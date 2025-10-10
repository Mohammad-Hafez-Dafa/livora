// Server Component - No "use client" directive needed

import { Building2, TrendingUp, Shield, Award } from "lucide-react"

interface WhyChooseUsSectionProps {
  lang?: "en" | "ar"
}

export function WhyChooseUsSection({ lang = "en" }: WhyChooseUsSectionProps) {
  const features = [
    {
      icon: Shield,
      titleEn: "Trust",
      titleAr: "المصداقية",
      descriptionEn: "Transparent dealings with every client",
      descriptionAr: "تعاملات شفافة مع كل عميل",
    },
    {
      icon: Award,
      titleEn: "Expertise",
      titleAr: "الخبرة",
      descriptionEn: "15+ years in Cairo and Dubai markets",
      descriptionAr: "15+ سنة في أسواق القاهرة ودبي",
    },
    {
      icon: TrendingUp,
      titleEn: "Investment",
      titleAr: "الاستثمار",
      descriptionEn: "Premium opportunities tailored to your goals",
      descriptionAr: "فرص مميزة مصممة لأهدافك",
    },
    {
      icon: Building2,
      titleEn: "Portfolio",
      titleAr: "المحفظة",
      descriptionEn: "Exclusive access to top developments",
      descriptionAr: "وصول حصري لأفضل المشاريع",
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 px-4">
            {lang === "ar" ? "لماذا تختار ليفورا" : "Why Choose Livora"}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            {lang === "ar" 
              ? "نعيد تعريف الثقة والشفافية في العقارات" 
              : "We redefine trust and transparency in real estate"}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-lg hover:bg-card transition-colors">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-7 w-7 md:h-8 md:w-8 text-gold" />
              </div>
              <h3 className="font-serif text-lg md:text-xl font-bold mb-2">
                {lang === "ar" ? feature.titleAr : feature.titleEn}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {lang === "ar" ? feature.descriptionAr : feature.descriptionEn}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}