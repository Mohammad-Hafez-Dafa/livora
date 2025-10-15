"use client";

import { useLanguage } from "@/lib/language-context";
import { MapPin } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { useContactForm } from "@/hooks/use-contact-form";
import { ContactForm } from "@/components/contact-form";
import { ContactStatusModals } from "@/components/contact-status-modals";
import EgyptOffice from "@/components/EgyptOffice";
import DubaiOffice from "@/components/DubaiOffice";

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

      <section className="pt-24">
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
              <h2 className="font-serif text-3xl font-bold mb-5">
                {t("Contact Information", "معلومات الاتصال")}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* Cairo Office */}
                <EgyptOffice/>
                {/* Dubai Office */}
                <DubaiOffice/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-10 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">
            {t("Find Us", "اعثر علينا")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-gold mx-auto mb-4" />
                <p className="font-medium">
                  {t("Egypt Office Location", "موقع مكتب مصر")}
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Alexandria, Egypt
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
                  Business Bay, Dubai
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
