"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-context";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  const { t, language } = useLanguage();

  return (
    <>
      {/* Fixed Hero Background - Behind everything */}
      <div className="sticky top-0 h-screen -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary">
          <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dd1bi4lzz/image/upload/v1760117759/2dc04281-d78b-4e2b-b9d6-ad0c9d0d9539_xfopkw.png')] bg-cover bg-center opacity-20" />
        </div>
      </div>

      {/* Hero Content - In front, clickable */}
      <section className="absolute top-0 left-0 right-0 h-screen flex items-center justify-center pointer-events-none">
        <div className="container mx-auto px-4 w-full pointer-events-none">
          <div className="max-w-4xl mx-auto flex flex-col items-center justify-center">
            {/* Text Content - Centered */}
            <div className="text-center flex flex-col items-center justify-center space-y-3 md:space-y-6 mb-12 md:mb-16 pointer-events-none">
              <h1 
                className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-off-white text-balance leading-tight"
                style={{ 
                  letterSpacing: language === "ar" ? "0.5rem" : "1.125rem",
                  textIndent: language === "ar" ? "0.5rem" : "1.125rem",
                }}
              >
                LIVORA
              </h1>
              <p 
                className="text-base sm:text-lg md:text-2xl text-off-white/90 text-balance px-4"
                style={{ 
                  letterSpacing: language === "ar" ? "0.3rem" : "0.5rem",
                  textIndent: language === "ar" ? "0.3rem" : "0.5rem",
                }}
              >
                {t("Where Luxury Lives", "حيث تعيش الرفاهية")}
              </p>
            </div>

            {/* Buttons - Enable pointer events only on buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-between items-stretch w-full max-w-[42rem] px-4 pointer-events-auto">
              <Button
                asChild
                size="lg"
                className="bg-accent text-primary hover:bg-accent/90 text-base md:text-lg py-1.5 px-6 md:px-8 flex-1"
              >
                <Link href="/projects" className="flex items-center justify-center">
                  {t("View Projects", "عرض المشروعات")}
                  <ArrowRight className="ltr:ml-2 rtl:mr-2 h-4 w-4 md:h-5 md:w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-off-white text-off-white hover:bg-off-white hover:text-primary text-base md:text-lg py-1.5 px-6 md:px-8 bg-transparent flex-1"
              >
                <Link href="/contact" className="flex items-center justify-center">
                  {t("Contact an Expert", "تواصل مع خبير")}
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block pointer-events-none">
          <div className="w-6 h-10 border-2 border-off-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-off-white/50 rounded-full" />
          </div>
        </div>
      </section>
    </>
  );
}