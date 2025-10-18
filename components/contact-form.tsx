"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { PhoneInput } from "@/components/phone-input"

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

interface ValidationErrors {
  name?: string
  message?: string
}

export function ContactForm({ formData, setFormData, isSubmitting, onSubmit, messageRows = 4 }: ContactFormProps) {
  const [errors, setErrors] = useState<ValidationErrors>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [isPhoneValid, setIsPhoneValid] = useState(false)

  // Validation functions
  const validateName = (name: string): string | undefined => {
    if (!name.trim()) {
      return "Name is required"
    }
    if (name.trim().length < 2) {
      return "Name must be at least 2 characters"
    }
    if (name.trim().length > 100) {
      return "Name must not exceed 100 characters"
    }
    return undefined
  }

  const validateMessage = (message: string): string | undefined => {
    if (!message.trim()) {
      return "Message is required"
    }
    if (message.trim().length < 10) {
      return "Message must be at least 10 characters"
    }
    if (message.trim().length > 1000) {
      return "Message must not exceed 1000 characters"
    }
    return undefined
  }

  // Validate all fields
  const validateAll = (): boolean => {
    const newErrors: ValidationErrors = {
      name: validateName(formData.name),
      message: validateMessage(formData.message),
    }

    setErrors(newErrors)
    setTouched({ name: true, phone: true, message: true })

    return !newErrors.name && !newErrors.message && isPhoneValid
  }

  // Handle field blur
  const handleBlur = (field: keyof ValidationErrors) => {
    setTouched({ ...touched, [field]: true })

    let error: string | undefined
    switch (field) {
      case "name":
        error = validateName(formData.name)
        break
      case "message":
        error = validateMessage(formData.message)
        break
    }

    setErrors({ ...errors, [field]: error })
  }

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateAll()) {
      onSubmit(e)
    }
  }

  // Handle field change with real-time validation
  const handleChange = (field: keyof ValidationErrors, value: string) => {
    setFormData({ ...formData, [field]: value })

    // Only show errors if field has been touched
    if (touched[field]) {
      let error: string | undefined
      switch (field) {
        case "name":
          error = validateName(value)
          break
        case "message":
          error = validateMessage(value)
          break
      }
      setErrors({ ...errors, [field]: error })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
      {/* Name Field */}
      <div>
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          type="text"
          value={formData.name}
          onChange={(e) => handleChange("name", e.target.value)}
          onBlur={() => handleBlur("name")}
          className={`mt-2 ${errors.name && touched.name ? "border-destructive" : ""}`}
          disabled={isSubmitting}
          aria-invalid={errors.name && touched.name ? "true" : "false"}
          aria-describedby={errors.name && touched.name ? "name-error" : undefined}
        />
        {errors.name && touched.name && (
          <p id="name-error" className="text-destructive text-sm mt-1">
            {errors.name}
          </p>
        )}
      </div>

      {/* Phone Field - Using PhoneInput with Styling */}
      <PhoneInput
        id="phone"
        label="Phone Number"
        value={formData.phone}
        onChange={(value) => setFormData({ ...formData, phone: value || "" })}
        onValidation={setIsPhoneValid}
        disabled={isSubmitting}
        required
        defaultCountry="EG"
        helperText="Please enter a mobile phone number with country code"
      />

      {/* Message Field */}
      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          rows={messageRows}
          value={formData.message}
          onChange={(e) => handleChange("message", e.target.value)}
          onBlur={() => handleBlur("message")}
          className={`mt-2 ${errors.message && touched.message ? "border-destructive" : ""}`}
          disabled={isSubmitting}
          aria-invalid={errors.message && touched.message ? "true" : "false"}
          aria-describedby={errors.message && touched.message ? "message-error" : undefined}
        />
        {errors.message && touched.message && (
          <p id="message-error" className="text-destructive text-sm mt-1">
            {errors.message}
          </p>
        )}
        <p className="text-sm text-muted-foreground mt-1">{formData.message.length}/1000 characters</p>
      </div>

      {/* Submit Button */}
      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}
