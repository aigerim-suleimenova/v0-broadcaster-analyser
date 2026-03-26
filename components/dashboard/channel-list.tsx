"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { channels, channelComparison } from "@/lib/mock-data"
import { Tv, Radio } from "lucide-react"

const statusConfig = {
  live: { label: "Live", color: "bg-primary text-primary-foreground" },
  offline: { label: "Offline", color: "bg-muted text-muted-foreground" },
  scheduled: { label: "Scheduled", color: "bg-chart-3/20 text-chart-3" },
}

export function ChannelList() {
  return (
    <Card className="p-6 bg-card border-border">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-foreground">Channels Overview</h3>
        <p className="text-sm text-muted-foreground">Status and market share</p>
      </div>

      <div className="space-y-3">
        {channels.map((channel) => {
          const status = statusConfig[channel.status]
          const comparison = channelComparison.find((c) => c.channel === channel.name)
          return (
            <div
              key={channel.id}
              className="flex items-center justify-between rounded-lg bg-secondary/50 p-3 transition-colors hover:bg-secondary"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-sm font-semibold text-foreground">
                  {channel.logo}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-medium text-foreground">{channel.name}</h4>
                    {channel.type === "tv" ? (
                      <Tv className="h-3 w-3 text-muted-foreground" />
                    ) : (
                      <Radio className="h-3 w-3 text-muted-foreground" />
                    )}
                  </div>
                  {comparison && (
                    <p className="text-xs text-muted-foreground">
                      {(comparison.viewers / 1000).toFixed(0)}K viewers
                    </p>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-3">
                {comparison && (
                  <div className="w-16 text-right">
                    <span className="text-sm font-medium text-primary">{comparison.share}%</span>
                    <p className="text-xs text-muted-foreground">share</p>
                  </div>
                )}
                <Badge className={`text-xs ${status.color}`}>{status.label}</Badge>
              </div>
            </div>
          )
        })}
      </div>
    </Card>
  )
}
