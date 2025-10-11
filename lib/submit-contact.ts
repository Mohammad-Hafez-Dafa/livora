import { GOOGLE_FORM_ACTION_URL } from "./constants";

export const handleContactSubmit = async (
  e: React.FormEvent,
  formData: any,
  setIsSubmitting: any,
  setFormData: any,
  t: any,
  onSuccess: () => void,
  onError: () => void
) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const formBody = new URLSearchParams({
      "entry.2005620554": formData.name,
      "entry.1166974658": formData.phone,
      "entry.839337160": formData.message,
    });

    await fetch(GOOGLE_FORM_ACTION_URL, {
      method: "POST",
      mode: "no-cors",
      body: formBody,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    // Reset form on success
    setFormData({
      name: "",
      phone: "",
      message: "",
    });

    onSuccess();
  } catch (error) {
    console.error("[v0] Form submission error:", error);
    onError();
  } finally {
    setIsSubmitting(false);
  }
};