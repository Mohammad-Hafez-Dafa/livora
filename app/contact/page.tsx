"use client"

import { useLanguage } from "@/lib/language-context"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { handleContactSubmit } from "@/lib/submit-contact"
import { PageHeader } from "@/components/page-header"

export default function ContactPage() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    handleContactSubmit(e,formData, setIsSubmitting, setFormData, t )
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHeader
        title={t("Get in Touch", "تواصل معنا")}
        description={t(
              "Ready to start your real estate journey? Contact our expert team today",
              "مستعد لبدء رحلتك العقارية؟ اتصل بفريقنا الخبير اليوم",
            )}
      />

      {/* Contact Content */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="font-serif text-3xl font-bold mb-6">{t("Send us a Message", "أرسل لنا رسالة")}</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">{t("Full Name", "الاسم الكامل")}</Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">{t("Phone Number", "رقم الهاتف")}</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="message">{t("Message", "الرسالة")}</Label>
                  <Textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="mt-2"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary text-off-white hover:bg-primary/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? t("Sending...", "جاري الإرسال...") : t("Send Message", "إرسال الرسالة")}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="font-serif text-3xl font-bold mb-6">{t("Contact Information", "معلومات الاتصال")}</h2>

              {/* Cairo Office */}
              <div className="mb-12">
                <h3 className="font-serif text-2xl font-bold mb-6 text-gold">{t("Cairo Office", "مكتب القاهرة")}</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium mb-1">{t("Address", "العنوان")}</p>
                      <p className="text-muted-foreground">New Cairo, Egypt</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium mb-1">{t("Phone", "الهاتف")}</p>
                      <p className="text-muted-foreground">+20 XXX XXX XXXX</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium mb-1">{t("Email", "البريد الإلكتروني")}</p>
                      <p className="text-muted-foreground">cairo@livora.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium mb-1">{t("Working Hours", "ساعات العمل")}</p>
                      <p className="text-muted-foreground">
                        {t("Sunday - Thursday: 9:00 AM - 6:00 PM", "الأحد - الخميس: 9:00 صباحًا - 6:00 مساءً")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dubai Office */}
              <div>
                <h3 className="font-serif text-2xl font-bold mb-6 text-gold">{t("Dubai Office", "مكتب دبي")}</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium mb-1">{t("Address", "العنوان")}</p>
                      <p className="text-muted-foreground">Dubai Marina, UAE</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium mb-1">{t("Phone", "الهاتف")}</p>
                      <p className="text-muted-foreground">+971 XX XXX XXXX</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium mb-1">{t("Email", "البريد الإلكتروني")}</p>
                      <p className="text-muted-foreground">dubai@livora.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium mb-1">{t("Working Hours", "ساعات العمل")}</p>
                      <p className="text-muted-foreground">
                        {t("Sunday - Thursday: 9:00 AM - 6:00 PM", "الأحد - الخميس: 9:00 صباحًا - 6:00 مساءً")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">{t("Find Us", "اعثر علينا")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Cairo Map Placeholder */}
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-gold mx-auto mb-4" />
                <p className="font-medium">{t("Cairo Office Location", "موقع مكتب القاهرة")}</p>
                <p className="text-sm text-muted-foreground mt-2">New Cairo, Egypt</p>
              </div>
            </div>
            {/* Dubai Map Placeholder */}
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-gold mx-auto mb-4" />
                <p className="font-medium">{t("Dubai Office Location", "موقع مكتب دبي")}</p>
                <p className="text-sm text-muted-foreground mt-2">Dubai Marina, UAE</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
