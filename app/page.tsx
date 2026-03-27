"use client"

import { useState } from "react"
import { Header } from "@/components/dashboard/header"
import { SidebarNav } from "@/components/dashboard/sidebar-nav"
import { StatsCards } from "@/components/dashboard/stats-cards"
import { ViewerChart } from "@/components/dashboard/viewer-chart"
import { ContentPerformance } from "@/components/dashboard/content-performance"
import { ChatAnalysis } from "@/components/dashboard/chat-analysis"
import { ScheduleView } from "@/components/dashboard/schedule-view"
import { ChannelList } from "@/components/dashboard/channel-list"
import { WeeklyTrends } from "@/components/dashboard/weekly-trends"
import { AIAgentPanel } from "@/components/dashboard/ai-agent-panel"

export default function BroadcastAnalyzer() {
  const [showAIPanel, setShowAIPanel] = useState(true)

  return (
    <div className="min-h-screen bg-background">
      <Header showAIPanel={showAIPanel} onToggleAIPanel={() => setShowAIPanel(!showAIPanel)} />
      <SidebarNav />
      
      <div className="ml-56 flex">
        <main className={`flex-1 p-6 transition-all duration-300 ${showAIPanel ? "pr-3" : ""}`}>
          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-foreground">Dashboard Overview</h1>
            <p className="text-muted-foreground">
              Monitor your broadcast performance across all channels
            </p>
          </div>

          <div className="space-y-6">
            <StatsCards />
            
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
              <div className="xl:col-span-2">
                <ViewerChart />
              </div>
              <div>
                <ChannelList />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
              <WeeklyTrends />
              <ChatAnalysis />
            </div>

            <ContentPerformance />
            
            <ScheduleView />
          </div>
        </main>

        {showAIPanel && (
          <aside className="sticky top-14 h-[calc(100vh-3.5rem)] w-96 shrink-0 p-6 pl-3">
            <AIAgentPanel />
          </aside>
        )}
      </div>
    </div>
  )
}
