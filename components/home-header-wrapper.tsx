"use client"

import { useSetHeaderActions } from "./header-context"
import HeaderActions from "./header-actions"
import { useState, useEffect } from "react"

export function HomeHeaderWrapper({ children, compareMode, onToggleCompare }: { 
  children: React.ReactNode
  compareMode: boolean
  onToggleCompare: () => void
}) {
  const setActions = useSetHeaderActions()

  useEffect(() => {
    setActions(
      <HeaderActions compareMode={compareMode} onToggleCompare={onToggleCompare} />
    )
    return () => setActions(undefined)
  }, [compareMode, onToggleCompare, setActions])

  return <>{children}</>
}

