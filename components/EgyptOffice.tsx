import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const EgyptOffice = () => {
  const { t } = useLanguage();

  return (
    <div className="mb-12">
      <h3 className="font-serif text-2xl font-bold mb-6 text-gold">
        {t("Egypt Office", "مكتب مصر")}
      </h3>
      <div className="space-y-4">
        <div className="flex items-start gap-4">
          <MapPin className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
          <div>
            <p className="font-medium mb-1">{t("Address", "العنوان")}</p>
            <p className="text-muted-foreground">Alexandria, Egypt</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <Phone className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
          <div>
            <p className="font-medium mb-1">{t("Phone", "الهاتف")}</p>
            <a href="+20 10 55 11 99 2701" className="text-muted-foreground ">
              <span dir="ltr">+20 10 55 11 99 2701</span>
            </a>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <Mail className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
          <div>
            <p className="font-medium mb-1">
              {t("Email", "البريد الإلكتروني")}
            </p>
            <a
              href="mailto:Info@livoraproperties.com"
              className="text-muted-foreground "
            >
              <span>Info@livoraproperties.com</span>
            </a>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <Clock className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
          <div>
            <p className="font-medium mb-1">
              {t("Working Hours", "ساعات العمل")}
            </p>
            <p className="text-muted-foreground">
              {t("Sunday - Thursday", "الأحد - الخميس")}
            </p>
            <p className="text-muted-foreground">
              {t("9:00 AM - 6:00 PM", "9:00 صباحًا - 6:00 مساءً")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EgyptOffice;
