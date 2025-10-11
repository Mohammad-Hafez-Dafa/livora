import { useState } from "react";
import { handleContactSubmit } from "@/lib/submit-contact";

interface UseContactFormProps {
  initialMessage?: string;
  onSuccess?: () => void;
  onError?: () => void;
}

export function useContactForm({
  initialMessage = "",
  onSuccess,
  onError,
}: UseContactFormProps = {}) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: initialMessage,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [errorModalOpen, setErrorModalOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent, t: any) => {
    await handleContactSubmit(
      e,
      formData,
      setIsSubmitting,
      setFormData,
      t,
      () => {
        setSuccessModalOpen(true);
        onSuccess?.();
      },
      () => {
        setErrorModalOpen(true);
        onError?.();
      }
    );
  };

  const resetForm = () => {
    setFormData({
      name: "",
      phone: "",
      message: initialMessage,
    });
  };

  return {
    formData,
    setFormData,
    isSubmitting,
    successModalOpen,
    setSuccessModalOpen,
    errorModalOpen,
    setErrorModalOpen,
    handleSubmit,
    resetForm,
  };
}