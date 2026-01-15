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
    return data
  },
}
