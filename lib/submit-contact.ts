import { GOOGLE_FORM_ACTION_URL } from "./constants"

export   const handleContactSubmit = async (e: React.FormEvent, formData: any, setIsSubmitting: any, setFormData: any, t:any) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {

      const formBody = new URLSearchParams({
        "entry.YOUR_NAME_FIELD_ID": formData.name,
        "entry.YOUR_PHONE_FIELD_ID": formData.phone,
        "entry.YOUR_MESSAGE_FIELD_ID": formData.message,
      })

      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: "POST",
        body: formBody,
        mode: "no-cors",
      })

      alert(t("Thank you! We will contact you soon.", "شكرًا لك! سنتواصل معك قريبًا."))

      setFormData({
        name: "",
        phone: "",
        message: "",
      })
    } catch (error) {
      console.error("[v0] Form submission error:", error)
      alert(t("An error occurred. Please try again.", "حدث خطأ. يرجى المحاولة مرة أخرى."))
    } finally {
      setIsSubmitting(false)
    }
  }
