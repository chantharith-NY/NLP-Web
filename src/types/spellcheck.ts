export interface SpellCheckRequest {
  text: string
  model_id: number
}

export interface SpellCheckResponse {
  corrected_text: string
  accuracy?: number
  errors?: number
  execution_time_ms?: number
}
