import { notFound } from "next/navigation"
import { getToolBySlug, getAllTools, getToolSlug, getRelatedTools } from "@/lib/tools-api"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Check, ExternalLink, Shield, Zap, Globe, Lock, Star } from "lucide-react"
import Link from "next/link"

export async function generateStaticParams() {
  const tools = getAllTools()
  return tools.map((tool) => ({
    slug: getToolSlug(tool.name),
  }))
}

export default async function ToolLandingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const tool = getToolBySlug(slug)

  if (!tool) {
    notFound()
  }

  const relatedTools = getRelatedTools(tool.id, 3)

  return (
    <div className="min-h-screen">
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-100 via-slate-50 to-slate-200 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 py-20">
          <div className="container mx-auto px-4">
            <Link href="/">
              <Button variant="ghost" className="mb-8">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Tools
              </Button>
            </Link>

            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-8">
                <div className="w-32 h-32 rounded-2xl overflow-hidden bg-white dark:bg-card border-4 border-border shadow-xl flex items-center justify-center p-4">
                  <img
                    src={tool.logo || "/placeholder.svg"}
                    alt={`${tool.name} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
                {tool.name}
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
                {tool.summary}
              </p>

              <div className="flex flex-wrap justify-center gap-3 mb-8">
                <Badge
                  variant="secondary"
                  className="text-sm px-4 py-2 text-lg bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                >
                  {tool.category}
                </Badge>
                {tool.featured && (
                  <Badge className="bg-yellow-500 text-white text-sm px-4 py-2 text-lg">
                    <Star className="w-4 h-4 mr-1" />
                    Featured
                  </Badge>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6 h-auto"
                >
                  <a href={tool.website} target="_blank" rel="noopener noreferrer">
                    Get Started Now
                    <ExternalLink className="w-5 h-5 ml-2" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 h-auto">
                  <a href="#features">Learn More</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section id="features" className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
              Why Choose {tool.name}?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {tool.features.map((feature, idx) => (
                <Card key={idx} className="border-border hover:border-blue-500 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                        <Check className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-foreground mb-2">{feature}</h3>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
                Comprehensive Protection & Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-xl mb-2 text-foreground">Advanced Security</h3>
                      <p className="text-muted-foreground">
                        {tool.name} provides enterprise-grade security features to keep your devices and data safe from
                        threats.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-xl mb-2 text-foreground">Lightning Fast</h3>
                      <p className="text-muted-foreground">
                        Experience blazing-fast performance without compromising on security or functionality.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Globe className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-xl mb-2 text-foreground">Global Coverage</h3>
                      <p className="text-muted-foreground">
                        Access content and services from anywhere in the world with our extensive network.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Lock className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-xl mb-2 text-foreground">Privacy First</h3>
                      <p className="text-muted-foreground">
                        Your privacy is our priority. We maintain strict no-logs policies and advanced encryption.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started with {tool.name}?
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Join thousands of satisfied users who trust {tool.name} for their security and privacy needs.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6 h-auto"
            >
              <a href={tool.website} target="_blank" rel="noopener noreferrer">
                Start Your Free Trial
                <ExternalLink className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </div>
        </section>

        {/* Related Tools */}
        {relatedTools.length > 0 && (
          <section className="py-16 bg-card">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Related Tools</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {relatedTools.map((relatedTool) => (
                  <Card key={relatedTool.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <img
                          src={relatedTool.logo || "/placeholder.svg"}
                          alt={`${relatedTool.name} logo`}
                          className="w-12 h-12 object-contain"
                        />
                        <div>
                          <h3 className="font-semibold text-lg text-foreground">{relatedTool.name}</h3>
                          <Badge variant="outline" className="text-xs">
                            {relatedTool.category}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">{relatedTool.summary}</p>
                      <Button asChild variant="outline" className="w-full">
                        <Link href={`/tools/${getToolSlug(relatedTool.name)}`}>Learn More</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  )
}
