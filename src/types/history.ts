export type HistoryType = "summarize" | "spell_check"

export interface HistoryItem {
  id: string
  type: HistoryType
  title: string
  preview: string
  createdAt: number
  route: string
}