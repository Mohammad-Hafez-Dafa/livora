export const formatPrice = (price: number, currency: string, language: string) => {
  // Always use English numerals
  const formattedNumber = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
  
  // Use Arabic currency symbols when language is Arabic
  const currencyLabel = language === "ar" 
    ? getCurrencyInArabic(currency) 
    : currency;
  
  return `${formattedNumber} ${currencyLabel}`;
};

function getCurrencyInArabic(currency: string): string {
  const arabicCurrencies: Record<string, string> = {
    'EGP': 'ج.م',
    'AED': 'د.إ',
    'USD': '$',
    'SAR': 'ر.س',
  };
  
  return arabicCurrencies[currency] || currency;
}