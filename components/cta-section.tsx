// Server Component - No "use client" directive needed

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface CTASectionProps {
  lang?: "en" | "ar"
}

export function CTASection({ lang = "en" }: CTASectionProps) {
  return (
    <section className="py-16 md:py-24 bg-primary text-off-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-balance px-4">
          {lang === "ar" 
            ? "مستعد لإيجاد عقار أحلامك؟" 
            : "Ready to Find Your Dream Property?"}
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-off-white/80 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
          {lang === "ar"
            ? "دع خبرائنا يرشدونك عبر أفضل الفرص الاستثمارية في القاهرة ودبي"
            : "Let our experts guide you through the best investment opportunities in Cairo and Dubai"}
        </p>
        <Button
          asChild
          size="lg"
          className="bg-accent text-primary hover:bg-accent/90 text-base md:text-lg px-6 md:px-8"
        >
          <Link href="/contact">
            {lang === "ar" ? "ابدأ الآن" : "Get Started"}
            <ArrowRight className="h-4 w-4 md:h-5 md:w-5 ltr:ml-2 rtl:mr-2" />
          </Link>
        </Button>
      </div>
    </section>
  )
}