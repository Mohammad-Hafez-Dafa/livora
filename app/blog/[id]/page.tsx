"use client"
import { useLanguage } from "@/lib/language-context"
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { use } from "react"

// Mock data - in production, fetch from GitHub
const mockPost = {
  id: "1",
  title: "Top Investment Areas in New Cairo 2025",
  titleAr: "أفضل مناطق الاستثمار في القاهرة الجديدة 2025",
  excerpt:
    "Discover the most promising investment opportunities in New Cairo's rapidly developing neighborhoods and what makes them attractive for investors.",
  excerptAr: "اكتشف فرص الاستثمار الواعدة في أحياء القاهرة الجديدة سريعة التطور وما يجعلها جذابة للمستثمرين.",
  content: `
    <p>New Cairo continues to be one of Egypt's most dynamic real estate markets, with several neighborhoods showing exceptional growth potential for 2025. In this comprehensive guide, we'll explore the top investment areas and what makes them stand out.</p>
    
    <h2>1. Fifth Settlement</h2>
    <p>The Fifth Settlement remains a prime investment location, offering a perfect blend of residential comfort and commercial viability. With its established infrastructure and continued development, property values here have shown consistent appreciation.</p>
    
    <h2>2. New Administrative Capital</h2>
    <p>Egypt's new capital city represents a once-in-a-generation investment opportunity. Government backing, world-class infrastructure, and strategic location make it an attractive option for long-term investors.</p>
    
    <h2>3. Mostakbal City</h2>
    <p>This emerging area offers more affordable entry points while maintaining high growth potential. Its proximity to major developments and improving infrastructure make it ideal for investors seeking value.</p>
    
    <h2>Key Investment Considerations</h2>
    <p>When investing in New Cairo, consider factors such as developer reputation, payment plans, location accessibility, and future development plans. Our team at Livora Properties can help you navigate these considerations and find the perfect investment opportunity.</p>
  `,
  contentAr: `
    <p>تستمر القاهرة الجديدة في كونها واحدة من أكثر أسواق العقارات ديناميكية في مصر، مع عدة أحياء تظهر إمكانات نمو استثنائية لعام 2025. في هذا الدليل الشامل، سنستكشف أفضل مناطق الاستثمار وما يجعلها متميزة.</p>
    
    <h2>1. التجمع الخامس</h2>
    <p>يظل التجمع الخامس موقع استثمار رئيسي، يقدم مزيجًا مثاليًا من الراحة السكنية والجدوى التجارية. مع بنيته التحتية الراسخة والتطوير المستمر، أظهرت قيم العقارات هنا تقديرًا ثابتًا.</p>
    
    <h2>2. العاصمة الإدارية الجديدة</h2>
    <p>تمثل عاصمة مصر الجديدة فرصة استثمارية تحدث مرة واحدة في الجيل. الدعم الحكومي والبنية التحتية ذات المستوى العالمي والموقع الاستراتيجي تجعلها خيارًا جذابًا للمستثمرين على المدى الطويل.</p>
    
    <h2>3. مدينة المستقبل</h2>
    <p>توفر هذه المنطقة الناشئة نقاط دخول أكثر بأسعار معقولة مع الحفاظ على إمكانات نمو عالية. قربها من التطورات الرئيسية وتحسين البنية التحتية يجعلها مثالية للمستثمرين الباحثين عن القيمة.</p>
    
    <h2>اعتبارات الاستثمار الرئيسية</h2>
    <p>عند الاستثمار في القاهرة الجديدة، ضع في اعتبارك عوامل مثل سمعة المطور وخطط الدفع وإمكانية الوصول إلى الموقع وخطط التطوير المستقبلية. يمكن لفريقنا في ليفورا العقارية مساعدتك في التنقل في هذه الاعتبارات والعثور على فرصة الاستثمار المثالية.</p>
  `,
  image: "/new-cairo-development.png",
  date: "2025-01-15",
  author: "Ahmed Hassan",
}

interface BlogPostPageProps {
  params: Promise<{ id: string }>  // ✅ غيّر من object عادي لـ Promise
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { language, t } = useLanguage()
  
  // ✅ استخدم use() hook لقراءة الـ Promise
  const { id } = use(params)

  // In production, fetch post data based on id
  const post = mockPost

  const title = language === "en" ? post.title : post.titleAr
  const content = language === "en" ? post.content : post.contentAr

  return (
    <div className="min-h-screen">
      <article className="pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back Button */}
          <Button asChild variant="ghost" className="mb-8">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t("Back to Blog", "العودة للمدونة")}
            </Link>
          </Button>

          {/* Header */}
          <header className="mb-12">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-balance">{title}</h1>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{t("5 min read", "5 دقائق قراءة")}</span>
                </div>
                <span>•</span>
                <span>{post.author}</span>
              </div>
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                {t("Share", "مشاركة")}
              </Button>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative aspect-[16/9] rounded-lg overflow-hidden mb-12">
            <Image 
              src={post.image || "/placeholder.svg"} 
              alt={title} 
              fill 
              className="object-cover" 
            />
          </div>

          {/* Content */}
          <div
            className="prose prose-lg max-w-none
            prose-headings:font-serif prose-headings:font-bold
            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
            prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
            prose-a:text-gold prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: content }}
          />

          {/* CTA */}
          <div className="mt-16 p-8 bg-card rounded-lg border border-border text-center">
            <h3 className="font-serif text-2xl font-bold mb-4">
              {t("Interested in Investing?", "مهتم بالاستثمار؟")}
            </h3>
            <p className="text-muted-foreground mb-6">
              {t(
                "Contact our team to learn more about investment opportunities in Cairo and Dubai",
                "اتصل بفريقنا لمعرفة المزيد عن فرص الاستثمار في القاهرة ودبي",
              )}
            </p>
            <Button asChild size="lg" className="bg-primary text-off-white hover:bg-primary/90">
              <Link href="/contact">{t("Contact Us", "اتصل بنا")}</Link>
            </Button>
          </div>
        </div>
      </article>
    </div>
  )
}