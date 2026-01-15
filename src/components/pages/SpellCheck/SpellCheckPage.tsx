import { useState, useEffect } from "react"

import TextInputCard from "../../common/TextInputCard"
import ActionButton from "../../common/ActionButton"
import ResultCard from "../../common/ResultCard"
import StatsBar from "../../common/StatsBar"
import HeroTitle from "../../common/HeroTitle"
import SelectField from "../../ui/SelectField"

import { spellCheckService } from "../../../services/spellcheck.service"
import type { ModelOption } from "../../../types/model"
import { modelService } from "../../../services/model.service"

export default function SpellCheckPage() {
  const [inputText, setInputText] = useState("")
  const [result, setResult] = useState("")
  const [models, setModels] = useState<ModelOption[]>([])
  const [model, setModel] = useState<number | null>(null)
  const format = "paragraph"

  const [accuracy, setAccuracy] = useState<number>(0)
  const [errors, setErrors] = useState<number>(0)

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadModels = async () => {
      const data = await modelService.getSpellCheckModels()
      setModels(data)
      setModel(data[0]?.id ?? null)
    }

    loadModels()
  }, [])

  const handleSpellCheck = async () => {
    if (!inputText.trim() || model === null) return

    try {
      setLoading(true)
      setError(null)

      const res = await spellCheckService.checkText({
        text: inputText,
        model_id: model,
      })

      setResult(res.corrected_text)
      setAccuracy(res.accuracy ?? 0)
      setErrors(res.errors ?? 0)
    } catch (err) {
      setError("មានបញ្ហាក្នុងការតភ្ជាប់ទៅម៉ាស៊ីនមេ")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <HeroTitle title="ឧបករណ៍ពិនិត្យអក្ខរាវិរុទ្ធ" />

      {/* Two-column layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {/* LEFT SIDE – INPUT */}
        <div className="bg-white rounded-xl shadow p-4 flex flex-col h-full">
            {/* Top content */}
            <div className="space-y-4 flex-1">
                <TextInputCard
                value={inputText}
                onChange={setInputText}
                onClear={() => {
                    setInputText("")
                    setResult("")
                }}
                />

                <SelectField
                  label="ម៉ូឌែល"
                  value={model?.toString() ?? ""}
                  onChange={(value) => setModel(Number(value))}
                  options={models.map((m) => ({
                    label: m.name,
                    value: m.id.toString(),
                  }))}
                />
            </div>

            {/* Bottom buttons */}
            <div className="flex justify-between pt-4">
              {/* Paste */}
              <ActionButton
                label="បិទភ្ជាប់"
                isActive={true}
                onClick={async () => {
                  const text = await navigator.clipboard.readText()
                  setInputText(text)
                }}
              />

              {/* Execute */}
              <ActionButton
                label={loading ? "កំពុងពិនិត្យ..." : "ពិនិត្យអក្ខរាវិរុទ្ធ"}
                isActive={inputText.length > 0 && !loading}
                onClick={handleSpellCheck}
              />
            </div>
        </div>

        {/* RIGHT SIDE – RESULT */}
        <div className="bg-white rounded-xl shadow p-4 flex flex-col h-full">
            {/* Top content */}
            <div className="flex-1">
                <ResultCard
                title="អត្ថបទបន្ទាប់ពីកែអក្ខរាវិរុទ្ធ"
                format={format}
                paragraphText={result}
                bulletItems={result ? result.split("។").filter(Boolean) : []}
                />
                {error && (
                  <p className="text-sm text-red-600 mt-2">
                    {error}
                  </p>
                )}
            </div>

            {/* Bottom button (same row level as left buttons) */}
            <div className="flex justify-end pt-4">
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
          {
            label: "អក្សរដើម",
            value: `${inputText.length} អក្សរ`,
          },
          {
            label: "អក្សរកែ",
            value: `${errors} អក្សរ`,
          },
          {
            label: "ភាពត្រឹមត្រូវ",
            value: `${accuracy}%`,
          },
        ]}
      />
    </div>
  )
}
