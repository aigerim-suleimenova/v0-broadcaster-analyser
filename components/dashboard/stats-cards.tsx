"use client"

import { Card } from "@/components/ui/card"
import { Users, Radio, TrendingUp, Clock } from "lucide-react"

const stats = [
  {
    label: "Total Viewers",
    value: "1.42M",
    change: "+12.5%",
    trend: "up",
    icon: Users,
  },
  {
    label: "Active Channels",
    value: "3/5",
    change: "2 live",
    trend: "neutral",
    icon: Radio,
  },
  {
    label: "Engagement Rate",
    value: "84.2%",
    change: "+5.3%",
    trend: "up",
    icon: TrendingUp,
  },
  {
    label: "Avg. Watch Time",
    value: "32m",
    change: "+8 min",
    trend: "up",
    icon: Clock,
  },
]

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.label} className="p-4 bg-card border-border">
          <div className="flex items-center justify-between">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <stat.icon className="h-5 w-5 text-primary" />
            </div>
            <span
              className={`text-xs font-medium ${
                stat.trend === "up"
                  ? "text-primary"
                  : stat.trend === "down"
                  ? "text-destructive"
                  : "text-muted-foreground"
              }`}
            >
              {stat.change}
            </span>
          </div>
          <div className="mt-3">
            <p className="text-2xl font-semibold text-foreground">{stat.value}</p>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </div>
        </Card>
      ))}
    </div>
  )
}
