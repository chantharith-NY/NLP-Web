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
    // TODO: call spell-check API
    setResult("នេះគឺជាអត្ថបទដែលបានកែអក្ខរាវិរុទ្ធ")
  }

  // Statistics
  const originalCharCount = inputtext.length
  const summarizedCharCount = result.length

  const accuracy =
    originalCharCount > 0
      ? Math.round((summarizedCharCount / originalCharCount) * 100)
      : 0



  return (
    <div className="max-w-5xl mx-auto space-y-6">

      {/* Hero Title Section */}
      <HeroTitle 
        title="ឧបករណ៍បញ្ញាសិប្បនិម្មិតសង្ខេបអត្ថបទ"
      />

      {/* Input Section */}
      <div className="rounded-xl shadow-md px-2 py-6">
        <TextInputCard
          value={inputtext}
          onChange={setInputText}
          onClear={() => setInputText("")}
        />
        <div className="flex justify-between px-4 mt-4">
          <ActionButton
            label="សង្ខេបអត្ថបទ"
            isActive={inputtext.length > 0}
            onClick={handleTextSummarize}
          />
          <ActionButton
            label="ចម្លងលទ្ធផល"
            isActive={result.length > 0}
            onClick={() => {
              navigator.clipboard.writeText(result)
            }}
          />
        </div>
      </div>
      {/* Summary Options Section */}
      <SummaryOptions />

      {/* Result Section */}
      <div className="space-y-3">
        {/* Format Switch */}
        <div className="flex gap-2">
          <ActionButton
            label="Paragraph"
            isActive={format === "paragraph"}
            onClick={() => setFormat("paragraph")}
          />

          <ActionButton
            label="Bullet"
            isActive={format === "bullet"}
            onClick={() => setFormat("bullet")}
          />
        </div>

        {/* Result Card */}
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

      {/* Stats Bar Section */}
      <StatsBar
        stats={[
          {
            label: "អក្សរដើម",
            value: `${originalCharCount} អក្សរ`,
          },
          {
            label: "អក្សរសង្ខេប",
            value: `${summarizedCharCount} អក្សរ`,
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
