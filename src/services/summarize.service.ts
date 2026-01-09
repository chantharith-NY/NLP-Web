import { api } from "./api"

export function summarizeText(payload: {
  text: string
  model_id: number
}) {
  return api.post("/text-summarize", payload)
}
