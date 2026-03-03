import { api } from "./api"
import type {
  SummarizeRequest,
  SummarizeResponse,
} from "../types/summarize"

export const summarizeService = {
  async summarizeText(payload: SummarizeRequest): Promise<SummarizeResponse> {
    const { data } = await api.post<SummarizeResponse>(
      "/summarize",
      payload
    )
    console.log("Summarization response:", data)
    console.log("Summarization response:", data.execution_time_ms, "ms")
    return data
  },
}
