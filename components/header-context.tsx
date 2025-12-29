"use client"

import { createContext, useContext, ReactNode, useState } from "react"

interface HeaderContextType {
  actions?: ReactNode
  setActions: (actions: ReactNode) => void
}

const HeaderContext = createContext<HeaderContextType>({
  setActions: () => {},
})

export function HeaderProvider({ children }: { children: React.ReactNode }) {
  const [actions, setActions] = useState<ReactNode>(undefined)

  return <HeaderContext.Provider value={{ actions, setActions }}>{children}</HeaderContext.Provider>
}

export function useHeaderActions() {
  const context = useContext(HeaderContext)
  return context.actions
}

export function useSetHeaderActions() {
  const context = useContext(HeaderContext)
  return context.setActions
}
