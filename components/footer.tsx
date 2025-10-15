"use client";

import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import Image from "next/image";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  );
}

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary/95 text-off-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-20 h-20 bg-accent p-0 rounded-full flex items-center justify-center">
              <Image alt="livora-logo" width={200} height={200} src={`https://res.cloudinary.com/dd1bi4lzz/image/upload/v1760106294/PNG_in4gbc.png`}/>
              </div>
            </div>
            <p className="text-sm text-off-white/80 leading-relaxed">
              {t(
                "From Dubai to Cairo",
                "من دبي إلى القاهرة"
              )}
            </p>
                        <p className="text-sm text-off-white/80 leading-relaxed">
              {t(
                "Your Real Estate Journey Starts Here",
                "رحلتك العقارية تبدأ هنا"
              )}
            </p>

          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-6 text-accent">
              {t("Quick Links", "روابط سريعة")}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-sm hover:text-accent transition-colors"
                >
                  {t("About Us", "من نحن")}
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-sm hover:text-accent transition-colors"
                >
                  {t("Projects", "المشروعات")}
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm hover:text-accent transition-colors"
                >
                  {t("Services", "خدماتنا")}
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm hover:text-accent transition-colors"
                >
                  {t("Blog", "المدونة")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Cairo */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-6 text-accent">
              {t("Egypt Office", "مكتب مصر")}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>Alexandria, Egypt</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+20 10 55 11 99 2701</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>Info@livoraproperties.com</span>
              </li>
            </ul>
          </div>

          {/* Contact Dubai */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-6 text-accent">
              {t("Dubai Office", "مكتب دبي")}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>Business Bay, Dubai, UAE</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+971 54 2522 769</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>Info@livoraproperties.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="mt-12 pt-8 border-t border-off-white/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-off-white/60">
            © 2025 Livora Properties.{" "}
            {t("All rights reserved.", "جميع الحقوق محفوظة.")}
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/Livoraproperties"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="https://www.instagram.com/livorapropertieseg"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://www.tiktok.com/@livoraproperties"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              aria-label="TikTok"
            >
              <TikTokIcon className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/company/livora-properties"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
