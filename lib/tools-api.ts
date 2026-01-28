// Tools data API - similar to posts API but for tools
import { toolsData } from "@/lib/tools-data"

export interface Tool {
  id: number
  name: string
  logo: string
  category: string
  summary: string
  features: string[]
  website: string
  featured?: boolean
}

// Generate slug from tool name
export function getToolSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

// Get tool by slug
export function getToolBySlug(slug: string): Tool | null {
  const tool = toolsData.find((t) => getToolSlug(t.name) === slug)
  return tool || null
}

// Get all tools
export function getAllTools(): Tool[] {
  return toolsData
}

// Get tools by category
export function getToolsByCategory(category: string): Tool[] {
  if (category === "All") {
    return toolsData
  }
  return toolsData.filter((tool) => tool.category === category)
}

// Get related tools (same category, excluding current tool)
export function getRelatedTools(currentToolId: number, limit: number = 3): Tool[] {
  const currentTool = toolsData.find((t) => t.id === currentToolId)
  if (!currentTool) {
    return []
  }

  return toolsData
    .filter((tool) => tool.category === currentTool.category && tool.id !== currentToolId)
    .slice(0, limit)
}
