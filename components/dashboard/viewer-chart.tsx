"use client"

import { Card } from "@/components/ui/card"
import { viewerStatsData } from "@/lib/mock-data"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

export function ViewerChart() {
  return (
    <Card className="p-6 bg-card border-border">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Viewer Statistics</h3>
          <p className="text-sm text-muted-foreground">Last 24 hours</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-chart-1" />
            <span className="text-xs text-muted-foreground">TV Viewers</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-chart-2" />
            <span className="text-xs text-muted-foreground">Radio Listeners</span>
          </div>
        </div>
      </div>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={viewerStatsData}>
            <defs>
              <linearGradient id="viewersGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="oklch(0.65 0.2 220)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="oklch(0.65 0.2 220)" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="listenersGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="oklch(0.7 0.15 165)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="oklch(0.7 0.15 165)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.25 0.005 285)" />
            <XAxis
              dataKey="timestamp"
              stroke="oklch(0.6 0 0)"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="oklch(0.6 0 0)"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${(value / 1000).toFixed(0)}K`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "oklch(0.14 0.005 285)",
                border: "1px solid oklch(0.25 0.005 285)",
                borderRadius: "8px",
                color: "oklch(0.95 0 0)",
              }}
              formatter={(value: number) => [`${(value / 1000).toFixed(0)}K`, ""]}
            />
            <Area
              type="monotone"
              dataKey="viewers"
              stroke="oklch(0.65 0.2 220)"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#viewersGradient)"
              name="TV Viewers"
            />
            <Area
              type="monotone"
              dataKey="listeners"
              stroke="oklch(0.7 0.15 165)"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#listenersGradient)"
              name="Radio Listeners"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}
