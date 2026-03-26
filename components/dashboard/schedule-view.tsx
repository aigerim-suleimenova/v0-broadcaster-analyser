"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { scheduleData } from "@/lib/mock-data"
import { Clock, Tv, Radio, Newspaper, Trophy, Film, Mic } from "lucide-react"

const typeConfig = {
  news: { icon: Newspaper, color: "bg-chart-1/20 text-chart-1" },
  entertainment: { icon: Film, color: "bg-chart-3/20 text-chart-3" },
  sports: { icon: Trophy, color: "bg-chart-4/20 text-chart-4" },
  documentary: { icon: Tv, color: "bg-chart-5/20 text-chart-5" },
  "talk-show": { icon: Mic, color: "bg-primary/20 text-primary" },
}

export function ScheduleView() {
  return (
    <Card className="p-6 bg-card border-border">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Broadcast Schedule</h3>
          <p className="text-sm text-muted-foreground">Today&apos;s programming lineup</p>
        </div>
        <Badge variant="outline" className="border-border text-muted-foreground">
          <Clock className="mr-1 h-3 w-3" />
          8 Programs
        </Badge>
      </div>

      <div className="space-y-2">
        {scheduleData.map((item) => {
          const config = typeConfig[item.type]
          const Icon = config.icon
          return (
            <div
              key={item.id}
              className={`flex items-center justify-between rounded-lg p-3 transition-colors ${
                item.isLive
                  ? "bg-primary/10 border border-primary/20"
                  : "bg-secondary/50 hover:bg-secondary"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`rounded-lg p-2 ${config.color}`}>
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-medium text-foreground">{item.title}</h4>
                    {item.isLive && (
                      <span className="flex items-center gap-1 text-xs text-primary">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
                        LIVE
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">{item.channel}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Badge variant="outline" className="text-xs border-border text-muted-foreground capitalize">
                  {item.type.replace("-", " ")}
                </Badge>
                <span className="text-sm font-mono text-muted-foreground">
                  {item.startTime} - {item.endTime}
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </Card>
  )
}
