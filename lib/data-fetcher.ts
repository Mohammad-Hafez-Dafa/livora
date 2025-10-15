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
