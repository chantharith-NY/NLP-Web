import { useState, useEffect } from "react"

import TextInputCard from "../../common/TextInputCard"
import ActionButton from "../../common/ActionButton"
import ResultCard from "../../common/ResultCard"
import StatsBar from "../../common/StatsBar"
import HeroTitle from "../../common/HeroTitle"
import SelectField from "../../ui/SelectField"

import { useSpellCheck } from "../../../hooks/useSpellCheck"
import type { ModelOption } from "../../../types/model"
import { modelService } from "../../../services/model.service"

export default function SpellCheckPage() {
  const [inputText, setInputText] = useState("")
  const [models, setModels] = useState<ModelOption[]>([])
  const [model, setModel] = useState<number | null>(null)
  const format = "paragraph"

  const {
    run,
    reset,
    loading,
    result,
    executionTimeMs,
    error,
    accuracy,
    errors,
  } = useSpellCheck()

  useEffect(() => {
    const loadModels = async () => {
      const data = await modelService.getSpellCheckModels()
      setModels(data)
      setModel(data[0]?.id ?? null)
    }

    loadModels()
  }, [])

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
                reset()
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
              onClick={() => {
                if (!model) return
                run(inputText, model)
              }}
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
              executionTimeMs={executionTimeMs}
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
