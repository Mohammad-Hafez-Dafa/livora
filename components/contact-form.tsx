"use client";

import type React from "react";
import { useLanguage } from "@/lib/language-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface ContactFormProps {
  formData: {
    name: string;
    phone: string;
    message: string;
  };
  setFormData: (data: any) => void;
  isSubmitting: boolean;
  onSubmit: (e: React.FormEvent) => void;
  messageRows?: number;
}

export function ContactForm({
  formData,
  setFormData,
  isSubmitting,
  onSubmit,
  messageRows = 4,
}: ContactFormProps) {
  const { t } = useLanguage();

  return (
    <form onSubmit={onSubmit} className="space-y-4 mt-4">
      <div>
        <Label htmlFor="name">{t("Full Name", "الاسم الكامل")}</Label>
        <Input
          id="name"
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="mt-2"
          disabled={isSubmitting}
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
          disabled={isSubmitting}
        />
      </div>
      <div>
        <Label htmlFor="message">{t("Message", "الرسالة")}</Label>
        <Textarea
          id="message"
          required
          rows={messageRows}
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className="mt-2"
          disabled={isSubmitting}
        />
      </div>
      <Button
        type="submit"
        size="lg"
        className="w-full bg-primary text-off-white hover:bg-primary/90 cursor-pointer"
        disabled={isSubmitting}
      >
        {isSubmitting
          ? t("Sending...", "جاري الإرسال...")
          : t("Send Message", "إرسال الرسالة")}
      </Button>
    </form>
  );
}