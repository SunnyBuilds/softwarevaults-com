export default function TermsPage() {
  return (
    <div>
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold text-foreground mb-4">Terms of Service</h1>
        <p className="text-sm text-muted-foreground mb-8">Last Updated: December 29, 2024</p>

        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Agreement to Terms</h2>
            <p>
              By accessing or using SoftwareVaults.com (the "Website"), you agree to be bound by these Terms of Service.
              If you do not agree with any part of these terms, you may not use our Website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Use of Website</h2>
            <h3 className="text-xl font-semibold text-foreground mb-3">Permitted Use</h3>
            <p>You may use our Website for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Browsing and discovering software tools</li>
              <li>Comparing different software solutions</li>
              <li>Accessing information and resources provided</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">Prohibited Use</h3>
            <p>You may not:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use the Website for any illegal purpose</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Copy, reproduce, or distribute Website content without permission</li>
              <li>Use automated systems to scrape or harvest data</li>
              <li>Interfere with the proper functioning of the Website</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Information Disclaimer</h2>
            <p>
              The information provided on SoftwareVaults.com is for general informational purposes only. While we strive
              to keep the information accurate and up-to-date, we make no representations or warranties of any kind
              about:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The accuracy, reliability, or completeness of any information</li>
              <li>The availability or functionality of third-party software featured</li>
              <li>The suitability of any software for your specific needs</li>
            </ul>
            <p className="mt-4">
              You are solely responsible for evaluating software before purchase or use. We are not liable for any
              decisions made based on information provided on this Website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Third-Party Links and Services</h2>
            <p>Our Website contains links to third-party websites and services. We are not responsible for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The content, privacy policies, or practices of third-party sites</li>
              <li>Any products or services offered by third parties</li>
              <li>Any transactions between you and third-party providers</li>
            </ul>
            <p className="mt-4">
              We recommend reviewing the terms and privacy policies of any third-party services before use.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Intellectual Property</h2>
            <p>
              All content on SoftwareVaults.com, including text, graphics, logos, and software, is the property of
              SoftwareVaults.com or its content suppliers and is protected by copyright and intellectual property laws.
            </p>
            <p className="mt-4">
              Third-party logos and trademarks are the property of their respective owners and are used for
              identification purposes only.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, SoftwareVaults.com shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages resulting from:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your use or inability to use the Website</li>
              <li>Any errors or omissions in Website content</li>
              <li>Any purchases or decisions made based on Website information</li>
              <li>Unauthorized access to or alteration of your data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless SoftwareVaults.com and its affiliates from any claims, losses,
              damages, liabilities, and expenses arising from your use of the Website or violation of these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately
              upon posting. Your continued use of the Website after changes constitutes acceptance of the modified
              terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with applicable laws. Any disputes shall be
              resolved in the appropriate courts.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Information</h2>
            <p>
              For questions about these Terms of Service, contact us at:
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
