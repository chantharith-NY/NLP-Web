import { useState } from "react"
import { summarizeText } from "../services/summarize.service"

export function useSummarize() {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState("")

  const run = async (text: string, modelId: number) => {
    setLoading(true)
    const res = await summarizeText({ text, model_id: modelId })
    setResult(res.data.summary)
    setLoading(false)
  }

  return { run, loading, result }
}
