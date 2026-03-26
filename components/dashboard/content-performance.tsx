"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { contentPerformanceData } from "@/lib/mock-data"
import { Star, Share2, MessageSquare } from "lucide-react"

export function ContentPerformance() {
  return (
    <Card className="p-6 bg-card border-border">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-foreground">Content Performance</h3>
        <p className="text-sm text-muted-foreground">Top performing programs today</p>
      </div>
      <div className="space-y-4">
        {contentPerformanceData.map((content) => (
          <div
            key={content.id}
            className="flex items-center justify-between rounded-lg bg-secondary/50 p-4 transition-colors hover:bg-secondary"
          >
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h4 className="font-medium text-foreground">{content.title}</h4>
                <Badge variant="outline" className="text-xs border-primary/30 text-primary">
                  {content.channel}
                </Badge>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                {content.startTime} - {content.endTime}
              </p>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-1.5">
                <Star className="h-4 w-4 text-chart-3" />
                <span className="text-sm font-medium text-foreground">{content.rating}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Share2 className="h-4 w-4 text-chart-1" />
                <span className="text-sm text-muted-foreground">
                  {(content.shares / 1000).toFixed(1)}K
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <MessageSquare className="h-4 w-4 text-chart-2" />
                <span className="text-sm text-muted-foreground">
                  {(content.comments / 1000).toFixed(1)}K
                </span>
              </div>
              <div className="w-20">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Engagement</span>
                  <span className="font-medium text-primary">{content.engagement}%</span>
                </div>
                <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full rounded-full bg-primary transition-all"
                    style={{ width: `${content.engagement}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
