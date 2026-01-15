import { useState, useEffect } from "react"
import TextInputCard from "../../common/TextInputCard"
import SummaryOptions from "../../common/SummaryOptions"
import ActionButton from "../../common/ActionButton"
import ResultCard from "../../common/ResultCard"
import StatsBar from "../../common/StatsBar"
import HeroTitle from "../../common/HeroTitle"

import type { SummaryRatio, SummaryFormat } from "../../../types/summarize"
import type { ModelOption } from "../../../types/model"
import { modelService } from "../../../services/model.service"
import { summarizeService } from "../../../services/summarize.service"

export default function TextSummaryPage() {
  const [models, setModels] = useState<ModelOption[]>([])
  const [model, setModel] = useState<number | null>(null)
  const [ratio, setRatio] = useState<SummaryRatio>("30%")
  const [format, setFormat] = useState<SummaryFormat>("paragraph")

  const [inputText, setInputText] = useState("")
  const [result, setResult] = useState("")
  const [bullets, setBullets] = useState<string[]>([])

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const resultFormat: "paragraph" | "bullet" =
    format === "bullet" ? "bullet" : "paragraph"

  useEffect(() => {
    const loadModels = async () => {
      const data = await modelService.getSummaryModels()
      setModels(data)
      setModel(data[0]?.id ?? null)
    }

    loadModels()
  }, [])

  const handleTextSummarize = async () => {
    if (!inputText.trim()) return

    try {
      setLoading(true)
      setError(null)

      const res = await summarizeService.summarizeText({
        text: inputText,
        model_id: model!,
        ratio,
        format,
      })

      setResult(res.summary)

      setBullets(
        res.bullets ??
        res.summary.split("។").map(s => s.trim()).filter(Boolean)
      )
    } catch (err) {
      setError("មានបញ្ហាក្នុងការសង្ខេបអត្ថបទ")
    } finally {
      setLoading(false)
    }
  }

  // Statistics (character-based, consistent)
  const originalCharCount = inputText.length
  const summarizedCharCount = result.length

  const accuracy =
    originalCharCount > 0
      ? Math.round((summarizedCharCount / originalCharCount) * 100)
      : 0

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Hero */}
      <HeroTitle title="ឧបករណ៍បញ្ញាសិប្បនិម្មិតសង្ខេបអត្ថបទ" />

      {/* Two-panel layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {/* LEFT — INPUT */}
        <div className="bg-white rounded-xl shadow p-4 flex flex-col h-full">
          {/* Top */}
          <div className="flex-1 space-y-4">
            <TextInputCard
              value={inputText}
              onChange={setInputText}
              onClear={() => {
                setInputText("")
                setResult("")
              }}
            />

            <SummaryOptions
              models={models}
              model={model}
              ratio={ratio}
              format={format}
              onModelChange={setModel}
              onRatioChange={setRatio}
              onFormatChange={setFormat}
            />
          </div>

          {/* Bottom button */}
          <div className="pt-4 flex justify-start">
            <ActionButton
              label="សង្ខេបអត្ថបទ"
              isActive={inputText.length > 0 && !loading}
              onClick={handleTextSummarize}
            />
          </div>
        </div>

        {/* RIGHT — RESULT */}
        <div className="bg-white rounded-xl shadow p-4 flex flex-col h-full">
          {/* Top */}
          <div className="flex-1 space-y-3">
            <ResultCard
              title="លទ្ធផលសង្ខេប"
              format={resultFormat}
              paragraphText={result}
              bulletItems={bullets}
            />
            {error && (
              <p className="text-red-500 text-sm italic">
                {error}
              </p>
            )}
          </div>

          {/* Bottom button */}
          <div className="pt-4 flex justify-between">
            {/* Format Switch */}
            <div className="flex gap-2">
              <ActionButton
                label="អត្ថបទ"
                isActive={format === "paragraph"}
                onClick={() => setFormat("paragraph")}
              />
              <ActionButton
                label="ចំណុច"
                isActive={format === "bullet"}
                onClick={() => setFormat("bullet")}
              />
            </div>
            <ActionButton
              label="ចម្លងលទ្ធផល"
              isActive={result.length > 0}
              onClick={() => navigator.clipboard.writeText(result)}
            />
          </div>
        </div>
      </div>

      {/* Stats */}
      <StatsBar
        stats={[
          { label: "អក្សរដើម", value: `${originalCharCount} អក្សរ` },
          { label: "អក្សរសង្ខេប", value: `${summarizedCharCount} អក្សរ` },
          { label: "ភាពត្រឹមត្រូវ", value: `${accuracy}%` },
        ]}
      />
    </div>
  )
}
