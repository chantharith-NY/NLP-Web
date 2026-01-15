export type SummaryFormat = "paragraph" | "bullet" | "table"
export type SummaryRatio = "10%" | "20%" | "30%" | "40%" | "50%"

export interface SummarizeRequest {
  text: string
  model_id: number
}

export interface SummarizeResponse {
  summary: string
  execution_time_ms: number
}