import { Calendar, Clock, ArrowLeft } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { getPostBySlug, getAllPosts } from "@/lib/api"
import { MDXRemote } from "next-mdx-remote/rsc"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const { frontmatter, content } = post

  return (
    <div>
      <main className="container mx-auto px-4 py-12">
        <Link href="/blog">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
        </Link>

        <article className="max-w-4xl mx-auto">
          {/* Hero Image */}
          {frontmatter.image && (
            <div className="relative h-96 rounded-lg overflow-hidden mb-8">
              <img src={frontmatter.image || "/placeholder.svg"} alt={frontmatter.title} className="w-full h-full object-cover" />
              {frontmatter.category && (
                <Badge className="absolute top-6 left-6 bg-blue-600 text-white text-sm px-3 py-1">{frontmatter.category}</Badge>
              )}
            </div>
          )}

          {/* Article Header */}
          <div className="mb-8">
            <h1 className="text-5xl font-bold text-foreground mb-6 text-balance">{frontmatter.title}</h1>
            <div className="flex items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(frontmatter.date).toLocaleDateString("en-US", { dateStyle: "long" })}</span>
              </div>
              {frontmatter.readTime && (
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{frontmatter.readTime}</span>
                </div>
              )}
            </div>
          </div>

          {/* Article Content */}
          <Card className="border-border">
            <CardContent className="p-8 md:p-12">
              <div
                className="prose prose-lg prose-invert max-w-none
                  prose-headings:text-foreground prose-headings:font-bold 
                  prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                  prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                  prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
                  prose-ul:text-muted-foreground prose-ul:my-6
                  prose-li:mb-2
                  prose-strong:text-foreground prose-strong:font-semibold"
              >
                <MDXRemote source={content} />
              </div>
            </CardContent>
          </Card>

          {/* Related Tools CTA */}
          <div className="mt-12 p-8 bg-accent/20 rounded-lg border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-4">Ready to explore these tools?</h3>
            <p className="text-muted-foreground mb-6">
              Browse our curated directory of AI tools and find the perfect solution for your business needs.
            </p>
            <Link href="/">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Browse All Tools
                <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
              </Button>
            </Link>
          </div>
        </article>
      </main>
    </div>
  )
}
