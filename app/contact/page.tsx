"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    alert("Thank you for your message. We will get back to you soon!")
  }

  return (
              <div>
      <main className="container mx-auto px-4 py-12 max-w-2xl">
        <h1 className="text-4xl font-bold text-foreground mb-6">Contact Us</h1>

        <div className="space-y-8">
          <div className="prose prose-invert max-w-none">
            <p className="text-muted-foreground">
              Have questions, suggestions, or partnership inquiries? We'd love to hear from you. Our team typically
              responds within 24-48 hours.
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-xl font-semibold text-foreground mb-4">Email Us Directly</h2>
            <p className="text-muted-foreground mb-2">For immediate assistance, reach us at:</p>
            <a
              href="mailto:hello@softwarevaults.com"
              className="text-blue-600 hover:text-blue-700 font-semibold text-lg"
            >
              hello@softwarevaults.com
            </a>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-card border border-border rounded-lg p-6">
            <h2 className="text-xl font-semibold text-foreground mb-4">Send Us a Message</h2>

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Name
              </label>
              <Input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-background border-border"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email
              </label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-background border-border"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                Subject
              </label>
              <Input
                id="subject"
                type="text"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="bg-background border-border"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <Textarea
                id="message"
                required
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-background border-border"
              />
            </div>

            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
              Send Message
            </Button>
          </form>
        </div>
      </main>
    </div>
  )
}
