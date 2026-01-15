import { Cpu } from "lucide-react"
import { useState } from "react"
import SelectField from "../ui/SelectField"
import OptionCard from "./OptionCard"
import type {
  SummaryModel,
  SummaryRatio,
  SummaryFormat,
} from "../../types/types"

export default function SummaryOptions() {
  const [model, setModel] = useState<SummaryModel>("khmer-t5")
  const [ratio, setRatio] = useState<SummaryRatio>("30%")
  const [format, setFormat] = useState<SummaryFormat>("paragraph")

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Model */}
      <OptionCard>
        <SelectField
          label="ម៉ូឌែល"
          value={model}
          onChange={setModel}
          icon={<Cpu size={16} />}
          options={[
            { label: "Khmer T5", value: "khmer-t5" },
            { label: "mT5", value: "mt5" },
          ]}
        />
      </OptionCard>

      {/* Ratio */}
      <OptionCard>
        <SelectField
          label="អត្រាសង្ខេប"
          value={ratio}
          onChange={setRatio}
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
          onChange={setFormat}
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
