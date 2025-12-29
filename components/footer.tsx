import { Sparkles } from "lucide-react"

export default function Footer() {
  return (
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
  )
}

