"use client"
import { useLanguage } from "@/lib/language-context"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { PageHeader } from "@/components/page-header"
import { mockBlogPosts } from "@/data/blogs"

export default function BlogPage() {
  const { language, t } = useLanguage()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHeader
        title={t("Insights & News", "رؤى وأخبار")}
        description={t(
              "Expert insights on real estate markets in Cairo and Dubai",
              "رؤى الخبراء حول أسواق العقارات في القاهرة ودبي",
            )}
      />

      {/* Featured Post */}
      {mockBlogPosts[0] && (
        <section className="py-16 border-b border-border">
          <div className="container mx-auto px-4">
            <Badge className="mb-4">{t("Featured", "مميز")}</Badge>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src={mockBlogPosts[0].image || "/placeholder.svg"}
                  alt={language === "en" ? mockBlogPosts[0].title : mockBlogPosts[0].titleAr}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="font-serif text-4xl font-bold mb-4">
                  {language === "en" ? mockBlogPosts[0].title : mockBlogPosts[0].titleAr}
                </h2>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(mockBlogPosts[0].date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{t("5 min read", "5 دقائق قراءة")}</span>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {language === "en" ? mockBlogPosts[0].excerpt : mockBlogPosts[0].excerptAr}
                </p>
                <Button asChild className="bg-primary text-off-white hover:bg-primary/90">
                  <Link href={`/blog/${mockBlogPosts[0].id}`}>
                    {t("Read More", "اقرأ المزيد")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold mb-12">{t("Latest Articles", "أحدث المقالات")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockBlogPosts.slice(1).map((post) => {
              const title = language === "en" ? post.title : post.titleAr
              const excerpt = language === "en" ? post.excerpt : post.excerptAr

              return (
                <article key={post.id} className="group h-full flex flex-col">
                  <Link href={`/blog/${post.id}`} className="flex flex-col h-full">
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{t("5 min read", "5 دقائق قراءة")}</span>
                      </div>
                    </div>
                    <h3 className="font-serif text-xl font-bold mb-2 group-hover:text-gold transition-colors">
                      {title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed flex-1">{excerpt}</p>
                  </Link>
                </article>
              )
            })}
          </div>
        </div>
      </section>

    </div>
  )
}
