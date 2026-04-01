import { useState } from "react"
import { spellCheckService } from "../services/spellcheck.service"
import { useHistory } from "./useHistory"

export function useSpellCheck() {
    const [loading, setLoading] = useState(false)
    const [result, setResult] = useState("")
    const [executionTimeMs, setExecutionTimeMs] = useState<number | undefined>(undefined)
    const [error, setError] = useState<string | null>(null)

    const [accuracy, setAccuracy] = useState<number>(0)
    const [errors, setErrors] = useState<number>(0)

    const history = useHistory()

    const run = async (text: string, modelId: number) => {
        if (!text.trim()) return

        try {
            setLoading(true)
            setError(null)

            const res = await spellCheckService.checkText({
                text,
                model_id: modelId,
            })

            // ✅ same as summarize (from backend)
            setExecutionTimeMs(res.execution_time_ms)

            setResult(res.corrected_text)
            setAccuracy(res.accuracy ?? 0)
            setErrors(res.errors ?? 0)

            // ✅ save history (same structure as summarize)
            history.add({
                id: Date.now().toString(),
                type: "spell_check",
                title: "ពិនិត្យអក្ខរាវិរុទ្ធ",
                preview: res.corrected_text.slice(0, 60),
                createdAt: Date.now(),
                route: "/tools/spell-check",
            })

        } catch {
            setError("មានបញ្ហាក្នុងការតភ្ជាប់ទៅម៉ាស៊ីនមេ")
        } finally {
            setLoading(false)
        }
    }

    const reset = () => {
        setResult("")
        setExecutionTimeMs(undefined)
        setError(null)
        setAccuracy(0)
        setErrors(0)
    }

    return {
        run,
        reset,
        loading,
        result,
        executionTimeMs,
        error,
        accuracy,
        errors,
    }
}