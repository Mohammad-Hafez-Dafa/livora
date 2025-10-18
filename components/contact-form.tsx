"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { PhoneInput } from "@/components/phone-input"
import { useLanguage } from "@/lib/language-context"

interface ContactFormProps {
  formData: {
    name: string
    phone: string
    message: string
  }
  setFormData: (data: any) => void
  isSubmitting: boolean
  onSubmit: (e: React.FormEvent) => void
  messageRows?: number
}

export function ContactForm({ formData, setFormData, isSubmitting, onSubmit, messageRows = 4 }: ContactFormProps) {
  const [isPhoneValid, setIsPhoneValid] = useState(false)
  const { language, t } = useLanguage()
  const isRTL = language === "ar"

  const validateAll = (): boolean => {
    return isPhoneValid
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateAll()) {
      onSubmit(e)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-4" dir={isRTL ? "rtl" : "ltr"}>
      {/* Name Field */}
      <div>
        <Label htmlFor="name">{t( "Full Name", "الاسم الكامل" )}</Label>
        <Input
          id="name"
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          disabled={isSubmitting}
          className="mt-2"
        />
      </div>

      {/* Phone Field - Using PhoneInput with Styling */}
      <PhoneInput
        id="phone"
        label={t("Phone Number",  "رقم الهاتف")}
        value={formData.phone}
        onChange={(value) => setFormData({ ...formData, phone: value || "" })}
        onValidation={setIsPhoneValid}
        disabled={isSubmitting}
        required
        defaultCountry="EG"
        helperText={t(
         "Please enter a mobile phone number with country code",
          "يرجى إدخال رقم هاتف محمول مع رمز الدولة",
        )}
      />

      {/* Message Field */}
      <div>
        <Label htmlFor="message">{t( "Message", "الرسالة" )}</Label>
        <Textarea
          id="message"
          rows={messageRows}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          disabled={isSubmitting}
          className="mt-2"
        />
        <p className={`text-sm text-muted-foreground mt-1 ${isRTL ? "text-right" : "text-left"}`}>
          {formData.message.length}/1000 {t("characters", "أحرف")}
        </p>
      </div>

      {/* Submit Button */}
      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? t( "Sending...",  "جاري الإرسال..." ) : t( "Send Message",  "إرسال الرسالة")}
      </Button>
    </form>
  )
}
