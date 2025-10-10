"use client";
import { PageHeader } from "@/components/page-header";
import { useLanguage } from "@/lib/language-context";
import { Target, Eye, Award, Shield, TrendingUp, Users } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  const { t } = useLanguage();

  const values = [
    {
      icon: Shield,
      title: t("Trust & Transparency", "المصداقية والشفافية"),
      description: t(
        "We believe in honest, transparent dealings with every client",
        "نؤمن بالتعاملات الصادقة والشفافة مع كل عميل"
      ),
    },
    {
      icon: Award,
      title: t("Expertise", "الخبرة"),
      description: t(
        "15+ years of experience in Cairo and Dubai real estate markets",
        "أكثر من 15 عامًا من الخبرة في أسواق العقارات في القاهرة ودبي"
      ),
    },
    {
      icon: TrendingUp,
      title: t("Commitment", "الالتزام"),
      description: t(
        "Dedicated to helping you achieve your real estate goals",
        "ملتزمون بمساعدتك على تحقيق أهدافك العقارية"
      ),
    },
    {
      icon: Users,
      title: t("Client-Focused", "التركيز على العميل"),
      description: t(
        "Your success is our priority, every step of the way",
        "نجاحك هو أولويتنا في كل خطوة"
      ),
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHeader
        title={t("About Livora Properties", "عن ليفورا العقارية")}
        description={t(
          "Connecting investors and homeowners with premium opportunities across Cairo and Dubai",
          "ربط المستثمرين وأصحاب المنازل بالفرص المميزة في القاهرة ودبي"
        )}
      />
      {/* About Content */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="font-serif text-4xl font-bold mb-6">
                {t("Who We Are", "من نحن")}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {t(
                  "Livora Properties is a real estate consultancy connecting investors and homeowners with premium opportunities across Cairo and Dubai. With over 15 years of experience, we have established ourselves as trusted advisors in the region's most dynamic real estate markets.",
                  "ليفورا العقارية هي شركة استشارات عقارية تربط المستثمرين وأصحاب المنازل بالفرص المميزة في القاهرة ودبي. مع أكثر من 15 عامًا من الخبرة، أثبتنا أنفسنا كمستشارين موثوقين في أكثر أسواق العقارات ديناميكية في المنطقة."
                )}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t(
                  "Our team of expert consultants brings deep market knowledge, professional integrity, and a commitment to excellence in every transaction. We pride ourselves on building long-term relationships based on trust and delivering exceptional results.",
                  "يجلب فريقنا من المستشارين الخبراء معرفة عميقة بالسوق والنزاهة المهنية والالتزام بالتميز في كل معاملة. نفخر ببناء علاقات طويلة الأمد قائمة على الثقة وتقديم نتائج استثنائية."
                )}
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/modern-real-estate-office.png"
                alt="Livora Properties Office"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Vision & Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
            <div className="bg-card p-8 rounded-lg border border-border">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-gold" />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-4">
                {t("Our Vision", "رؤيتنا")}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t(
                  "To redefine trust and transparency in real estate, becoming the most respected consultancy connecting Cairo and Dubai's premium property markets.",
                  "إعادة تعريف الثقة والشفافية في العقارات، لنصبح الاستشارات الأكثر احترامًا التي تربط أسواق العقارات المميزة في القاهرة ودبي."
                )}
              </p>
            </div>
            <div className="bg-card p-8 rounded-lg border border-border">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-gold" />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-4">
                {t("Our Mission", "رسالتنا")}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t(
                  "To provide expert guidance and exclusive investment opportunities tailored to every client's goals, ensuring exceptional service and lasting value.",
                  "تقديم إرشادات الخبراء وفرص الاستثمار الحصرية المصممة لأهداف كل عميل، مع ضمان خدمة استثنائية وقيمة دائمة."
                )}
              </p>
            </div>
          </div>

          {/* Values */}
          <div>
            <h2 className="font-serif text-4xl font-bold text-center mb-12">
              {t("Our Values", "قيمنا")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-gold" />
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
