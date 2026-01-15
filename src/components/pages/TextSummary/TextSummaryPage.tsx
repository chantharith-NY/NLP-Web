import { useState } from "react"
import TextInputCard from "../../common/TextInputCard"
import SummaryOptions from "../../common/SummaryOptions"
import ActionButton from "../../common/ActionButton"
import ResultCard from "../../common/ResultCard"
import StatsBar from "../../common/StatsBar"
import HeroTitle from "../../common/HeroTitle"

export default function TextSummaryPage() {
  const [inputtext, setInputText] = useState("")
  const [result, setResult] = useState("")
  const [format, setFormat] = useState<"paragraph" | "bullet">("paragraph")

  const handleTextSummarize = () => {
    // TODO: call summary API
    setResult("នេះគឺជាអត្ថបទដែលបានសង្ខេប")
  }

  // Statistics (character-based, consistent)
  const originalCharCount = inputtext.length
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
              value={inputtext}
              onChange={setInputText}
              onClear={() => {
                setInputText("")
                setResult("")
              }}
            />

            <SummaryOptions />
          </div>

          {/* Bottom button */}
          <div className="pt-4 flex justify-start">
            <ActionButton
              label="សង្ខេបអត្ថបទ"
              isActive={inputtext.length > 0}
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
              format={format}
              paragraphText={result}
              bulletItems={
                result
                  ? [
                      "Manchester United ឈ្នះ Atalanta",
                      "ការប្រកួតមានភាពតានតឹង",
                      "អ្នកគាំទ្រពេញចិត្ត",
                    ]
                  : []
              }
            />
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
