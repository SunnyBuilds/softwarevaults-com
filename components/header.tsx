"use client"

import { Sparkles } from "lucide-react"
import Link from "next/link"
import { useHeaderActions } from "./header-context"

export default function Header() {
  const actions = useHeaderActions()

  return (
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
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-sm font-medium text-foreground hover:text-blue-600 transition-colors">
                Tools
              </Link>
              <Link
                href="/blog"
                className="text-sm font-medium text-foreground hover:text-blue-600 transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium text-foreground hover:text-blue-600 transition-colors"
              >
                About
              </Link>
            </nav>
            {actions}
          </div>
        </div>
      </div>
    </header>
  )
}

