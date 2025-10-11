"use client";

import { useLanguage } from "@/lib/language-context";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { useContactForm } from "@/hooks/use-contact-form";
import { ContactForm } from "@/components/contact-form";
import { ContactStatusModals } from "@/components/contact-status-modals";

export default function ContactPage() {
  const { t } = useLanguage();

  const {
    formData,
    setFormData,
    isSubmitting,
    successModalOpen,
    setSuccessModalOpen,
    errorModalOpen,
    setErrorModalOpen,
    handleSubmit,
  } = useContactForm();

  return (
    <div className="min-h-screen">
      <PageHeader
        title={t("Get in Touch", "تواصل معنا")}
        description={t(
          "Ready to start your real estate journey? Contact our expert team today",
          "مستعد لبدء رحلتك العقارية؟ اتصل بفريقنا الخبير اليوم"
        )}
      />

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="font-serif text-3xl font-bold mb-6">
                {t("Send us a Message", "أرسل لنا رسالة")}
              </h2>
              <ContactForm
                formData={formData}
                setFormData={setFormData}
                isSubmitting={isSubmitting}
                onSubmit={(e) => handleSubmit(e, t)}
                messageRows={6}
              />
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="font-serif text-3xl font-bold mb-6">
                {t("Contact Information", "معلومات الاتصال")}
              </h2>

              {/* Cairo Office */}
              <div className="mb-12">
                <h3 className="font-serif text-2xl font-bold mb-6 text-gold">
                  {t("Cairo Office", "مكتب القاهرة")}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium mb-1">
                        {t("Address", "العنوان")}
                      </p>
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
                      <p className="font-medium mb-1">
                        {t("Email", "البريد الإلكتروني")}
                      </p>
                      <p className="text-muted-foreground">cairo@livora.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium mb-1">
                        {t("Working Hours", "ساعات العمل")}
                      </p>
                      <p className="text-muted-foreground">
                        {t(
                          "Sunday - Thursday: 9:00 AM - 6:00 PM",
                          "الأحد - الخميس: 9:00 صباحًا - 6:00 مساءً"
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dubai Office */}
              <div>
                <h3 className="font-serif text-2xl font-bold mb-6 text-gold">
                  {t("Dubai Office", "مكتب دبي")}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium mb-1">
                        {t("Address", "العنوان")}
                      </p>
                      <p className="text-muted-foreground">
                        Dubai Marina, UAE
                      </p>
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
                      <p className="font-medium mb-1">
                        {t("Email", "البريد الإلكتروني")}
                      </p>
                      <p className="text-muted-foreground">dubai@livora.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium mb-1">
                        {t("Working Hours", "ساعات العمل")}
                      </p>
                      <p className="text-muted-foreground">
                        {t(
                          "Sunday - Thursday: 9:00 AM - 6:00 PM",
                          "الأحد - الخميس: 9:00 صباحًا - 6:00 مساءً"
                        )}
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
          <h2 className="font-serif text-3xl font-bold text-center mb-12">
            {t("Find Us", "اعثر علينا")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-gold mx-auto mb-4" />
                <p className="font-medium">
                  {t("Cairo Office Location", "موقع مكتب القاهرة")}
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  New Cairo, Egypt
                </p>
              </div>
            </div>
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-gold mx-auto mb-4" />
                <p className="font-medium">
                  {t("Dubai Office Location", "موقع مكتب دبي")}
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Dubai Marina, UAE
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactStatusModals
        successModalOpen={successModalOpen}
        setSuccessModalOpen={setSuccessModalOpen}
        errorModalOpen={errorModalOpen}
        setErrorModalOpen={setErrorModalOpen}
      />
    </div>
  );
}