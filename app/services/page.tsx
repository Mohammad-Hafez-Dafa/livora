"use client"

import { useLanguage } from "@/lib/language-context"
import { Building2, RefreshCw, Briefcase, TrendingUp, Key, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { PageHeader } from "@/components/page-header"

export default function ServicesPage() {
  const { t } = useLanguage()

  const services = [
    {
      icon: Building2,
      title: t("Property Sales & Investments", "مبيعات واستثمارات العقارات"),
      description: t(
        "Access exclusive properties in Cairo and Dubai's most sought-after locations. We connect you with premium developments and investment opportunities tailored to your goals.",
        "الوصول إلى العقارات الحصرية في أكثر المواقع المرغوبة في القاهرة ودبي. نربطك بالمشاريع المميزة وفرص الاستثمار المصممة لأهدافك.",
      ),
      features: [
        t("Residential Properties", "عقارات سكنية"),
        t("Commercial Spaces", "مساحات تجارية"),
        t("Luxury Developments", "مشاريع فاخرة"),
        t("Investment Portfolios", "محافظ استثمارية"),
      ],
    },
    {
      icon: RefreshCw,
      title: t("Resale Services", "خدمات إعادة البيع"),
      description: t(
        "Looking to sell your property? Our expert team provides comprehensive resale services, from market analysis to closing, ensuring you get the best value for your investment.",
        "تبحث عن بيع عقارك؟ يقدم فريقنا الخبير خدمات إعادة بيع شاملة، من تحليل السوق إلى الإغلاق، مما يضمن حصولك على أفضل قيمة لاستثمارك.",
      ),
      features: [
        t("Property Valuation", "تقييم العقار"),
        t("Marketing Strategy", "استراتيجية التسويق"),
        t("Buyer Matching", "مطابقة المشترين"),
        t("Negotiation Support", "دعم التفاوض"),
      ],
    },
    {
      icon: Briefcase,
      title: t("Property Management", "إدارة العقارات"),
      description: t(
        "Comprehensive property management services to maximize your investment returns. We handle everything from tenant relations to maintenance, giving you peace of mind.",
        "خدمات إدارة عقارات شاملة لتعظيم عوائد استثمارك. نتعامل مع كل شيء من علاقات المستأجرين إلى الصيانة، مما يمنحك راحة البال.",
      ),
      features: [
        t("Tenant Screening", "فحص المستأجرين"),
        t("Rent Collection", "تحصيل الإيجار"),
        t("Maintenance Coordination", "تنسيق الصيانة"),
        t("Financial Reporting", "التقارير المالية"),
      ],
    },
    {
      icon: TrendingUp,
      title: t("Investment Advisory", "الاستشارات الاستثمارية"),
      description: t(
        "Strategic guidance for real estate investments in Cairo and Dubai. Our advisors provide market insights, risk analysis, and portfolio recommendations to help you make informed decisions.",
        "إرشادات استراتيجية للاستثمارات العقارية في القاهرة ودبي. يقدم مستشارونا رؤى السوق وتحليل المخاطر وتوصيات المحفظة لمساعدتك على اتخاذ قرارات مستنيرة.",
      ),
      features: [
        t("Market Analysis", "تحليل السوق"),
        t("ROI Projections", "توقعات العائد على الاستثمار"),
        t("Portfolio Diversification", "تنويع المحفظة"),
        t("Risk Assessment", "تقييم المخاطر"),
      ],
    },
    {
      icon: Key,
      title: t("Property Viewing & Tours", "معاينة العقارات والجولات"),
      description: t(
        "Personalized property tours in Cairo and Dubai. We arrange convenient viewings and provide detailed insights to help you find the perfect property.",
        "جولات عقارية مخصصة في القاهرة ودبي. نرتب معاينات مريحة ونقدم رؤى تفصيلية لمساعدتك في العثور على العقار المثالي.",
      ),
      features: [
        t("Virtual Tours", "جولات افتراضية"),
        t("In-Person Viewings", "معاينات شخصية"),
        t("Area Guidance", "إرشادات المنطقة"),
        t("Property Comparisons", "مقارنات العقارات"),
      ],
    },
    {
      icon: FileText,
      title: t("Legal & Documentation", "القانونية والتوثيق"),
      description: t(
        "Complete support with legal procedures and documentation. We work with trusted legal partners to ensure smooth, compliant transactions.",
        "دعم كامل مع الإجراءات القانونية والتوثيق. نعمل مع شركاء قانونيين موثوقين لضمان معاملات سلسة ومتوافقة.",
      ),
      features: [
        t("Contract Review", "مراجعة العقود"),
        t("Title Verification", "التحقق من الملكية"),
        t("Registration Support", "دعم التسجيل"),
        t("Legal Consultation", "استشارة قانونية"),
      ],
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHeader
        title={t("Our Services", "خدماتنا")}
        description={t("Comprehensive real estate solutions tailored to your needs", "حلول عقارية شاملة مصممة لاحتياجاتك")}
      />

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-shadow h-full flex flex-col"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-gold" />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-1">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-off-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            {t("Ready to Get Started?", "مستعد للبدء؟")}
          </h2>
          <p className="text-lg text-off-white/80 mb-8 max-w-2xl mx-auto">
            {t(
              "Contact our team today to discuss how we can help you achieve your real estate goals",
              "اتصل بفريقنا اليوم لمناقشة كيف يمكننا مساعدتك في تحقيق أهدافك العقارية",
            )}
          </p>
          <Button asChild size="lg" className="bg-accent text-primary hover:bg-accent/90 text-lg px-8">
            <Link href="/contact">{t("Contact Us", "اتصل بنا")}</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
