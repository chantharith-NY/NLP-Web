import { useState } from "react"
import { summarizeService } from "../services/summarize.service"
import { useHistory } from "./useHistory"

export function useSummarize() {
  const [loading, setLoading] = useState(false)
  const [summary, setSummary] = useState("")
  const [executionTimeMs, setExecutionTimeMs] = useState<number | undefined>(undefined)
  const [error, setError] = useState<string | null>(null)

  const history = useHistory()

  const run = async (text: string, modelId: number) => {
    if (!text.trim()) return

    try {
      setLoading(true)
      setError(null)

      const res = await summarizeService.summarizeText({
        text,
        model_id: modelId,
      })

      setSummary(res.summary)
      setExecutionTimeMs(res.execution_time_ms)

      // Save to history
      history.add({
        id: Date.now().toString(),
        type: "summarize",
        title: "សង្ខេបអត្ថបទ",
        preview: res.summary.slice(0, 60),
        createdAt: Date.now(),
        route: "/tools/text-summary",
      })
    } catch {
      setError("មានបញ្ហាក្នុងការសង្ខេបអត្ថបទ")
    } finally {
      setLoading(false)
    }
  }

  const reset = () => {
    setSummary("")
    setExecutionTimeMs(undefined)
    setError(null)
  }

  return {
    run,
    reset,
    loading,
    summary,
    executionTimeMs,
    error,
  }
}
