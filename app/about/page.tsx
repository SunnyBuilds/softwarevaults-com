export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent">
                <svg className="w-6 h-6 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-semibold text-foreground">SoftwareVaults.com</h1>
              </div>
            </a>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold text-foreground mb-6">About SoftwareVaults</h1>

        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Our Mission</h2>
            <p>
              SoftwareVaults is a professional platform dedicated to helping global startups, enterprises, and
              entrepreneurs discover and evaluate the best SaaS tools to build their core technology stack. We curate
              only the highest-quality software solutions across marketing, productivity, AI, automation, and more.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">What Makes Us Different</h2>
            <p>
              Unlike generic software directories, SoftwareVaults maintains strict curation standards. Every tool
              featured on our platform undergoes careful evaluation to ensure it meets professional standards for
              reliability, performance, and value.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Curated Selection: Only premium, verified software solutions</li>
              <li>Detailed Comparisons: Side-by-side tool analysis to help you decide</li>
              <li>Expert Insights: In-depth feature breakdowns and use cases</li>
              <li>Regular Updates: Continuously updated catalog with latest tools</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Our Standards</h2>
            <p>We prioritize quality over quantity. Each software tool in our vault is evaluated based on:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Product quality and reliability</li>
              <li>User experience and interface design</li>
              <li>Customer support and documentation</li>
              <li>Pricing transparency and value proposition</li>
              <li>Security and compliance standards</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Who We Serve</h2>
            <p>
              SoftwareVaults is built for decision-makers, founders, product managers, and technical teams who need
              reliable software recommendations without wading through endless options. Whether you're building a
              startup, scaling an enterprise, or optimizing your workflow, we help you find the right tools faster.
            </p>
          </section>
        </div>
      </main>
    </div>
  )
}
