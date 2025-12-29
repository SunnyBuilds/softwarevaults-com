"use client"

import { GitCompare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter, usePathname } from "next/navigation"

export default function GlobalCompareButton() {
  const router = useRouter()
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  const handleClick = () => {
    if (isHomePage) {
      // 如果已经在首页，可以触发比较模式（通过事件或其他方式）
      // 这里我们跳转到带参数的首页
      router.push("/?compare=true")
    } else {
      // 如果不在首页，跳转到首页并激活比较模式
      router.push("/?compare=true")
    }
  }

  return (
    <Button
      variant="outline"
      onClick={handleClick}
      className="hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors"
    >
      <GitCompare className="w-4 h-4 mr-2" />
      Compare Tools
    </Button>
  )
}

