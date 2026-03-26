"use client"

import { Card } from "@/components/ui/card"
import { weeklyTrends } from "@/lib/mock-data"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Line,
  ComposedChart,
} from "recharts"

export function WeeklyTrends() {
  return (
    <Card className="p-6 bg-card border-border">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Weekly Trends</h3>
          <p className="text-sm text-muted-foreground">Viewership and engagement this week</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-sm bg-chart-1" />
            <span className="text-xs text-muted-foreground">Viewers</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-chart-2" />
            <span className="text-xs text-muted-foreground">Engagement</span>
          </div>
        </div>
      </div>
      <div className="h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={weeklyTrends}>
            <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.25 0.005 285)" />
            <XAxis
              dataKey="day"
              stroke="oklch(0.6 0 0)"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              yAxisId="left"
              stroke="oklch(0.6 0 0)"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${(value / 1000000).toFixed(1)}M`}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              stroke="oklch(0.6 0 0)"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}%`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "oklch(0.14 0.005 285)",
                border: "1px solid oklch(0.25 0.005 285)",
                borderRadius: "8px",
                color: "oklch(0.95 0 0)",
              }}
              formatter={(value: number, name: string) => [
                name === "viewers" ? `${(value / 1000000).toFixed(2)}M` : `${value}%`,
                name === "viewers" ? "Viewers" : "Engagement",
              ]}
            />
            <Bar
              yAxisId="left"
              dataKey="viewers"
              fill="oklch(0.65 0.2 220)"
              radius={[4, 4, 0, 0]}
              name="viewers"
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="engagement"
              stroke="oklch(0.7 0.15 165)"
              strokeWidth={2}
              dot={{ fill: "oklch(0.7 0.15 165)", strokeWidth: 0 }}
              name="engagement"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}
