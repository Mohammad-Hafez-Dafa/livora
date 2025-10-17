import { GITHUB_RAW_BASE_URL } from "./constants";
import type { Property } from "./types";

if (!GITHUB_RAW_BASE_URL) {
  throw new Error('NEXT_PUBLIC_GITHUB_RAW_BASE_URL is not defined in environment variables');
}

export async function fetchProperties(): Promise<Property[]> {
  try {
    const response = await fetch(`${GITHUB_RAW_BASE_URL}/properties.json`, {
      // next: { revalidate: 3600 },
      cache: "no-store"
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`);
    }

    const data = await response.json();
    
    // Transform relative image paths to full GitHub URLs
    return data.properties.map((property: Property) => ({
      ...property,
      images: property.images.map((img: string) => 
        img.startsWith('http') ? img : `${GITHUB_RAW_BASE_URL}${img}`
      )
    }));
  } catch (error) {
    console.error("Error fetching properties:", error);
    return [];
  }
}

export async function getFeaturedProperties(limit?: number): Promise<Property[]> {
  const properties = await fetchProperties();
  const featured = properties.filter(p => p.featured);
  
  // Return limited number if specified (for homepage)
  return limit ? featured.slice(0, limit) : featured;
}

export async function getAllProperties(): Promise<Property[]> {
  return await fetchProperties();
}

export async function getPropertyById(id: string): Promise<Property | null> {
  const properties = await fetchProperties();
  return properties.find(p => p.id === id) || null;
}

export async function getPropertiesByCity(city: string): Promise<Property[]> {
  const properties = await fetchProperties();
  return properties.filter(p => 
    p.city.toLowerCase() === city.toLowerCase()
  );
}

export async function getAllCities(): Promise<{ en: string; ar: string }[]> {
  const properties = await fetchProperties();
  const citiesMap = new Map<string, { en: string; ar: string }>();
  
  properties.forEach(p => {
    if (!citiesMap.has(p.city)) {
      citiesMap.set(p.city, { en: p.city, ar: p.cityAr || p.city });
    }
  });
  
  return Array.from(citiesMap.values());
}