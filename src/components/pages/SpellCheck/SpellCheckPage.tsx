import { useState } from "react"
import { Cpu, ClipboardPaste } from "lucide-react"

import TextInputCard from "../../common/TextInputCard"
import ActionButton from "../../common/ActionButton"
import ResultCard from "../../common/ResultCard"
import StatsBar from "../../common/StatsBar"
import HeroTitle from "../../common/HeroTitle"
import SelectField from "../../ui/SelectField"

export default function SpellCheckPage() {
  const [inputText, setInputText] = useState("")
  const [result, setResult] = useState("")
  const [model, setModel] = useState("khmer-spell-v1")
  const format = "paragraph"

  const handleSpellCheck = () => {
    // TODO: call spell-check API
    setResult(inputText) // mock result
  }

  const originalCharCount = inputText.length
  const correctedCharCount = result.length

  const accuracy =
    originalCharCount > 0
      ? Math.round((correctedCharCount / originalCharCount) * 100)
      : 0

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
                value={model}
                onChange={setModel}
                options={[
                    { label: "Khmer Spell v1", value: "khmer-spell-v1" },
                ]}
                />
            </div>

            {/* Bottom buttons */}
            <div className="flex justify-between pt-4">
                <ActionButton
                label="បិទភ្ជាប់"
                isActive={true}
                onClick={async () => {
                    const text = await navigator.clipboard.readText()
                    setInputText(text)
                }}
                />

                <ActionButton
                label="ពិនិត្យអក្ខរាវិរុទ្ធ"
                isActive={inputText.length > 0}
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
            value: `${originalCharCount} អក្សរ`,
          },
          {
            label: "អក្សរកែ",
            value: `${correctedCharCount} អក្សរ`,
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
