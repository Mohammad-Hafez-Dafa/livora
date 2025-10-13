"use client";

import { Building2, TrendingUp, Shield, Award } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface WhyChooseUsSectionProps {
  lang?: "en" | "ar"
}

export function WhyChooseUsSection({ lang = "en" }: WhyChooseUsSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 px-4 bg-card">
      <div className="container mx-auto">
        <div 
          className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${
            isVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 px-4">
            {lang === "ar" ? "لماذا تختار ليفورا" : "Why Choose Livora"}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            {lang === "ar" 
              ? "نعيد تعريف الثقة والشفافية في العقارات" 
              : "We redefine trust and transparency in real estate"}
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`text-center p-6 rounded-lg hover:bg-accent/5 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 150}ms` : "0ms",
              }}
            >
              <div className="w-14 h-14 md:w-16 md:h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 transform transition-transform duration-500 hover:scale-110 hover:rotate-6">
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
  );
}