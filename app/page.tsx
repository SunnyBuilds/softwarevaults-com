"use client"

import { useState, useMemo, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Search, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useSetHeaderActions } from "@/components/header-context"
import HeaderActions from "@/components/header-actions"

interface Tool {
  id: number
  name: string
  logo: string
  category: string
  summary: string
  features: string[]
  website: string
  featured?: boolean
}

const toolsData: Tool[] = [
  {
    id: 1,
    name: "Motion",
    logo: "https://company-images.partnerstack.com/file_cjK8yuRdkwf8tPSQxhHO.png",
    category: "Productivity",
    summary:
      "AI-powered productivity app that auto-schedules tasks, manages projects and calendars, and integrates notes and docs to help teams save 25% more time.",
    features: ["AI auto-scheduling", "Project management", "Calendar integration", "Notes & docs", "Task automation"],
    website: "https://usemotion.com",
    featured: true,
  },
  {
    id: 2,
    name: "Prezi",
    logo: "https://company-images.partnerstack.com/file_7jl92qwdTXfw6YYNDKZp.png",
    category: "Design",
    summary:
      "Prezi is an AI presentation tool that helps you stand out, bring your ideas to life, and create interactive presentations easier than ever.",
    features: [
      "AI presentation builder",
      "Interactive design",
      "Engaging visuals",
      "Collaboration tools",
      "Creative templates",
    ],
    website: "https://prezi.com",
    featured: true,
  },
  {
    id: 3,
    name: "Databox",
    logo: "https://company-images.partnerstack.com/file_t1esaScaBNrFZJjPnWpv.png",
    category: "Analytics",
    summary:
      "Databox is modern BI software for teams that need answers now. It offers the best of BI, without the complicated setup, steep price, or long learning curve.",
    features: [
      "Unlimited dashboards",
      "Data visualization",
      "Automated reporting",
      "Goal-setting",
      "Advanced analytics",
    ],
    website: "https://databox.com",
  },
  {
    id: 4,
    name: "Tiki",
    logo: "https://company-images.partnerstack.com/file_fp4aj0PSq1SApPr3TOkv.jpeg",
    category: "Analytics",
    summary: "Tiki unlocks value for businesses by bringing new data products to market.",
    features: ["Data products", "Business insights", "Market analysis", "Data monetization", "Analytics platform"],
    website: "https://tiki.ai",
  },
  {
    id: 5,
    name: "Confido Health",
    logo: "https://company-images.partnerstack.com/file_qKtypynj711wKqG3TTap.png",
    category: "AI Voice & Audio",
    summary:
      "Confido Health's 24/7 Healthcare Voice AI Agents work alongside your team, handling calls and updating your EHR/PMS in real time.",
    features: [
      "24/7 AI voice agents",
      "EHR/PMS integration",
      "Call automation",
      "Patient coordination",
      "Healthcare workflows",
    ],
    website: "https://confidohealth.com",
    featured: true,
  },
  {
    id: 6,
    name: "TTSOpenAI",
    logo: "https://company-images.partnerstack.com/file_w2AB3ilkeLHrnUAzPU4O.jpeg",
    category: "AI Voice & Audio",
    summary:
      "TTSOpenAI converts text into lifelike speech. Transform PDFs, DOCX files, and eBooks into MP3s (audiobooks) with natural voice output.",
    features: ["Text-to-speech", "PDF to audio", "eBook conversion", "40+ languages", "Natural voice output"],
    website: "https://ttsopenai.com",
  },
  {
    id: 7,
    name: "Vista Social",
    logo: "https://company-images.partnerstack.com/file_5HwUCY4jEGSS32pCUOHU.png",
    category: "Marketing",
    summary:
      "Fast-growing social media management platform with high conversion rates. 14-day free trial. 4.8/5 G2; 4.9/5 Capterra.",
    features: [
      "Social media scheduling",
      "Analytics dashboard",
      "Team collaboration",
      "Content management",
      "Multi-platform support",
    ],
    website: "https://vistasocial.com",
  },
  {
    id: 8,
    name: "Pilim",
    logo: "https://company-images.partnerstack.com/file_aQE3nh1QeWUVhYJAxAMJ.png",
    category: "Productivity",
    summary:
      "AI powered business management platform for SMEs and enterprises, streamlining cashflow, HR, asset management, and documents.",
    features: ["Cashflow management", "HR automation", "Asset tracking", "Document management", "Real-time insights"],
    website: "https://pilim.io",
  },
  {
    id: 9,
    name: "Bebop",
    logo: "https://company-images.partnerstack.com/file_C246cjzZ17uEuNPSeLzm.png",
    category: "Sales",
    summary:
      "Turn your network into revenue - powered by AI. Instantly surface leads, build prospect dossiers, and automate sales prep.",
    features: ["AI prospecting", "Lead generation", "Prospect dossiers", "Sales automation", "Network monetization"],
    website: "https://bebop.ai",
    featured: true,
  },
  {
    id: 10,
    name: "Rebolt",
    logo: "https://company-images.partnerstack.com/file_mmO7c5WybGr0PDaV8iNJ.jpeg",
    category: "Marketing",
    summary:
      "All-in-one marketing platform for home service businesses, offering SEO-optimized websites, social media management, and AI-powered content creation.",
    features: [
      "SEO-optimized websites",
      "Social media management",
      "AI content creation",
      "Home services focus",
      "Marketing automation",
    ],
    website: "https://rebolt.com",
  },
  {
    id: 11,
    name: "DataSnipper",
    logo: "https://company-images.partnerstack.com/file_zNhnbtuUbCXv8vnAUiE9.png",
    category: "Automation",
    summary:
      "Intelligent automation platform that automatically and securely extracts, cross-references and validates source documents of any audit and finance procedure.",
    features: ["Document extraction", "Data validation", "Cross-referencing", "Audit automation", "Finance procedures"],
    website: "https://datasnipper.com",
  },
  {
    id: 12,
    name: "Activepieces",
    logo: "https://company-images.partnerstack.com/file_t83pzVbMtqgAOgIKjlXO.jpeg",
    category: "Automation",
    summary: "Build AI agents and automations that connect apps, APIs, and data without heavy engineering.",
    features: ["AI agents", "No-code automation", "API integration", "Workflow builder", "Zapier alternative"],
    website: "https://activepieces.com",
  },
  {
    id: 13,
    name: "Distance",
    logo: "https://company-images.partnerstack.com/file_lXWgVElDQjKnZEvIrCiI.png",
    category: "Sales",
    summary:
      "AI Sales Platform built for service businesses. Capture more leads and book more jobs across channels 24/7.",
    features: [
      "AI sales platform",
      "24/7 lead capture",
      "Multi-channel support",
      "Job booking automation",
      "Service business focus",
    ],
    website: "https://distance.ai",
  },
  {
    id: 14,
    name: "Handover",
    logo: "https://company-images.partnerstack.com/file_WlhQfthr5OD5ozNJ9qWM.png",
    category: "Productivity",
    summary:
      "Enables teams to capture and transfer critical context and know-how through a guided handover process — key person departures, onboarding, project transitions.",
    features: [
      "Knowledge transfer",
      "Onboarding automation",
      "Project handovers",
      "Context preservation",
      "Team collaboration",
    ],
    website: "https://handover.ai",
  },
  {
    id: 15,
    name: "Interakt by Jio Haptik",
    logo: "https://company-images.partnerstack.com/file_dMn1H5QiQyChAvoQ5Ui0.png",
    category: "Marketing",
    summary:
      "Commerce platform that powers sales and support journeys across WhatsApp and Instagram, turning conversations into revenue.",
    features: [
      "WhatsApp commerce",
      "Instagram integration",
      "In-chat storefronts",
      "AI chatbots",
      "Meta solution provider",
    ],
    website: "https://interakt.shop",
  },
  {
    id: 16,
    name: "Devicie Inc.",
    logo: "https://company-images.partnerstack.com/file_uBJVVDx3Bz1bkHwDWTOl.png",
    category: "Automation",
    summary:
      "Automated, always optimized Intune deployment and maintenance at scale - so MSPs and IT teams can secure, manage, and grow without the grind.",
    features: ["Intune automation", "Deployment management", "MSP tools", "IT security", "Scale operations"],
    website: "https://devicie.com",
  },
  {
    id: 17,
    name: "BidX",
    logo: "https://company-images.partnerstack.com/file_HYuw2i7G30W0jGWkx7Vb.png",
    category: "Marketing",
    summary:
      "Seamless, AI-powered paid advertising platform for Amazon and Walmart sellers. Covers Sponsored Products, Display, DSP, and AMC.",
    features: ["Amazon advertising", "Walmart ads", "AI bid optimization", "Sponsored products", "DSP management"],
    website: "https://bidx.io",
  },
  {
    id: 18,
    name: "Creative Score",
    logo: "https://company-images.partnerstack.com/file_30Q3M94Fm41VULYps2Ky.jpeg",
    category: "Marketing",
    summary:
      "49% of Ad Performance is driven by creative quality. Diagnostic tool leveraging AI, behavioral science and real-world performance data.",
    features: [
      "Ad creative analysis",
      "AI diagnostics",
      "Performance optimization",
      "Behavioral science",
      "Creative testing",
    ],
    website: "https://creativescore.io",
  },
  {
    id: 19,
    name: "Mega HR",
    logo: "https://company-images.partnerstack.com/file_GWfeWaJObw7jlxbTesgZ.jpeg",
    category: "HR Tech",
    summary:
      "Mega plugs into your ATS to streamline and scale hiring with AI precision. Automate up to 78% of your busy work.",
    features: [
      "ATS integration",
      "AI hiring manager",
      "Recruitment automation",
      "Candidate screening",
      "Interview scheduling",
    ],
    website: "https://megahr.ai",
  },
  {
    id: 20,
    name: "Murf AI",
    logo: "https://company-images.partnerstack.com/file_On6oeRMiYpN22OrLGs32.jpeg",
    category: "AI Voice & Audio",
    summary:
      "Cloud-based realistic text-to-speech platform. AI and deep machine learning generate ultra-realistic voiceovers across 120+ voices in 20+ languages.",
    features: ["200+ AI voices", "30+ languages", "Voice styles", "Pronunciation control", "Emphasis & variability"],
    website: "https://murf.ai",
    featured: true,
  },
  {
    id: 21,
    name: "ClickUp",
    logo: "https://company-images.partnerstack.com/file_h5m8NRvunISw8BIYO3Sx.png",
    category: "Productivity",
    summary:
      "Versatile project management and productivity platform that centralizes tasks, docs, goals, and communication in one place.",
    features: ["Unlimited tasks", "Collaborative docs", "Kanban boards", "Sprint management", "Calendar view"],
    website: "https://clickup.com",
  },
  {
    id: 22,
    name: "Just Reach Out",
    logo: "https://company-images.partnerstack.com/file_XSYIHTX1NTw3w71blcjr.webp",
    category: "Marketing",
    summary:
      "AI-powered public relations software that helps businesses of all sizes efficiently and effectively earn press. 5,000+ customers with global journalist network.",
    features: ["AI-powered PR", "Journalist network", "Global outreach", "Press opportunities", "Media connections"],
    website: "https://justreachout.io",
  },
  {
    id: 23,
    name: "Skillfully",
    logo: "https://company-images.partnerstack.com/file_3bixlEbWm8qylazPRpBn.jpeg",
    category: "HR Tech",
    summary:
      "Skills-based hiring is transformative. Skillfully's AI-powered simulations show what candidates can actually do, helping build stronger teams.",
    features: [
      "Skills-based hiring",
      "AI simulations",
      "Dynamic assessments",
      "Candidate evaluation",
      "Lego LLM architecture",
    ],
    website: "https://skillfully.ai",
  },
  {
    id: 24,
    name: "MindStudio",
    logo: "https://company-images.partnerstack.com/file_w0fTbI30Xxcx3pMkR7tB.jpeg",
    category: "AI Development",
    summary: "Rapidly build AI agents with MindStudio's flexible and secure no-code platform.",
    features: ["No-code AI builder", "Unlimited custom agents", "Unlimited runs", "200+ AI models", "Service router"],
    website: "https://mindstudio.ai",
    featured: true,
  },
  {
    id: 25,
    name: "Vida Global Inc.",
    logo: "https://company-images.partnerstack.com/file_5uSggCwiTqXeFyO4mNpR.jpeg",
    category: "AI Voice & Audio",
    summary:
      "Vida.io's AI Phone Agents give businesses true 24/7 support across calls, SMS, email, and web chat in 10 languages.",
    features: ["AI phone agents", "Omnichannel support", "10 languages", "Call routing", "24/7 availability"],
    website: "https://vida.io",
  },
  {
    id: 26,
    name: "Motion App",
    logo: "https://company-images.partnerstack.com/file_NvSF39DwzzPYrG.jpeg",
    category: "Marketing",
    summary:
      "Learn which ad creatives are working best and share your findings with visual reports that are easy to digest.",
    features: [
      "Ad creative analytics",
      "Visual reporting",
      "Performance tracking",
      "Campaign insights",
      "Creative optimization",
    ],
    website: "https://motionapp.com",
  },
  {
    id: 27,
    name: "BLACKBOX AI",
    logo: "https://company-images.partnerstack.com/file_e9UmEGI5e9AYGZzRt27C.png",
    category: "AI Development",
    summary: "AI-powered coding assistant that helps developers write, search, and optimize code faster.",
    features: [
      "AI coding assistant",
      "All chat/image/video models",
      "Voice agent",
      "Code completion",
      "Multi-model access",
    ],
    website: "https://blackbox.ai",
  },
  {
    id: 28,
    name: "Logome.ai",
    logo: "https://company-images.partnerstack.com/file_bcbwi15zObfHkWGsgLf4.png",
    category: "Design",
    summary: "Create a logo and brand kit you'll love with Logome's AI logo generator.",
    features: ["AI logo maker", "Multiple file types", "Forever customization", "Brand kit", "Full ownership"],
    website: "https://logome.ai",
  },
  {
    id: 29,
    name: "Laxis",
    logo: "https://company-images.partnerstack.com/file_0zuhA8m8VaU3h5Mj8E9E.jpeg",
    category: "Sales",
    summary:
      "The Ultimate AI Assistant for Revenue Teams. 20,000+ professionals across 3,000+ organizations. AI Meeting Assistant and AI BDR streamline meetings and drive sales.",
    features: ["AI meeting assistant", "Transcription", "CRM integration", "Sales automation", "Revenue intelligence"],
    website: "https://laxis.com",
  },
  {
    id: 30,
    name: "Demodesk",
    logo: "https://company-images.partnerstack.com/file_DxifOZKLUEqEyeWE4nFu.png",
    category: "Sales",
    summary:
      "AI Agents that listen to sales conversations to automate manual work, coach sellers and generate critical insights.",
    features: ["AI sales agents", "Call recording", "AI transcription", "AI coaching", "CRM sync"],
    website: "https://demodesk.com",
  },
  {
    id: 31,
    name: "AiSDR, Inc.",
    logo: "https://company-images.partnerstack.com/file_wJ9VO6NnOnXcCvM0DgaG.jpeg",
    category: "Sales",
    summary:
      "First AI sales agent that handles entire outreach end-to-end with meaningful conversations through emails, LinkedIn, and text messages.",
    features: [
      "AI sales outreach",
      "Prospecting with AI",
      "Lead finder",
      "AI-researched emails",
      "LinkedIn automation",
    ],
    website: "https://aisdr.com",
  },
  {
    id: 32,
    name: "Castmagic",
    logo: "https://company-images.partnerstack.com/file_rSsGoVV3XPutxfjpEyG7.png",
    category: "Content Creation",
    summary: "Castmagic helps creators turn any form of audio into content, fast.",
    features: ["AI transcription", "60+ languages", "Magic Chat", "Longform AI", "Audiogram generation"],
    website: "https://castmagic.io",
  },
  {
    id: 33,
    name: "Looka",
    logo: "https://company-images.partnerstack.com/companyLogo/file_RFDWBKM1qbipVF.image/png",
    category: "Design",
    summary: "Help your friends make beautiful logos using AI and earn cash in return.",
    features: ["AI-powered logo design", "Unlimited changes", "Full ownership", "Hi-res & vector files", "Brand kit"],
    website: "https://looka.com",
  },
  {
    id: 34,
    name: "Runpod",
    logo: "https://company-images.partnerstack.com/file_caU02cKnUPOy9zUdjRVb.jpeg",
    category: "AI Development",
    summary:
      "Cloud platform that empowers small teams to deploy customized full-stack AI apps without managing complex infrastructure.",
    features: ["Cloud platform", "High-performance GPU", "Deploy AI apps", "Train models", "Optimize workloads"],
    website: "https://runpod.io",
  },
  {
    id: 35,
    name: "KrispCall",
    logo: "https://company-images.partnerstack.com/file_vhxhMQ14Sez5tSMDxSVr.png",
    category: "Communication",
    summary:
      "AI-powered Phone App designed for modern businesses. Get international virtual phone numbers and connect with global audiences remotely.",
    features: ["Cloud telephony", "Unified CallBox", "Call forwarding", "Call transfer", "Call center solution"],
    website: "https://krispcall.com",
  },
  {
    id: 36,
    name: "Capsule CRM",
    logo: "https://company-images.partnerstack.com/file_AA1d814sCrbmRCu4X5wA.png",
    category: "Sales",
    summary:
      "Help your customers grow their small businesses with a complete CRM and Marketing solution. Easy-to-implement and use CRM.",
    features: ["Contact management", "Sales pipeline", "Projects & tasks", "Automations", "Social campaigns"],
    website: "https://capsulecrm.com",
  },
  {
    id: 37,
    name: "Tidio",
    logo: "https://company-images.partnerstack.com/file_grcafbWzSPTJU377Cd1T.png",
    category: "Customer Support",
    summary:
      "Grow faster with AI-powered customer service. Tidio unifies Lyro AI Agent, live chat, ticketing, and automations in one inbox.",
    features: [
      "Customer service platform",
      "Lyro AI Agent",
      "Live chat & Ticketing",
      "Email management",
      "AI conversations",
    ],
    website: "https://tidio.com",
  },
  {
    id: 38,
    name: "Amplemarket",
    logo: "https://company-images.partnerstack.com/file_kFTEAVsIOeO5eyysmiLG.png",
    category: "Sales",
    summary:
      "Mission to help companies grow and do business smarter. All-in-one compound solution leveraging cutting-edge AI to streamline B2B sales.",
    features: ["Duo Copilot AI", "AI copywriter", "Competitive intelligence", "Buying signals", "Sales automation"],
    website: "https://amplemarket.com",
  },
  {
    id: 39,
    name: "SaneBox",
    logo: "https://company-images.partnerstack.com/file_2zQ7bXI222VKW6pPEOJd.png",
    category: "Productivity",
    summary:
      "Leading AI email productivity tool that saves users 12-14 hours a month on email time. Trusted by thousands of professionals.",
    features: ["Email deep clean", "Email organize", "Daily digest", "Smart folders", "Email reminders"],
    website: "https://sanebox.com",
  },
  {
    id: 40,
    name: "Assembly",
    logo: "https://company-images.partnerstack.com/file_wximXULl8dPyRc2sBSOg.png",
    category: "Customer Support",
    summary:
      "Assembly's product suite gives service businesses an all-in-one solution for client management, communication, payments, file-sharing, and contracts.",
    features: ["Employee recognition", "Celebrations", "Rewards", "Announcements", "Awards & Challenges"],
    website: "https://joinassembly.com",
  },
  {
    id: 41,
    name: "Explo",
    logo: "https://company-images.partnerstack.com/file_P2TLy4HWF5rYWmRLRzei.png",
    category: "Analytics",
    summary:
      "Explo helps companies embed customer-facing analytics seamlessly into their products. Deploy interactive dashboards and enable self-serve reporting.",
    features: [
      "Embedded analytics",
      "Interactive dashboards",
      "Self-serve reporting",
      "Real-time insights",
      "Report builder",
    ],
    website: "https://explo.co",
  },
  {
    id: 42,
    name: "Airia",
    logo: "https://company-images.partnerstack.com/file_xIhZrBdyvzIOfTKRK9Zf.png",
    category: "AI Development",
    summary:
      "Leading Enterprise AI Orchestration Platform, empowering organizations to securely build and manage AI solutions at scale.",
    features: [
      "Enterprise AI orchestration",
      "Agent orchestration",
      "Data integration",
      "AI platform",
      "Enterprise security",
    ],
    website: "https://airia.com",
  },
  {
    id: 43,
    name: "Volza",
    logo: "https://company-images.partnerstack.com/file_wsdbUZzgj5TRPVsPHmVl.png",
    category: "Analytics",
    summary:
      "Global trade-intelligence platform delivering verified export-import shipment data and actionable insights. 30+ years of heritage in trade analytics.",
    features: [
      "Export-import data",
      "203 countries coverage",
      "Global opportunity discovery",
      "Powerful search",
      "Trade analytics",
    ],
    website: "https://volza.com",
  },
  {
    id: 44,
    name: "Reclaim.ai",
    logo: "https://company-images.partnerstack.com/file_3h2qeo82lbBNaj1u1cC3.png",
    category: "Productivity",
    summary:
      "AI calendar that automatically protects focus time, optimizes your meetings, and improves your work-life balance. +30,000 signups/month!",
    features: ["Focus time", "Habits", "Tasks", "Smart meetings", "Scheduling links"],
    website: "https://reclaim.ai",
  },
  {
    id: 45,
    name: "Pangram Labs",
    logo: "https://company-images.partnerstack.com/file_7VJ6W9Hl3hP4tmM29FXX.png",
    category: "AI Development",
    summary:
      "Research-backed AI detection company that helps educators, content creators, and organizations create AI transparency.",
    features: ["AI detection", "Content verification", "Transparency tools", "Educational focus", "Organization tools"],
    website: "https://pangramlabs.com",
  },
  {
    id: 46,
    name: "Puzzle.io",
    logo: "https://company-images.partnerstack.com/file_fi7myYP1dQ5QGqjkISQN.png",
    category: "Productivity",
    summary:
      "Turn numbers into cash. Help businesses level up their accounting game. Stress-free cash and accrual accounting.",
    features: [
      "Cash accounting",
      "Accrual accounting",
      "Financial reports",
      "Accounting automation",
      "Business finance",
    ],
    website: "https://puzzle.io",
  },
  {
    id: 47,
    name: "ThorData",
    logo: "https://company-images.partnerstack.com/file_xyLC5i8txWHDKeJqRUrS.png",
    category: "Analytics",
    summary:
      "Cutting-edge ethical proxy network tailored to meet unique demands. 60M+ Residential IP pool with industry-leading features for global data access.",
    features: [
      "60M+ residential IPs",
      "Ethical proxy network",
      "Global coverage",
      "Public data access",
      "Business proxies",
    ],
    website: "https://thordata.com",
  },
  {
    id: 48,
    name: "DataHawk",
    logo: "https://company-images.partnerstack.com/file_v4YxyyeZmz9gc8I5qFgF.png",
    category: "Analytics",
    summary:
      "Brings together Amazon and Walmart data into an enterprise-grade platform. Executive-ready dashboards, daily alerts, and AI-powered insights.",
    features: ["Amazon analytics", "Walmart data", "Executive dashboards", "Performance alerts", "AI insights"],
    website: "https://datahawk.co",
  },
  {
    id: 49,
    name: "Snowfire AI",
    logo: "https://company-images.partnerstack.com/file_IItPCsuum8IZGb9M74aI.png",
    category: "AI Development",
    summary:
      "AI decision intelligence platform that fuses corporate & external data with military-grade precision for real-time, personalized insights.",
    features: ["Decision intelligence", "Real-time insights", "Risk mitigation", "Executive support", "Data fusion"],
    website: "https://snowfire.ai",
  },
  {
    id: 50,
    name: "Weave Communications",
    logo: "https://company-images.partnerstack.com/file_25MzEV3vUuT1bXg8GZEo.png",
    category: "Communication",
    summary:
      "All-in-one communications platform for texting, phone, scheduling, payments & more. Helping over 35K Dental, Vet, Optometry, & Medical practices.",
    features: ["Unified communications", "Text to pay", "Online bill pay", "Payment plans", "Medical practice tools"],
    website: "https://getweave.com",
  },
  {
    id: 51,
    name: "Smartli",
    logo: "https://company-images.partnerstack.com/file_3ukiUC3bNskh1jesgTIk.jpeg",
    category: "Content Creation",
    summary:
      "Maximize your e-commerce content with AI: text generator, essay writer, copy enhancer, rewriter, character creator, blogs, and ads.",
    features: ["SEO descriptions", "AI keywords", "AI blog writer", "AI ads writer", "Content generation"],
    website: "https://smartli.ai",
  },
  {
    id: 52,
    name: "Synthflow AI",
    logo: "https://company-images.partnerstack.com/file_lTSTOSuiCiq3t6kpZ22h.png",
    category: "AI Voice & Audio",
    summary:
      "No-code voice AI agent platform that automates customer interactions like appointment scheduling, lead qualification, and customer support.",
    features: [
      "Customer service automation",
      "Receptionist AI",
      "Voice support",
      "Multilingual support",
      "No-code platform",
    ],
    website: "https://synthflow.ai",
  },
  {
    id: 53,
    name: "Rank Prompt",
    logo: "https://company-images.partnerstack.com/file_ZwFyQ1XWRKklYaxcGTZ4.png",
    category: "Marketing",
    summary: "We give brands the tools they need to scale visibility in AI rankings.",
    features: ["AI rankings", "Multiple brands support", "Priority support", "Beta features", "Dashboard & exports"],
    website: "https://rankprompt.ai",
  },
  {
    id: 54,
    name: "ElevenLabs",
    logo: "https://company-images.partnerstack.com/file_nhuKnTPgdZWqMCMPRaPu.png",
    category: "AI Voice & Audio",
    summary: "ElevenLabs' AI Audio makes content accessible in any voice and language.",
    features: ["Text to speech", "Speech to text", "Music", "Agents", "Voice cloning"],
    website: "https://elevenlabs.io",
    featured: true,
  },
  {
    id: 55,
    name: "Hume AI",
    logo: "https://company-images.partnerstack.com/file_0KriPPapQWPXCF3VHaiU.png",
    category: "AI Voice & Audio",
    summary:
      "The empathic AI company. While other voice AI just 'reads' words, Hume's voices grasp meaning. Customize voices for any character.",
    features: [
      "Text-to-speech",
      "Speech-to-speech",
      "Expression measurement",
      "Conversational voice",
      "TTS creator studio",
    ],
    website: "https://hume.ai",
  },
  {
    id: 56,
    name: "Recomaze AI",
    logo: "https://company-images.partnerstack.com/file_rkU1c1LHt095Qeetl9C4.png",
    category: "Marketing",
    summary:
      "Turns any store into an AI Sales Agent. AI traffic, engagement, sales agent, memory-based personalization, and adaptive cross-sell.",
    features: [
      "AI sales agent",
      "Traffic optimization",
      "Brand-voice conversations",
      "Real-time guidance",
      "Checkout uplift",
    ],
    website: "https://recomaze.ai",
  },
  {
    id: 57,
    name: "Firework",
    logo: "https://company-images.partnerstack.com/file_w9CCBFytGCPVzQwhBP7A.png",
    category: "Marketing",
    summary:
      "Brings the in-person shopping experience online to increase conversions through Shoppable Short Video, Digital Showrooms, and One-to-one Virtual Shopping.",
    features: ["Video commerce", "Unlimited uploads", "Custom branding", "Auto populate products", "QR code support"],
    website: "https://firework.com",
  },
  {
    id: 58,
    name: "Plesk",
    logo: "https://company-images.partnerstack.com/file_PVXSycDHN0wQNbh7fe6e.jpeg",
    category: "Automation",
    summary:
      "Leading web hosting control panel. Helps hosting providers, agencies and developers easily manage websites, WordPress, email, DNS and databases from one dashboard.",
    features: ["Website management", "WordPress toolkit", "Email management", "DNS management", "Database management"],
    website: "https://plesk.com",
  },
]

const categories = [
  "All",
  "Productivity",
  "Design",
  "Analytics",
  "AI Voice & Audio",
  "Sales",
  "Marketing",
  "Automation",
  "HR Tech",
  "AI Development",
  "Content Creation",
  "Communication",
  "Customer Support",
]

export default function BeginOSAIMatrix() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [compareMode, setCompareMode] = useState(false)
  const [selectedTools, setSelectedTools] = useState<number[]>([])

  // 从 URL 参数激活比较模式
  useEffect(() => {
    const compareParam = searchParams.get("compare")
    if (compareParam === "true" && !compareMode) {
      setCompareMode(true)
      // 清理 URL 参数，避免重复激活
      const newSearchParams = new URLSearchParams(searchParams.toString())
      newSearchParams.delete("compare")
      const newUrl = newSearchParams.toString() 
        ? `${window.location.pathname}?${newSearchParams.toString()}`
        : window.location.pathname
      router.replace(newUrl, { scroll: false })
    }
  }, [searchParams, compareMode, router])

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {}
    categories.forEach((category) => {
      if (category === "All") {
        counts[category] = toolsData.length
      } else {
        counts[category] = toolsData.filter((tool) => tool.category === category).length
      }
    })
    return counts
  }, [])

  const filteredTools = useMemo(() => {
    return toolsData.filter((tool) => {
      const matchesSearch =
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.summary.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = selectedCategory === "All" || tool.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory])

  const toggleToolSelection = (id: number) => {
    setSelectedTools((prev) =>
      prev.includes(id) ? prev.filter((toolId) => toolId !== id) : prev.length < 2 ? [...prev, id] : prev,
    )
  }

  const comparisonTools = toolsData.filter((tool) => selectedTools.includes(tool.id))
  const setHeaderActions = useSetHeaderActions()

  useEffect(() => {
    const handleToggleCompare = () => {
      setCompareMode((prev) => {
        if (prev) {
          setSelectedTools([])
        }
        return !prev
      })
    }

    setHeaderActions(
      <HeaderActions compareMode={compareMode} onToggleCompare={handleToggleCompare} />
    )

    return () => setHeaderActions(undefined)
  }, [compareMode, setHeaderActions])

  return (
    <div>
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 space-y-4">
          <div className="relative max-w-2xl">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search AI tools by name or features..."
              className="pl-10 h-12 bg-card border-border text-foreground"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="mb-8">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full ${selectedCategory === category ? "bg-blue-600 hover:bg-blue-700" : ""}`}
                >
                  {category}
                  <span className={`ml-2 text-xs ${selectedCategory === category ? "opacity-80" : "opacity-60"}`}>
                    ({categoryCounts[category]})
                  </span>
                </Button>
              ))}
            </div>
          </div>

          {compareMode && (
            <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
              <p className="text-sm text-accent-foreground">
                💡 Comparison mode enabled: Click tool cards to select (up to 2), selected tools will be highlighted.
              </p>
            </div>
          )}
        </div>

        {!compareMode ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTools.map((tool) => (
              <Card
                key={tool.id}
                className="group hover:shadow-lg transition-all duration-300 border-border bg-card hover:border-accent/50 flex flex-col"
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-muted flex items-center justify-center">
                      <img
                        src={tool.logo || "/placeholder.svg?height=64&width=64"}
                        alt={`${tool.name} logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    {tool.featured && (
                      <Badge variant="secondary" className="bg-accent text-accent-foreground">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-lg text-foreground">{tool.name}</CardTitle>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge variant="outline" className="text-xs border-border text-muted-foreground">
                      {tool.category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 flex-1 flex flex-col">
                  <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                    {tool.summary}
                  </CardDescription>

                  <div className="space-y-2">
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Key Features</p>
                    <div className="flex flex-wrap gap-1.5">
                      {tool.features.slice(0, 3).map((feature, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs bg-muted text-foreground">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button asChild className="w-full group-hover:bg-accent group-hover:text-accent-foreground mt-auto">
                    <a href={tool.website} target="_blank" rel="noopener noreferrer">
                      Visit Website
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {comparisonTools.length === 2 && (
              <Card className="border-accent bg-card">
                <CardHeader>
                  <CardTitle className="text-foreground">Tool Comparison</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left p-4 text-muted-foreground font-medium">Feature</th>
                          {comparisonTools.map((tool) => (
                            <th key={tool.id} className="text-left p-4 text-foreground font-medium">
                              <div className="flex items-center gap-3">
                                <img
                                  src={tool.logo || "/placeholder.svg?height=40&width=40"}
                                  alt={`${tool.name} logo`}
                                  className="w-10 h-10 rounded object-contain"
                                />
                                <span>{tool.name}</span>
                              </div>
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-border">
                          <td className="p-4 text-muted-foreground font-medium">Category</td>
                          {comparisonTools.map((tool) => (
                            <td key={tool.id} className="p-4 text-foreground">
                              <Badge variant="outline" className="border-border">
                                {tool.category}
                              </Badge>
                            </td>
                          ))}
                        </tr>
                        <tr className="border-b border-border">
                          <td className="p-4 text-muted-foreground font-medium">Summary</td>
                          {comparisonTools.map((tool) => (
                            <td key={tool.id} className="p-4 text-sm text-foreground">
                              {tool.summary}
                            </td>
                          ))}
                        </tr>
                        <tr className="border-b border-border">
                          <td className="p-4 text-muted-foreground font-medium">Features</td>
                          {comparisonTools.map((tool) => (
                            <td key={tool.id} className="p-4">
                              <div className="flex flex-wrap gap-2">
                                {tool.features.map((feature, idx) => (
                                  <Badge key={idx} variant="secondary" className="text-xs bg-muted text-foreground">
                                    {feature}
                                  </Badge>
                                ))}
                              </div>
                            </td>
                          ))}
                        </tr>
                        <tr>
                          <td className="p-4 text-muted-foreground font-medium">Website</td>
                          {comparisonTools.map((tool) => (
                            <td key={tool.id} className="p-4">
                              <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                                <a href={tool.website} target="_blank" rel="noopener noreferrer">
                                  Visit Site
                                  <ArrowRight className="w-4 h-4 ml-2" />
                                </a>
                              </Button>
                            </td>
                          ))}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTools.map((tool) => (
                <Card
                  key={tool.id}
                  onClick={() => toggleToolSelection(tool.id)}
                  className={`group cursor-pointer transition-all duration-300 ${
                    selectedTools.includes(tool.id)
                      ? "border-accent shadow-lg ring-2 ring-accent"
                      : "border-border hover:border-accent/50"
                  }`}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-3">
                      <div className="w-16 h-16 rounded-lg overflow-hidden bg-muted flex items-center justify-center">
                        <img
                          src={tool.logo || "/placeholder.svg?height=64&width=64"}
                          alt={`${tool.name} logo`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      {selectedTools.includes(tool.id) && (
                        <Badge className="bg-accent text-accent-foreground">Selected</Badge>
                      )}
                    </div>
                    <CardTitle className="text-lg text-foreground">{tool.name}</CardTitle>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge variant="outline" className="text-xs border-border text-muted-foreground">
                        {tool.category}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm text-muted-foreground">{tool.summary}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {filteredTools.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No tools found matching your criteria. Try adjusting your filters.</p>
          </div>
        )}
      </main>
    </div>
  )
}
