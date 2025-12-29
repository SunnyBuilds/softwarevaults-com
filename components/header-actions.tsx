"use client"

import { GitCompare } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeaderActionsProps {
  compareMode: boolean
  onToggleCompare: () => void
}

export default function HeaderActions({ compareMode, onToggleCompare }: HeaderActionsProps) {
  return (
    <Button
      variant={compareMode ? "default" : "outline"}
      onClick={onToggleCompare}
      className={compareMode ? "bg-blue-600 hover:bg-blue-700" : ""}
    >
      <GitCompare className="w-4 h-4 mr-2" />
      {compareMode ? "Exit Compare" : "Compare Tools"}
    </Button>
  )
}

