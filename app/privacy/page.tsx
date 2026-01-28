export default function PrivacyPage() {
  return (
              <div>
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold text-foreground mb-4">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-8">Last Updated: December 29, 2024</p>

        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Introduction</h2>
            <p>
              SoftwareVaults.com ("we," "our," or "us") respects your privacy and is committed to protecting your
              personal data. This privacy policy explains how we collect, use, and safeguard your information when you
              visit our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Information We Collect</h2>
            <h3 className="text-xl font-semibold text-foreground mb-3">Automatically Collected Information</h3>
            <p>When you visit our website, we may automatically collect:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>IP address</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referral source</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">Information You Provide</h3>
            <p>We may collect information you voluntarily provide through:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contact forms</li>
              <li>Email correspondence</li>
              <li>Newsletter subscriptions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">How We Use Your Information</h2>
            <p>We use collected information to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Improve website functionality and user experience</li>
              <li>Respond to inquiries and provide customer support</li>
              <li>Analyze website traffic and usage patterns</li>
              <li>Send newsletters and updates (with your consent)</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to enhance your browsing experience. Cookies are small
              data files stored on your device. We use:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Essential Cookies:</strong> Required for website functionality
              </li>
              <li>
                <strong>Analytics Cookies:</strong> Help us understand how visitors use our site (e.g., Google
                Analytics)
              </li>
              <li>
                <strong>Affiliate Tracking:</strong> Track referrals through affiliate links
              </li>
            </ul>
            <p className="mt-4">
              You can control cookie preferences through your browser settings. Note that disabling cookies may affect
              website functionality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Third-Party Services</h2>
            <p>We may use third-party services that collect information, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Google Analytics for website analytics</li>
              <li>Affiliate networks (PartnerStack) for tracking referrals</li>
            </ul>
            <p className="mt-4">These services have their own privacy policies governing data collection and use.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal data against
              unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is
              completely secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Your Rights</h2>
            <p>Under GDPR and other privacy regulations, you have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to data processing</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p className="mt-4">To exercise these rights, contact us at hello@softwarevaults.com</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Children's Privacy</h2>
            <p>
              Our website is not intended for children under 13. We do not knowingly collect personal information from
              children.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Changes to This Policy</h2>
            <p>
              We may update this privacy policy periodically. Changes will be posted on this page with an updated
              revision date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
            <p>
              For questions about this privacy policy, contact us at:
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
