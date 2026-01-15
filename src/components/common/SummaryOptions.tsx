// import { Cpu } from "lucide-react"
import SelectField from "../ui/SelectField"
import OptionCard from "./OptionCard"

import type { SummaryRatio, SummaryFormat } from "../../types/summarize"
import type { ModelOption } from "../../types/model"

interface SummaryOptionsProps {
  models: ModelOption[]

  model: number | null
  ratio: SummaryRatio
  format: SummaryFormat

  onModelChange: (value: number) => void
  onRatioChange: (value: SummaryRatio) => void
  onFormatChange: (value: SummaryFormat) => void
}

export default function SummaryOptions({
  models,
  model,
  ratio,
  format,
  onModelChange,
  onRatioChange,
  onFormatChange,
}: SummaryOptionsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Model */}
      <OptionCard>
        <SelectField
          label="ម៉ូឌែល"
          value={model?model.toString():""}
          onChange={(value) => onModelChange(Number(value))}
          // icon={<Cpu size={16} />}
          options={models.map((m) => ({
            label: m.name,
            value: m.id.toString(),
          }))}
        />
      </OptionCard>

      {/* Ratio */}
      <OptionCard>
        <SelectField
          label="អត្រាសង្ខេប"
          value={ratio}
          onChange={onRatioChange}
          options={[
            { label: "10%", value: "10%" },
            { label: "20%", value: "20%" },
            { label: "30%", value: "30%" },
            { label: "40%", value: "40%" },
            { label: "50%", value: "50%" },
          ]}
        />
      </OptionCard>

      {/* Format */}
      <OptionCard>
        <SelectField
          label="ទម្រង់"
          value={format}
          onChange={onFormatChange}
          options={[
            { label: "អត្ថបទ", value: "paragraph" },
            { label: "ចំណុច", value: "bullet" },
            { label: "តារាង", value: "table" },
          ]}
        />
      </OptionCard>
    </div>
  )
}
