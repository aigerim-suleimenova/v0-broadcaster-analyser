"use client"

import { Header } from "@/components/dashboard/header"
import { SidebarNav } from "@/components/dashboard/sidebar-nav"
import { StatsCards } from "@/components/dashboard/stats-cards"
import { ViewerChart } from "@/components/dashboard/viewer-chart"
import { ContentPerformance } from "@/components/dashboard/content-performance"
import { ChatAnalysis } from "@/components/dashboard/chat-analysis"
import { ScheduleView } from "@/components/dashboard/schedule-view"
import { ChannelList } from "@/components/dashboard/channel-list"
import { WeeklyTrends } from "@/components/dashboard/weekly-trends"

export default function BroadcastAnalyzer() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <SidebarNav />
      
      <main className="ml-56 p-6">
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
    </div>
  )
}
