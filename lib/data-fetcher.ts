// Utility to fetch data from GitHub raw links
export async function fetchFromGitHub<T>(url: string): Promise<T> {
  try {
    const response = await fetch(url, {
      next: { revalidate: 3600 }, // Revalidate every hour
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`)
    }

    return await response.json()
  } catch (error) {
    console.error("[v0] Error fetching from GitHub:", error)
    throw error
  }
}

// Example Property Data Structure:
//
// {
//   "id": "1",
//   "title": "Luxury Villa in New Cairo",
//   "titleAr": "فيلا فاخرة في القاهرة الجديدة",
//   "location": "New Cairo, Egypt",
//   "locationAr": "القاهرة الجديدة، مصر",
//   "city": "cairo",
//   "price": "EGP 15,000,000",
//   "priceAr": "15,000,000 جنيه مصري",
//   "description": "Stunning 5-bedroom villa...",
//   "descriptionAr": "فيلا مذهلة من 5 غرف نوم...",
//   "images": [
//     "https://your-cdn.com/image1.jpg",
//     "https://your-cdn.com/image2.jpg"
//   ],
//   "features": ["5 Bedrooms", "6 Bathrooms"],
//   "featuresAr": ["5 غرف نوم", "6 حمامات"],
//   "paymentPlans": "Flexible payment plans...",
//   "paymentPlansAr": "خطط دفع مرنة...",
//   "developer": "Premium Developments Egypt",
//   "type": "sale"
// }

// Example usage - replace with your actual GitHub raw URLs
export const DATA_SOURCES = {
  properties: "YOUR_GITHUB_RAW_URL/properties.json",
  blog: "YOUR_GITHUB_RAW_URL/blog.json",
  team: "YOUR_GITHUB_RAW_URL/team.json",
  services: "YOUR_GITHUB_RAW_URL/services.json",
}

// Helper function to fetch all properties
export async function fetchProperties() {
  return fetchFromGitHub<any[]>(DATA_SOURCES.properties)
}

// Helper function to fetch all blog posts
export async function fetchBlogPosts() {
  return fetchFromGitHub<any[]>(DATA_SOURCES.blog)
}

// Helper function to fetch team members
export async function fetchTeamMembers() {
  return fetchFromGitHub<any[]>(DATA_SOURCES.team)
}
