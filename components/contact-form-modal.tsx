"use client";

import type React from "react";
import { useState } from "react";
import { useLanguage } from "@/lib/language-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Mail } from "lucide-react";
import { handleContactSubmit } from "@/lib/submit-contact";

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
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: propertyTitle ? `I'm interested in: ${propertyTitle}` : "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    handleContactSubmit(e, formData, setIsSubmitting, setFormData, t);
  };

  return (
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
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <Label htmlFor="modal-name">{t("Full Name", "الاسم الكامل")}</Label>
            <Input
              id="modal-name"
              type="text"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="mt-2"
            />
          </div>
          <div>
            <Label htmlFor="modal-phone">
              {t("Phone Number", "رقم الهاتف")}
            </Label>
            <Input
              id="modal-phone"
              type="tel"
              required
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="mt-2"
            />
          </div>
          <div>
            <Label htmlFor="modal-message">{t("Message", "الرسالة")}</Label>
            <Textarea
              id="modal-message"
              required
              rows={4}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="mt-2"
            />
          </div>
          <Button
            type="submit"
            size="lg"
            className="w-full bg-primary text-off-white hover:bg-primary/90"
            disabled={isSubmitting}
          >
            {isSubmitting
              ? t("Sending...", "جاري الإرسال...")
              : t("Send Message", "إرسال الرسالة")}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
