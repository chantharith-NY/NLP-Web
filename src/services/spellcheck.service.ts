import { api } from "./api"
import type {
  SpellCheckRequest,
  SpellCheckResponse,
} from "../types/spellcheck"

export const spellCheckService = {
  async checkText(
    payload: SpellCheckRequest
  ): Promise<SpellCheckResponse> {
    const response = await api.post<SpellCheckResponse>(
      "/spell-check",
      payload
    )
    return response.data
  },
}
