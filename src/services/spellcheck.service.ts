import { api } from "./api"
import type {
  SpellCheckRequest,
  SpellCheckResponse,
} from "../types/spellcheck"

export const spellCheckService = {
  async checkText(
    payload: SpellCheckRequest
  ): Promise<SpellCheckResponse> {
    const { data } = await api.post<SpellCheckResponse>(
      "/spell-check",
      payload
    )

    console.log("SpellCheck response:", data)
    console.log("SpellCheck execution time:", data.execution_time_ms, "ms")

    return data
  },
}
