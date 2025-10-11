"use client";

import type React from "react";
import { useLanguage } from "@/lib/language-context";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Mail } from "lucide-react";
import { useContactForm } from "@/hooks/use-contact-form";
import { ContactForm } from "@/components/contact-form";
import { ContactStatusModals } from "@/components/contact-status-modals";
import { useState } from "react";

interface ContactFormModalProps {
  propertyTitle?: string;
  trigger?: React.ReactNode;
}

export function ContactFormModal({
  propertyTitle,
  trigger,
}: ContactFormModalProps) {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  const {
    formData,
    setFormData,
    isSubmitting,
    successModalOpen,
    setSuccessModalOpen,
    errorModalOpen,
    setErrorModalOpen,
    handleSubmit,
  } = useContactForm({
    initialMessage: propertyTitle
      ? `I'm interested in: ${propertyTitle}`
      : "",
    onSuccess: () => setOpen(false), // Close modal on success
  });

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          {trigger || (
            <Button
              size="lg"
              className="bg-primary text-off-white hover:bg-primary/90"
            >
              <Mail className="mr-2 h-5 w-5" />
              {t("Contact Us", "اتصل بنا")}
            </Button>
          )}
        </DialogTrigger>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl">
              {t("Request More Information", "طلب المزيد من المعلومات")}
            </DialogTitle>
            <DialogDescription>
              {t(
                "Fill out the form below and our team will get back to you shortly.",
                "املأ النموذج أدناه وسيتواصل معك فريقنا قريبًا."
              )}
            </DialogDescription>
          </DialogHeader>
          <ContactForm
            formData={formData}
            setFormData={setFormData}
            isSubmitting={isSubmitting}
            onSubmit={(e) => handleSubmit(e, t)}
          />
        </DialogContent>
      </Dialog>

      <ContactStatusModals
        successModalOpen={successModalOpen}
        setSuccessModalOpen={setSuccessModalOpen}
        errorModalOpen={errorModalOpen}
        setErrorModalOpen={setErrorModalOpen}
      />
    </>
  );
}
