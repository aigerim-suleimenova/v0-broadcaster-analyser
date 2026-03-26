"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { chatMessages, sentimentBreakdown } from "@/lib/mock-data"
import { MessageCircle, ThumbsUp, Minus, ThumbsDown } from "lucide-react"

const sentimentConfig = {
  positive: { icon: ThumbsUp, color: "text-primary", bg: "bg-primary/10" },
  neutral: { icon: Minus, color: "text-chart-3", bg: "bg-chart-3/10" },
  negative: { icon: ThumbsDown, color: "text-destructive", bg: "bg-destructive/10" },
}

export function ChatAnalysis() {
  return (
    <Card className="p-6 bg-card border-border">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Chat Analysis</h3>
          <p className="text-sm text-muted-foreground">Live sentiment from viewer comments</p>
        </div>
        <Badge variant="outline" className="border-primary/30 text-primary">
          <MessageCircle className="mr-1 h-3 w-3" />
          Live
        </Badge>
      </div>

      <div className="mb-6 grid grid-cols-3 gap-3">
        {(Object.keys(sentimentBreakdown) as Array<keyof typeof sentimentBreakdown>).map(
          (sentiment) => {
            const config = sentimentConfig[sentiment]
            const Icon = config.icon
            return (
              <div
                key={sentiment}
                className={`rounded-lg p-3 ${config.bg} flex flex-col items-center`}
              >
                <Icon className={`h-5 w-5 ${config.color}`} />
                <span className="mt-1 text-2xl font-semibold text-foreground">
                  {sentimentBreakdown[sentiment]}%
                </span>
                <span className="text-xs capitalize text-muted-foreground">{sentiment}</span>
              </div>
            )
          }
        )}
      </div>

      <div className="space-y-3 max-h-[280px] overflow-y-auto pr-2">
        {chatMessages.map((message) => {
          const config = sentimentConfig[message.sentiment]
          return (
            <div
              key={message.id}
              className="rounded-lg bg-secondary/50 p-3 transition-colors hover:bg-secondary"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-muted text-xs font-medium text-foreground">
                    {message.user.charAt(0)}
                  </div>
                  <span className="text-sm font-medium text-foreground">{message.user}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">{message.timestamp}</span>
                  <div className={`rounded-full p-1 ${config.bg}`}>
                    <config.icon className={`h-3 w-3 ${config.color}`} />
                  </div>
                </div>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{message.message}</p>
            </div>
          )
        })}
      </div>
    </Card>
  )
}
