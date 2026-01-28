"use client"

import { useState, useMemo, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Search, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useSetHeaderActions } from "@/components/header-context"
import HeaderActions from "@/components/header-actions"
import { toolsData, type Tool } from "@/lib/tools-data"
import { getToolSlug } from "@/lib/tools-api"
import Link from "next/link"

const toolsDataArray = toolsData

const categories = [
  "All",
  "Productivity",
  "Design",
  "Analytics",
  "AI Voice & Audio",
  "Sales",
  "Marketing",
  "Automation",
  "HR Tech",
  "AI Development",
  "Content Creation",
  "Communication",
  "Customer Support",
  "Antivirus",
  "VPN",
  "Drive",
]

export default function BeginOSAIMatrix() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [compareMode, setCompareMode] = useState(false)
  const [selectedTools, setSelectedTools] = useState<number[]>([])

  // 从 URL 参数激活比较模式
  useEffect(() => {
    const compareParam = searchParams.get("compare")
    if (compareParam === "true" && !compareMode) {
      setCompareMode(true)
      // 清理 URL 参数，避免重复激活
      const newSearchParams = new URLSearchParams(searchParams.toString())
      newSearchParams.delete("compare")
      const newUrl = newSearchParams.toString() 
        ? `${window.location.pathname}?${newSearchParams.toString()}`
        : window.location.pathname
      router.replace(newUrl, { scroll: false })
    }
  }, [searchParams, compareMode, router])

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {}
    categories.forEach((category) => {
      if (category === "All") {
        counts[category] = toolsDataArray.length
      } else {
        counts[category] = toolsDataArray.filter((tool) => tool.category === category).length
      }
    })
    return counts
  }, [])

  const filteredTools = useMemo(() => {
    return toolsDataArray.filter((tool) => {
      const matchesSearch =
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.summary.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = selectedCategory === "All" || tool.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory])

  const toggleToolSelection = (id: number) => {
    setSelectedTools((prev) =>
      prev.includes(id) ? prev.filter((toolId) => toolId !== id) : prev.length < 2 ? [...prev, id] : prev,
    )
  }

  const comparisonTools = toolsDataArray.filter((tool) => selectedTools.includes(tool.id))
  const setHeaderActions = useSetHeaderActions()

  useEffect(() => {
    const handleToggleCompare = () => {
      setCompareMode((prev) => {
        if (prev) {
          setSelectedTools([])
        }
        return !prev
      })
    }

    setHeaderActions(
      <HeaderActions compareMode={compareMode} onToggleCompare={handleToggleCompare} />
    )

    return () => setHeaderActions(undefined)
  }, [compareMode, setHeaderActions])

  return (
    <div>
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 space-y-4">
          <div className="relative max-w-2xl">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search AI tools by name or features..."
              className="pl-10 h-12 bg-card border-border text-foreground"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="mb-8">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full ${selectedCategory === category ? "bg-blue-600 hover:bg-blue-700" : ""}`}
                >
                  {category}
                  <span className={`ml-2 text-xs ${selectedCategory === category ? "opacity-80" : "opacity-60"}`}>
                    ({categoryCounts[category]})
                  </span>
                </Button>
              ))}
            </div>
          </div>

          {compareMode && (
            <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
              <p className="text-sm text-accent-foreground">
                💡 Comparison mode enabled: Click tool cards to select (up to 2), selected tools will be highlighted.
              </p>
            </div>
          )}
        </div>

        {!compareMode ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTools.map((tool) => (
              <Card
                key={tool.id}
                className="group hover:shadow-lg transition-all duration-300 border-border bg-card hover:border-accent/50 flex flex-col"
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-muted flex items-center justify-center">
                      <img
                        src={tool.logo || "/placeholder.svg?height=64&width=64"}
                        alt={`${tool.name} logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    {tool.featured && (
                      <Badge variant="secondary" className="bg-accent text-accent-foreground">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-lg text-foreground">{tool.name}</CardTitle>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge variant="outline" className="text-xs border-border text-muted-foreground">
                      {tool.category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 flex-1 flex flex-col">
                  <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                    {tool.summary}
                  </CardDescription>

                  <div className="space-y-2">
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Key Features</p>
                    <div className="flex flex-wrap gap-1.5">
                      {tool.features.slice(0, 3).map((feature, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs bg-muted text-foreground">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button asChild className="w-full group-hover:bg-accent group-hover:text-accent-foreground mt-auto">
                    <Link href={`/tools/${getToolSlug(tool.name)}`}>
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {comparisonTools.length === 2 && (
              <Card className="border-accent bg-card">
                <CardHeader>
                  <CardTitle className="text-foreground">Tool Comparison</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left p-4 text-muted-foreground font-medium">Feature</th>
                          {comparisonTools.map((tool) => (
                            <th key={tool.id} className="text-left p-4 text-foreground font-medium">
                              <div className="flex items-center gap-3">
                                <img
                                  src={tool.logo || "/placeholder.svg?height=40&width=40"}
                                  alt={`${tool.name} logo`}
                                  className="w-10 h-10 rounded object-contain"
                                />
                                <span>{tool.name}</span>
                              </div>
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-border">
                          <td className="p-4 text-muted-foreground font-medium">Category</td>
                          {comparisonTools.map((tool) => (
                            <td key={tool.id} className="p-4 text-foreground">
                              <Badge variant="outline" className="border-border">
                                {tool.category}
                              </Badge>
                            </td>
                          ))}
                        </tr>
                        <tr className="border-b border-border">
                          <td className="p-4 text-muted-foreground font-medium">Summary</td>
                          {comparisonTools.map((tool) => (
                            <td key={tool.id} className="p-4 text-sm text-foreground">
                              {tool.summary}
                            </td>
                          ))}
                        </tr>
                        <tr className="border-b border-border">
                          <td className="p-4 text-muted-foreground font-medium">Features</td>
                          {comparisonTools.map((tool) => (
                            <td key={tool.id} className="p-4">
                              <div className="flex flex-wrap gap-2">
                                {tool.features.map((feature, idx) => (
                                  <Badge key={idx} variant="secondary" className="text-xs bg-muted text-foreground">
                                    {feature}
                                  </Badge>
                                ))}
                              </div>
                            </td>
                          ))}
                        </tr>
                        <tr>
                          <td className="p-4 text-muted-foreground font-medium">Website</td>
                          {comparisonTools.map((tool) => (
                            <td key={tool.id} className="p-4">
                              <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                                <Link href={`/tools/${getToolSlug(tool.name)}`}>
                                  Learn More
                                  <ArrowRight className="w-4 h-4 ml-2" />
                                </Link>
                              </Button>
                            </td>
                          ))}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTools.map((tool) => (
                <Card
                  key={tool.id}
                  onClick={() => toggleToolSelection(tool.id)}
                  className={`group cursor-pointer transition-all duration-300 ${
                    selectedTools.includes(tool.id)
                      ? "border-accent shadow-lg ring-2 ring-accent"
                      : "border-border hover:border-accent/50"
                  }`}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-3">
                      <div className="w-16 h-16 rounded-lg overflow-hidden bg-muted flex items-center justify-center">
                        <img
                          src={tool.logo || "/placeholder.svg?height=64&width=64"}
                          alt={`${tool.name} logo`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      {selectedTools.includes(tool.id) && (
                        <Badge className="bg-accent text-accent-foreground">Selected</Badge>
                      )}
                    </div>
                    <CardTitle className="text-lg text-foreground">{tool.name}</CardTitle>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge variant="outline" className="text-xs border-border text-muted-foreground">
                        {tool.category}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm text-muted-foreground">{tool.summary}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {filteredTools.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No tools found matching your criteria. Try adjusting your filters.</p>
          </div>
        )}
      </main>
    </div>
  )
}
