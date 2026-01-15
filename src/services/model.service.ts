import { api } from "./api"
import type { ModelOption } from "../types/model"

export const modelService = {
  async getSpellCheckModels(): Promise<ModelOption[]> {
    const { data } = await api.get("/models?type=spell_check")

    return data.map((m: any) => ({
      id: m.id,
      name: m.model_name,
      description: m.description,
    }))
  },

  async getSummaryModels(): Promise<ModelOption[]> {
    const { data } = await api.get("/models?type=summarization")

    return data.map((m: any) => ({
      id: m.id,
      name: m.model_name,
      description: m.description,
    }))
  },
}
