// Server Component - No "use client" directive needed

interface StatsSectionProps {
  lang?: "en" | "ar"
}

export function StatsSection({ lang = "en" }: StatsSectionProps) {
  const stats = [
    { 
      number: "500+", 
      labelEn: "Properties",
      labelAr: "عقار"
    },
    { 
      number: "2", 
      labelEn: "Cities",
      labelAr: "مدينة"
    },
    { 
      number: "1000+", 
      labelEn: "Happy Clients",
      labelAr: "عميل سعيد"
    },
    { 
      number: "15+", 
      labelEn: "Years Experience",
      labelAr: "سنة خبرة"
    },
  ]

  return (
    <section className="py-12 md:py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gold mb-2">
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">
                {lang === "ar" ? stat.labelAr : stat.labelEn}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}