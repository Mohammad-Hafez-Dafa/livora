"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Label } from "@/components/ui/label"
import { Check, X, ChevronDown } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

interface PhoneInputProps {
  id?: string
  label: string
  value: string
  onChange: (value: string) => void
  onValidation?: (isValid: boolean) => void
  disabled?: boolean
  required?: boolean
  helperText?: string
  className?: string
  defaultCountry?: "EG" | "AE"
  touched?: boolean
}

const COUNTRIES = [
  { code: "EG", name: "Egypt", nameAr: "مصر", dialCode: "+20", flag: "🇪🇬" },
  { code: "AE", name: "United Arab Emirates", nameAr: "الإمارات العربية المتحدة", dialCode: "+971", flag: "🇦🇪" },
]

const validationMessages = {
  en: {
    required: "Phone number is required",
    invalid: "Please enter a valid phone number",
    placeholder: "Enter phone number",
  },
  ar: {
    required: "رقم الهاتف مطلوب",
    invalid: "يرجى إدخال رقم هاتف صحيح",
    placeholder: "أدخل رقم الهاتف",
  },
}

export function PhoneInput({
  id = "phone",
  label,
  value,
  onChange,
  onValidation,
  disabled = false,
  required = false,
  helperText,
  className = "",
  defaultCountry = "EG",
  touched: externalTouched = false,
}: PhoneInputProps) {
  const { language } = useLanguage()

  const [error, setError] = useState<string>("")
  const [touched, setTouched] = useState(false)
  const isTouched = externalTouched || touched
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const messages = validationMessages[language as keyof typeof validationMessages]
  const isRTL = language === "ar"

  useEffect(() => {
    if (!value) {
      const defaultCountryObj = COUNTRIES.find((c) => c.code === defaultCountry) || COUNTRIES[0]
      onChange(defaultCountryObj.dialCode)
    }
  }, [])

  // Get current country from phone value
  const getCurrentCountry = () => {
    if (value.startsWith("+20")) return COUNTRIES[0]
    if (value.startsWith("+971")) return COUNTRIES[1]
    return COUNTRIES.find((c) => c.code === defaultCountry) || COUNTRIES[0]
  }

  const currentCountry = getCurrentCountry()

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      return () => document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isDropdownOpen])

  const validatePhone = (phone: string): boolean => {
    // If required and phone is empty or only contains country code, it's invalid
    if (required && (!phone || phone.trim() === "" || phone === currentCountry.dialCode)) {
      return false
    }

    // If not required and phone is empty, it's valid
    if (!required && (!phone || !phone.trim())) {
      return true
    }

    // Check if it starts with valid country code
    const isEgypt = phone.startsWith("+20")
    const isUAE = phone.startsWith("+971")

    if (!isEgypt && !isUAE) {
      return false
    }

    // Remove country code and check length
    const numberOnly = phone.replace(/\D/g, "")
    if (isEgypt) {
      return numberOnly.length === 12 // +20 + 10 digits
    }
    if (isUAE) {
      return numberOnly.length === 13 // +971 + 9 digits
    }

    return false
  }

  const handleCountrySelect = (country: (typeof COUNTRIES)[0]) => {
    onChange(country.dialCode)
    setIsDropdownOpen(false)
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value

    // Only allow numbers and +
    inputValue = inputValue.replace(/[^\d+]/g, "")

    // Ensure it starts with country code
    if (!inputValue.startsWith("+")) {
      inputValue = currentCountry.dialCode + inputValue.replace(/\D/g, "")
    }

    onChange(inputValue)

    if (touched) {
      const isValid = validatePhone(inputValue)
      if (!isValid && inputValue.trim() && inputValue !== currentCountry.dialCode) {
        setError(messages.invalid)
      } else if (!isValid && required && (inputValue === currentCountry.dialCode || !inputValue.trim())) {
        setError(messages.required)
      } else {
        setError("")
      }

      if (onValidation) {
        onValidation(isValid)
      }
    }
  }

  const handleBlur = () => {
    setTouched(true)
    const isValid = validatePhone(value)

    if (!isValid && required && (value === currentCountry.dialCode || !value.trim())) {
      setError(messages.required)
    } else if (!isValid && value.trim() && value !== currentCountry.dialCode) {
      setError(messages.invalid)
    } else {
      setError("")
    }

    if (onValidation) {
      onValidation(isValid)
    }
  }

  const isValid = validatePhone(value)

  useEffect(() => {
    if (isTouched) {
      const isValid = validatePhone(value)

      if (!isValid && required && (value === currentCountry.dialCode || !value.trim())) {
        setError(messages.required)
      } else if (!isValid && value.trim() && value !== currentCountry.dialCode) {
        setError(messages.invalid)
      } else {
        setError("")
      }

      if (onValidation) {
        onValidation(isValid)
      }
    }
  }, [isTouched, value])

  return (
    <div className={className} dir={isRTL ? "rtl" : "ltr"}>
      <Label htmlFor={id} className="ltr:text-left rtl:text-right">
        {label}
      </Label>

      <div className="mt-2 w-full relative" ref={dropdownRef}>
        <div className="flex items-center overflow-hidden h-9 w-full min-w-0 rounded-md border border-input bg-transparent pe-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px]">
          {/* Country Selector Button */}
          <button
            type="button"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className={`flex items-center gap-1 px-2 py-1 rounded hover:bg-muted transition-colors flex-shrink-0 ${
              isRTL ? "ml-2" : "mr-2"
            }`}
            disabled={disabled}
          >
            <span className="text-lg">{currentCountry.flag}</span>
            <ChevronDown className="w-4 h-4 text-muted-foreground" />
          </button>

          {/* Phone Input */}
          <input
            id={id}
            type="tel"
            value={value}
            onChange={handlePhoneChange}
            onBlur={handleBlur}
            placeholder={messages.placeholder}
            disabled={disabled}
            className="flex-1 h-full border-none bg-transparent outline-none text-base placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground disabled:cursor-not-allowed disabled:opacity-50"
          />

          {/* Validation Icon */}
          {isTouched && value && value !== currentCountry.dialCode && (
            <div className={`flex-shrink-0 ${isRTL ? "mr-2" : "ml-2"}`}>
              {error ? (
                <X className="w-5 h-5 text-destructive" />
              ) : isValid ? (
                <Check className="w-5 h-5 text-emerald-500" />
              ) : null}
            </div>
          )}
        </div>

        {/* Country Dropdown */}
        {isDropdownOpen && !disabled && (
          <div
            className={`absolute top-full mt-1 w-full bg-background border border-input rounded-md shadow-lg z-50 ${
              isRTL ? "right-0" : "left-0"
            }`}
          >
            {COUNTRIES.map((country) => (
              <button
                key={country.code}
                type="button"
                onClick={() => handleCountrySelect(country)}
                className="w-full text-left px-3 py-2 hover:bg-muted transition-colors flex items-center gap-2 text-sm"
              >
                <span className="text-lg flex-shrink-0">{country.flag}</span>
                <span className="text-foreground">{isRTL ? country.nameAr : country.name}</span>
                <span className="text-muted-foreground text-xs ml-auto">({country.dialCode})</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Error Message */}
      {error && isTouched ? (
        <p className="text-destructive text-sm mt-2 flex items-center gap-1.5">
          <X className="w-4 h-4 flex-shrink-0" />
          <span>{error}</span>
        </p>
      ) : helperText ? (
        <p className="text-muted-foreground text-sm mt-2">{helperText}</p>
      ) : null}
    </div>
  )
}
