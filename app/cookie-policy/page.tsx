export default function CookiePolicyPage() {
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
        <h1 className="text-4xl font-bold text-foreground mb-4">Cookie Policy</h1>
        <p className="text-sm text-muted-foreground mb-8">Last Updated: December 29, 2024</p>

        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">What Are Cookies?</h2>
            <p>
              Cookies are small text files placed on your device when you visit a website. They help websites remember
              your preferences, improve functionality, and provide analytics about how visitors use the site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">How We Use Cookies</h2>
            <p>
              SoftwareVaults.com uses cookies to enhance your browsing experience and improve our services. We use
              different types of cookies for various purposes:
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Types of Cookies We Use</h2>

            <h3 className="text-xl font-semibold text-foreground mb-3">1. Essential Cookies</h3>
            <p>
              These cookies are necessary for the website to function properly. They enable basic features like page
              navigation and access to secure areas.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Session management</li>
              <li>Security features</li>
              <li>Load balancing</li>
            </ul>
            <p className="mt-2 italic">These cookies cannot be disabled as they are essential for website operation.</p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">2. Analytics Cookies</h3>
            <p>
              These cookies help us understand how visitors interact with our website by collecting and reporting
              information anonymously.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Google Analytics: Tracks page views, user behavior, and traffic sources</li>
              <li>Visitor demographics and interests</li>
              <li>Website performance metrics</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">3. Affiliate Tracking Cookies</h3>
            <p>
              These cookies track referrals when you click on affiliate links, allowing us to receive credit for
              referring customers to partner software companies.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>PartnerStack tracking cookies</li>
              <li>Individual vendor tracking pixels</li>
              <li>Conversion tracking</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">4. Preference Cookies</h3>
            <p>These cookies remember your preferences and settings to provide a personalized experience.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Language preferences</li>
              <li>Display settings</li>
              <li>Filter selections</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Third-Party Cookies</h2>
            <p>We use services from third-party companies that may set their own cookies:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Google Analytics:</strong> Web analytics service to understand visitor behavior
              </li>
              <li>
                <strong>Affiliate Networks:</strong> Track referrals and conversions (e.g., PartnerStack)
              </li>
            </ul>
            <p className="mt-4">These third parties have their own privacy policies governing their use of cookies.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Managing Cookies</h2>
            <p>
              You have the right to accept or reject cookies. Most web browsers automatically accept cookies, but you
              can modify your browser settings to decline cookies if you prefer.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">Browser Controls</h3>
            <p>You can control and delete cookies through your browser settings:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data
              </li>
              <li>
                <strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data
              </li>
              <li>
                <strong>Safari:</strong> Preferences → Privacy → Cookies and website data
              </li>
              <li>
                <strong>Edge:</strong> Settings → Cookies and site permissions
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">Impact of Disabling Cookies</h3>
            <p>
              Please note that disabling cookies may affect website functionality and user experience. Some features may
              not work properly without cookies enabled.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Cookie Duration</h2>
            <p>
              Cookies may be session cookies (deleted when you close your browser) or persistent cookies (remain on your
              device for a set period or until manually deleted).
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Session Cookies:</strong> Essential cookies are typically session cookies
              </li>
              <li>
                <strong>Persistent Cookies:</strong> Analytics and preference cookies typically last 1-2 years
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Updates to This Policy</h2>
            <p>
              We may update this Cookie Policy periodically to reflect changes in technology or legal requirements.
              Changes will be posted on this page with an updated revision date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
            <p>
              If you have questions about our use of cookies, please contact us at:
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
