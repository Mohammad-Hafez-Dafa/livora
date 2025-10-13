"use client";

import { useEffect, useRef, useState } from "react";

interface StatsSectionProps {
  lang?: "en" | "ar"
}

export function StatsSection({ lang = "en" }: StatsSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const stats = [
    { 
      number: 200, 
      suffix: "+",
      labelEn: "Properties",
      labelAr: "عقار"
    },
    { 
      number: 5, 
      suffix: "",
      labelEn: "Cities",
      labelAr: "مدينة"
    },
    { 
      number: 100, 
      suffix: "+",
      labelEn: "Happy Clients",
      labelAr: "عميل سعيد"
    },
    { 
      number: 5, 
      suffix: "+",
      labelEn: "Years Experience",
      labelAr: "سنة خبرة"
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-12 md:py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <CountUpAnimation
                target={stat.number}
                suffix={stat.suffix}
                isVisible={isVisible}
              />
              <div className="text-xs sm:text-sm text-muted-foreground">
                {lang === "ar" ? stat.labelAr : stat.labelEn}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CountUpAnimation({ 
  target, 
  suffix, 
  isVisible 
}: { 
  target: number; 
  suffix: string; 
  isVisible: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 1000; // 2 seconds
    const steps = 80;
    const increment = target / steps;
    const stepDuration = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      if (currentStep >= steps) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(increment * currentStep));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <div className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gold mb-2">
      {count}{suffix}
    </div>
  );
}