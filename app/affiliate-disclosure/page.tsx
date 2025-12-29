export default function AffiliateDisclosurePage() {
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
        <h1 className="text-4xl font-bold text-foreground mb-4">Affiliate Disclosure</h1>
        <p className="text-sm text-muted-foreground mb-8">Last Updated: December 29, 2024</p>

        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
          <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-3">Important Notice</h2>
            <p className="text-foreground">
              SoftwareVaults.com participates in affiliate marketing programs. This means we may earn a commission when
              you click on certain links and make a purchase. This comes at no additional cost to you.
            </p>
          </div>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">What Are Affiliate Links?</h2>
            <p>
              Affiliate links are special tracking URLs that allow us to earn a commission when you purchase a product
              or service after clicking through from our website. These commissions help us maintain and improve
              SoftwareVaults.com while keeping our content free for users.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Our Affiliate Partnerships</h2>
            <p>We partner with various software companies and affiliate networks, including but not limited to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>PartnerStack</li>
              <li>Individual software vendors featured on our platform</li>
              <li>Other affiliate networks and platforms</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">How This Affects You</h2>
            <p>When you click on an affiliate link and make a purchase:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>No Extra Cost:</strong> You pay the same price as going directly to the vendor's website
              </li>
              <li>
                <strong>We Earn a Commission:</strong> The software vendor pays us a referral fee
              </li>
              <li>
                <strong>Your Privacy:</strong> We do not receive your personal payment information
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Our Editorial Independence</h2>
            <p>
              While we earn commissions from affiliate partnerships, this does not influence our editorial content or
              recommendations. We are committed to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Providing honest, unbiased information about software tools</li>
              <li>Featuring high-quality software regardless of commission rates</li>
              <li>Clearly disclosing affiliate relationships</li>
              <li>Prioritizing user value over commission potential</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Our Selection Criteria</h2>
            <p>Software tools are featured on SoftwareVaults.com based on:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Quality and reliability of the product</li>
              <li>User experience and interface design</li>
              <li>Value proposition and pricing</li>
              <li>Customer support and documentation</li>
              <li>Market reputation and user reviews</li>
            </ul>
            <p className="mt-4">Commission rates do not determine whether a tool is featured or recommended.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Your Responsibility</h2>
            <p>We encourage you to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Conduct your own research before purchasing any software</li>
              <li>Read vendor terms, conditions, and pricing carefully</li>
              <li>Consider your specific needs and requirements</li>
              <li>Take advantage of free trials when available</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">FTC Compliance</h2>
            <p>
              This disclosure is provided in accordance with the Federal Trade Commission's 16 CFR Part 255: "Guides
              Concerning the Use of Endorsements and Testimonials in Advertising."
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Questions?</h2>
            <p>
              If you have questions about our affiliate relationships or disclosure policy, please contact us at:
              <br />
              Email:{" "}
              <a href="mailto:hello@softwarevaults.com" className="text-blue-600 hover:text-blue-700">
                hello@softwarevaults.com
              </a>
            </p>
          </section>
        </div>
      </main>
    </div>
  )
}
