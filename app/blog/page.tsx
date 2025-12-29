import { Sparkles, ArrowRight, Calendar, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const blogPosts = [
  {
    id: "ai-tools-comparison-2025",
    title: "Top 10 AI Tools for Business in 2025: Complete Comparison",
    excerpt:
      "Discover the most powerful AI tools transforming businesses this year. From automation to content creation, we compare features, pricing, and real-world performance.",
    category: "AI Tools",
    date: "2025-01-15",
    readTime: "8 min read",
    image: "/ai-tools-dashboard-interface.jpg",
  },
  {
    id: "marketing-automation-guide",
    title: "Marketing Automation 101: Choosing the Right Platform",
    excerpt:
      "Learn how to select the perfect marketing automation tool for your team. We break down features, integrations, and pricing models across leading platforms.",
    category: "Marketing",
    date: "2025-01-12",
    readTime: "6 min read",
    image: "/marketing-automation-dashboard.png",
  },
  {
    id: "productivity-tools-remote-teams",
    title: "Best Productivity Tools for Remote Teams in 2025",
    excerpt:
      "Remote work requires the right toolkit. Explore the best productivity software helping distributed teams stay connected, organized, and efficient.",
    category: "Productivity",
    date: "2025-01-10",
    readTime: "7 min read",
    image: "/remote-team-collaboration-tools.jpg",
  },
  {
    id: "ai-voice-technology-comparison",
    title: "ElevenLabs vs Murf AI: Which AI Voice Tool Is Right for You?",
    excerpt:
      "A detailed comparison of the two leading AI voice generators. Compare features, voice quality, pricing, and use cases to make an informed decision.",
    category: "AI Voice",
    date: "2025-01-08",
    readTime: "5 min read",
    image: "/ai-voice-waveform-interface.jpg",
  },
  {
    id: "design-tools-2025",
    title: "Figma vs Adobe: The Design Tool Battle of 2025",
    excerpt:
      "Design professionals weigh in on the ongoing debate. We compare workflows, collaboration features, and which tool fits different team sizes.",
    category: "Design",
    date: "2025-01-05",
    readTime: "6 min read",
    image: "/design-interface-comparison.jpg",
  },
  {
    id: "crm-selection-guide",
    title: "How to Choose a CRM: A Complete Buyer's Guide",
    excerpt:
      "Navigate the crowded CRM market with confidence. Learn what features matter most, how to evaluate vendors, and avoid common implementation pitfalls.",
    category: "Sales",
    date: "2025-01-03",
    readTime: "9 min read",
    image: "/crm-dashboard-interface.png",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent">
                <Sparkles className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-foreground">SoftwareVaults.com</h1>
                <p className="text-sm text-muted-foreground">Discover & Compare Professional Software Tools</p>
              </div>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="max-w-3xl mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-4 text-balance">Software Insights & Comparisons</h1>
          <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
            Expert analysis, in-depth comparisons, and practical guides to help you choose the right tools for your
            business.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <Link href={`/blog/${blogPosts[0].id}`}>
            <Card className="overflow-hidden border-border hover:border-blue-600 transition-all duration-300 group cursor-pointer">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto overflow-hidden">
                  <img
                    src={blogPosts[0].image || "/placeholder.svg"}
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-blue-600 text-white">{blogPosts[0].category}</Badge>
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(blogPosts[0].date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{blogPosts[0].readTime}</span>
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold text-foreground mb-4 text-balance group-hover:text-blue-600 transition-colors">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-pretty">{blogPosts[0].excerpt}</p>
                  <div className="flex items-center text-blue-600 font-medium">
                    Read Article <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </div>
            </Card>
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`}>
              <Card className="overflow-hidden border-border hover:border-blue-600 transition-all duration-300 group cursor-pointer h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-blue-600 text-white">{post.category}</Badge>
                </div>
                <CardContent className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 text-balance group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-1 text-pretty">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-blue-600 font-medium text-sm mt-auto">
                    Read More <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>

      <footer className="border-t border-border bg-card/30 backdrop-blur-sm mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-accent-foreground" />
                <h3 className="font-semibold text-foreground">SoftwareVaults.com</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Discover & compare the best professional software tools for your business.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-3">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-3">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="/affiliate-disclosure"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Affiliate Disclosure
                  </a>
                </li>
                <li>
                  <a href="/cookie-policy" className="text-muted-foreground hover:text-foreground transition-colors">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-3">Contact</h4>
              <p className="text-sm text-muted-foreground">
                Email:{" "}
                <a href="mailto:hello@softwarevaults.com" className="text-blue-600 hover:text-blue-700">
                  hello@softwarevaults.com
                </a>
              </p>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} SoftwareVaults.com. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
