// Mock data for Broadcast Analyzer

export interface BroadcastChannel {
  id: string
  name: string
  type: "tv" | "radio"
  logo: string
  status: "live" | "offline" | "scheduled"
}

export interface ViewerStats {
  timestamp: string
  viewers: number
  listeners: number
  peakViewers: number
  avgWatchTime: number
}

export interface ContentPerformance {
  id: string
  title: string
  channel: string
  startTime: string
  endTime: string
  rating: number
  engagement: number
  shares: number
  comments: number
}

export interface ChatMessage {
  id: string
  user: string
  message: string
  timestamp: string
  sentiment: "positive" | "neutral" | "negative"
}

export interface ScheduleItem {
  id: string
  title: string
  channel: string
  startTime: string
  endTime: string
  type: "news" | "entertainment" | "sports" | "documentary" | "talk-show"
  isLive: boolean
}

export const channels: BroadcastChannel[] = [
  { id: "1", name: "Metro TV", type: "tv", logo: "MTV", status: "live" },
  { id: "2", name: "City Radio FM", type: "radio", logo: "CR", status: "live" },
  { id: "3", name: "News Network", type: "tv", logo: "NN", status: "live" },
  { id: "4", name: "Classic FM", type: "radio", logo: "CF", status: "offline" },
  { id: "5", name: "Sports Central", type: "tv", logo: "SC", status: "scheduled" },
]

export const viewerStatsData: ViewerStats[] = Array.from({ length: 24 }, (_, i) => ({
  timestamp: `${String(i).padStart(2, "0")}:00`,
  viewers: Math.floor(Math.random() * 500000) + 100000,
  listeners: Math.floor(Math.random() * 200000) + 50000,
  peakViewers: Math.floor(Math.random() * 800000) + 200000,
  avgWatchTime: Math.floor(Math.random() * 45) + 15,
}))

export const contentPerformanceData: ContentPerformance[] = [
  {
    id: "1",
    title: "Morning News Brief",
    channel: "News Network",
    startTime: "06:00",
    endTime: "08:00",
    rating: 8.5,
    engagement: 78,
    shares: 12400,
    comments: 3240,
  },
  {
    id: "2",
    title: "Drive Time Show",
    channel: "City Radio FM",
    startTime: "07:00",
    endTime: "10:00",
    rating: 9.2,
    engagement: 92,
    shares: 8900,
    comments: 5670,
  },
  {
    id: "3",
    title: "Prime Time Drama",
    channel: "Metro TV",
    startTime: "20:00",
    endTime: "21:00",
    rating: 9.8,
    engagement: 95,
    shares: 45000,
    comments: 12800,
  },
  {
    id: "4",
    title: "Sports Roundup",
    channel: "Sports Central",
    startTime: "18:00",
    endTime: "19:30",
    rating: 8.9,
    engagement: 88,
    shares: 23400,
    comments: 8900,
  },
  {
    id: "5",
    title: "Late Night Talk",
    channel: "Metro TV",
    startTime: "23:00",
    endTime: "00:30",
    rating: 7.8,
    engagement: 72,
    shares: 6700,
    comments: 2340,
  },
]

export const chatMessages: ChatMessage[] = [
  { id: "1", user: "ViewerPro", message: "Great segment on the economy today!", timestamp: "2 min ago", sentiment: "positive" },
  { id: "2", user: "NewsWatcher", message: "Can we get more coverage on local events?", timestamp: "5 min ago", sentiment: "neutral" },
  { id: "3", user: "MusicFan22", message: "Love the new playlist on City Radio!", timestamp: "8 min ago", sentiment: "positive" },
  { id: "4", user: "CriticalEye", message: "The audio quality could be better", timestamp: "12 min ago", sentiment: "negative" },
  { id: "5", user: "DailyViewer", message: "Best morning show in the city", timestamp: "15 min ago", sentiment: "positive" },
  { id: "6", user: "SportsFan99", message: "When is the next game coverage?", timestamp: "18 min ago", sentiment: "neutral" },
  { id: "7", user: "RadioLover", message: "More classic hits please!", timestamp: "22 min ago", sentiment: "positive" },
  { id: "8", user: "Disappointed", message: "Show started late again", timestamp: "25 min ago", sentiment: "negative" },
]

export const scheduleData: ScheduleItem[] = [
  { id: "1", title: "Morning News", channel: "News Network", startTime: "06:00", endTime: "08:00", type: "news", isLive: true },
  { id: "2", title: "Breakfast Show", channel: "City Radio FM", startTime: "07:00", endTime: "10:00", type: "talk-show", isLive: true },
  { id: "3", title: "Sports Update", channel: "Sports Central", startTime: "09:00", endTime: "10:00", type: "sports", isLive: false },
  { id: "4", title: "Documentary Hour", channel: "Metro TV", startTime: "10:00", endTime: "11:00", type: "documentary", isLive: false },
  { id: "5", title: "Midday Entertainment", channel: "Metro TV", startTime: "12:00", endTime: "14:00", type: "entertainment", isLive: false },
  { id: "6", title: "Afternoon Drive", channel: "City Radio FM", startTime: "15:00", endTime: "18:00", type: "talk-show", isLive: false },
  { id: "7", title: "Evening News", channel: "News Network", startTime: "18:00", endTime: "19:00", type: "news", isLive: false },
  { id: "8", title: "Prime Time Movie", channel: "Metro TV", startTime: "20:00", endTime: "22:00", type: "entertainment", isLive: false },
]

export const sentimentBreakdown = {
  positive: 62,
  neutral: 25,
  negative: 13,
}

export const weeklyTrends = [
  { day: "Mon", viewers: 1250000, engagement: 78 },
  { day: "Tue", viewers: 1180000, engagement: 75 },
  { day: "Wed", viewers: 1320000, engagement: 82 },
  { day: "Thu", viewers: 1450000, engagement: 85 },
  { day: "Fri", viewers: 1680000, engagement: 91 },
  { day: "Sat", viewers: 2100000, engagement: 95 },
  { day: "Sun", viewers: 1950000, engagement: 92 },
]

export const channelComparison = [
  { channel: "Metro TV", viewers: 450000, share: 32 },
  { channel: "News Network", viewers: 380000, share: 27 },
  { channel: "City Radio FM", viewers: 290000, share: 21 },
  { channel: "Sports Central", viewers: 180000, share: 13 },
  { channel: "Classic FM", viewers: 100000, share: 7 },
]
