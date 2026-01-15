export type SummaryFormat = "paragraph" | "bullet" | "table"
export type SummaryRatio = "10%" | "20%" | "30%" | "40%" | "50%"

export interface SummarizeRequest {
  text: string
  model_id: number
  ratio: SummaryRatio
  format: SummaryFormat
}

export interface SummarizeResponse {
  summary: string
  bullets?: string[]
}