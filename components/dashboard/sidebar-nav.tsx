"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  TrendingUp,
  Calendar,
  MessageSquare,
  Radio,
  Settings,
  BarChart3,
  Users,
} from "lucide-react"

const navItems = [
  { id: "overview", label: "Overview", icon: LayoutDashboard },
  { id: "analytics", label: "Analytics", icon: BarChart3 },
  { id: "channels", label: "Channels", icon: Radio },
  { id: "audience", label: "Audience", icon: Users },
  { id: "performance", label: "Performance", icon: TrendingUp },
  { id: "schedule", label: "Schedule", icon: Calendar },
  { id: "comments", label: "Comments", icon: MessageSquare },
  { id: "settings", label: "Settings", icon: Settings },
]

export function SidebarNav() {
  const [active, setActive] = useState("overview")

  return (
    <aside className="fixed left-0 top-16 z-40 h-[calc(100vh-4rem)] w-56 border-r border-border bg-sidebar">
      <nav className="flex flex-col gap-1 p-4">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActive(item.id)}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
              active === item.id
                ? "bg-sidebar-accent text-sidebar-accent-foreground"
                : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
            )}
          >
            <item.icon className="h-4 w-4" />
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  )
}
