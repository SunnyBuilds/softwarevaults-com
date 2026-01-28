import { ArrowRight, Calendar, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { getAllPosts } from "@/lib/api"

export default async function BlogPage() {
  const blogPosts = getAllPosts()

  return (
              <div>
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
        {blogPosts.length > 0 && (
        <div className="mb-16">
            <Link href={`/blog/${blogPosts[0].slug}`}>
            <Card className="overflow-hidden border-border hover:border-blue-600 transition-all duration-300 group cursor-pointer">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto overflow-hidden">
                  <img
                      src={blogPosts[0].frontmatter.image || "/placeholder.svg"}
                      alt={blogPosts[0].frontmatter.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                    {blogPosts[0].frontmatter.category && (
                      <Badge className="absolute top-4 left-4 bg-blue-600 text-white">{blogPosts[0].frontmatter.category}</Badge>
                    )}
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                        <span>{new Date(blogPosts[0].frontmatter.date).toLocaleDateString()}</span>
                    </div>
                      {blogPosts[0].frontmatter.readTime && (
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                          <span>{blogPosts[0].frontmatter.readTime}</span>
                    </div>
                      )}
                  </div>
                  <h2 className="text-3xl font-bold text-foreground mb-4 text-balance group-hover:text-blue-600 transition-colors">
                      {blogPosts[0].frontmatter.title}
                  </h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed text-pretty">
                      {blogPosts[0].frontmatter.excerpt || blogPosts[0].frontmatter.description}
                    </p>
                  <div className="flex items-center text-blue-600 font-medium">
                    Read Article <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </div>
            </Card>
          </Link>
        </div>
        )}

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="overflow-hidden border-border hover:border-blue-600 transition-all duration-300 group cursor-pointer h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.frontmatter.image || "/placeholder.svg"}
                    alt={post.frontmatter.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {post.frontmatter.category && (
                    <Badge className="absolute top-4 left-4 bg-blue-600 text-white">{post.frontmatter.category}</Badge>
                  )}
                </div>
                <CardContent className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(post.frontmatter.date).toLocaleDateString()}</span>
                    </div>
                    {post.frontmatter.readTime && (
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                        <span>{post.frontmatter.readTime}</span>
                    </div>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 text-balance group-hover:text-blue-600 transition-colors">
                    {post.frontmatter.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-1 text-pretty">
                    {post.frontmatter.excerpt || post.frontmatter.description}
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
    </div>
  )
}
