"use client";

import { useLanguage } from "@/lib/language-context";
import { Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import type { TeamMember } from "@/lib/types";
import { PageHeader } from "@/components/page-header";

// Mock data - replace with actual data from GitHub
const mockTeam: TeamMember[] = [
  {
    id: "1",
    name: "Ahmed Hassan",
    nameAr: "أحمد حسن",
    role: "CEO & Founder",
    roleAr: "الرئيس التنفيذي والمؤسس",
    experience: "5+ years in real estate development and investment",
    experienceAr: "أكثر من 5 عامًا في التطوير العقاري والاستثمار",
    image: "/professional-businessman.png",
    linkedin: "#",
  },
  {
    id: "2",
    name: "Sarah Al-Mansoori",
    nameAr: "سارة المنصوري",
    role: "Dubai Operations Director",
    roleAr: "مديرة عمليات دبي",
    experience: "12+ years specializing in Dubai luxury properties",
    experienceAr: "أكثر من 12 عامًا متخصصة في العقارات الفاخرة في دبي",
    image: "/professional-businesswoman.png",
    linkedin: "#",
  },
  {
    id: "3",
    name: "Mohamed Khalil",
    nameAr: "محمد خليل",
    role: "Cairo Operations Director",
    roleAr: "مدير عمليات القاهرة",
    experience: "10+ years in Egyptian real estate market",
    experienceAr: "أكثر من 10 سنوات في سوق العقارات المصري",
    image: "/professional-businessman.png",
    linkedin: "#",
  },
  {
    id: "4",
    name: "Layla Ibrahim",
    nameAr: "ليلى إبراهيم",
    role: "Investment Advisor",
    roleAr: "مستشارة استثمار",
    experience: "8+ years in real estate investment consulting",
    experienceAr: "أكثر من 8 سنوات في استشارات الاستثمار العقاري",
    image: "/professional-businesswoman.png",
    linkedin: "#",
  },
  {
    id: "5",
    name: "Omar Farouk",
    nameAr: "عمر فاروق",
    role: "Senior Property Consultant",
    roleAr: "مستشار عقاري أول",
    experience: "9+ years connecting clients with premium properties",
    experienceAr: "أكثر من 9 سنوات في ربط العملاء بالعقارات المميزة",
    image: "/professional-businessman.png",
    linkedin: "#",
  },
  {
    id: "6",
    name: "Fatima Al-Rashid",
    nameAr: "فاطمة الراشد",
    role: "Marketing Director",
    roleAr: "مديرة التسويق",
    experience: "7+ years in luxury real estate marketing",
    experienceAr: "أكثر من 7 سنوات في تسويق العقارات الفاخرة",
    image: "/professional-businesswoman.png",
    linkedin: "#",
  },
];

export default function TeamPage() {
  const { language, t } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHeader
        title={t("Meet Our Experts", "تعرف على خبرائنا")}
        description={t(
          "The experts connecting Cairo and Dubai's real estate markets",
          "الخبراء الذين يربطون أسواق العقارات في القاهرة ودبي"
        )}
      />

      {/* Team Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {mockTeam.map((member) => {
              const name = language === "en" ? member.name : member.nameAr;
              const role = language === "en" ? member.role : member.roleAr;
              const experience =
                language === "en" ? member.experience : member.experienceAr;

              return (
                <div key={member.id} className="group">
                  <div className="relative aspect-square mb-6 rounded-lg overflow-hidden">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-serif text-2xl font-bold mb-2">{name}</h3>
                  <p className="text-gold font-medium mb-3">{role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {experience}
                  </p>
                  <div className="flex items-center gap-3">
                    {member.linkedin && (
                      <Button
                        asChild
                        variant="ghost"
                        size="icon"
                        className="h-9 w-9"
                      >
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Linkedin className="h-5 w-5" />
                        </a>
                      </Button>
                    )}
                    <Button
                      asChild
                      variant="ghost"
                      size="icon"
                      className="h-9 w-9"
                    >
                      <a href="/contact">
                        <Mail className="h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            {t("Work With Our Team", "اعمل مع فريقنا")}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t(
              "Our experienced consultants are ready to help you find the perfect property or investment opportunity",
              "مستشارونا ذوو الخبرة مستعدون لمساعدتك في العثور على العقار المثالي أو فرصة الاستثمار"
            )}
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary text-off-white hover:bg-primary/90 text-lg px-8"
          >
            <a href="/contact">{t("Get in Touch", "تواصل معنا")}</a>
          </Button>
        </div>
      </section>
    </div>
  );
}
