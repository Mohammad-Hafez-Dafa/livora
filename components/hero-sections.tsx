"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-context";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 md:py-0">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary  to-primary">
        <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dd1bi4lzz/image/upload/v1760117759/2dc04281-d78b-4e2b-b9d6-ad0c9d0d9539_xfopkw.png')] bg-cover bg-center opacity-20" />
      </div>

      {/* Content - Flexbox for vertical centering and spacing */}
      <div className="relative z-10 container mx-auto px-4 w-full">
        <div className="max-w-4xl mx-auto flex flex-col items-center justify-center">
          {/* Text Content - Centered */}
          <div className="text-center flex-grow flex flex-col items-center justify-center space-y-4 md:space-y-6">
            <h1 className="font-serif tracking-[18px] xl:tracking-[20px] text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-off-white text-balance leading-tight">
              LIVORA
            </h1>
            <p className="text-base tracking-[8px] md:tracking-[18px] sm:text-lg md:text-2xl text-off-white/90 text-balance px-4">
              {t("Where Luxury Lives", "حيث تعيش الرفاهية")}
            </p>
          </div>

          {/* Buttons - Anchored to bottom */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center w-full max-w-md mt-12">
            <Button
              asChild
              size="lg"
              className="bg-accent text-primary hover:bg-accent/90 text-base md:text-lg px-6 md:px-8 w-full sm:w-auto"
            >
              <Link href="/projects">
                {t("View Projects", "عرض المشروعات")}
                <ArrowRight className="ltr:ml-2 rtl:mr-2 h-4 w-4 md:h-5 md:w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-off-white text-off-white hover:bg-off-white hover:text-primary text-base md:text-lg px-6 md:px-8 bg-transparent w-full sm:w-auto"
            >
              <Link href="/contact">
                {t("Contact an Expert", "تواصل مع خبير")}
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-off-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-off-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}