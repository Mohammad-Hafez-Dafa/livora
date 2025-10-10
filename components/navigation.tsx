"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, Globe } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en")
  }

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/", label: t("Home", "الرئيسية") },
    { href: "/about", label: t("About Us", "من نحن") },
    { href: "/projects", label: t("Projects", "المشروعات") },
    { href: "/services", label: t("Services", "خدماتنا") },
    { href: "/team", label: t("Our Team", "فريق العمل") },
    { href: "/blog", label: t("Blog", "المدونة") },
    { href: "/contact", label: t("Contact", "اتصل بنا") },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-border"
          : "primary backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className={`w-10 h-10 md:w-20 md:h-20 xl:w-24 xl:h-24 ${!isScrolled ? "2xl:w-18 2xl:h-18" : "2xl:w-32 2xl:h-32"} rounded-full flex items-center justify-center`}>
              <Image
                alt="livora-logo"
                width={200}
                height={200}
                src={isScrolled ? "https://res.cloudinary.com/dd1bi4lzz/image/upload/v1760106294/PNG_in4gbc.png":"https://res.cloudinary.com/dd1bi4lzz/image/upload/v1760106292/PNG-2_epejtw.png"}
                className="w-full h-full object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  isScrolled ? "hover:text-gold" : "text-off-white hover:text-gold"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              className={`ml-4 ${isScrolled ? "" : "text-off-white hover:text-gold hover:bg-white/10"}`}
            >
              <Globe className="h-5 w-5" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2 md:gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              className={`h-9 w-9 md:h-10 md:w-10 ${
                isScrolled ? "" : "text-off-white hover:text-gold hover:bg-white/10"
              }`}
            >
              <Globe className="h-4 w-4 md:h-5 md:w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className={`h-9 w-9 md:h-10 md:w-10 ${
                isScrolled ? "" : "text-off-white hover:text-gold hover:bg-white/10"
              }`}
            >
              {isOpen ? (
                <X className="h-5 w-5 md:h-6 md:w-6" />
              ) : (
                <Menu className="h-5 w-5 md:h-6 md:w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className={`lg:hidden py-4 border-t transition-colors ${
              isScrolled ? "border-border" : "border-white/10"
            }`}
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block py-2.5 text-sm font-medium transition-colors ${
                  isScrolled ? "hover:text-gold" : "text-off-white hover:text-gold"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}