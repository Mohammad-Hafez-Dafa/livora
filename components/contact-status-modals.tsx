
import { useLanguage } from "@/lib/language-context";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { CheckCircle2, XCircle } from "lucide-react";

interface ContactStatusModalsProps {
  successModalOpen: boolean;
  setSuccessModalOpen: (open: boolean) => void;
  errorModalOpen: boolean;
  setErrorModalOpen: (open: boolean) => void;
}

export function ContactStatusModals({
  successModalOpen,
  setSuccessModalOpen,
  errorModalOpen,
  setErrorModalOpen,
}: ContactStatusModalsProps) {
  const { t } = useLanguage();

  return (
    <>
      {/* Success Modal */}
      <AlertDialog open={successModalOpen} onOpenChange={setSuccessModalOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <div className="flex items-center justify-center mb-4">
              <CheckCircle2 className="h-16 w-16 text-green-500" />
            </div>
            <AlertDialogTitle className="text-center text-2xl">
              {t("Message Sent Successfully!", "تم إرسال الرسالة بنجاح!")}
            </AlertDialogTitle>
            <AlertDialogDescription className="text-center">
              {t(
                "Thank you for reaching out! Our team will contact you shortly.",
                "شكرًا لتواصلك معنا! سيتواصل معك فريقنا قريبًا."
              )}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction
              onClick={() => setSuccessModalOpen(false)}
              className="bg-primary text-off-white hover:bg-primary/90"
            >
              {t("Close", "إغلاق")}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Error Modal */}
      <AlertDialog open={errorModalOpen} onOpenChange={setErrorModalOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <div className="flex items-center justify-center mb-4">
              <XCircle className="h-16 w-16 text-red-500" />
            </div>
            <AlertDialogTitle className="text-center text-2xl">
              {t("Submission Failed", "فشل الإرسال")}
            </AlertDialogTitle>
            <AlertDialogDescription className="text-center">
              {t(
                "We couldn't send your message. Please try again or contact us directly.",
                "لم نتمكن من إرسال رسالتك. يرجى المحاولة مرة أخرى أو التواصل معنا مباشرة."
              )}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction
              onClick={() => setErrorModalOpen(false)}
              className="bg-primary text-off-white hover:bg-primary/90"
            >
              {t("Try Again", "حاول مرة أخرى")}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
