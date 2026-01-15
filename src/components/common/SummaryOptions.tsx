import { Cpu } from "lucide-react"
import { useState } from "react"
import SelectField from "../ui/SelectField"
import OptionCard from "./OptionCard"
import RatioSelector from "./RatioSelector"
import FormatSelector from "./FormatSelector"

export default function SummaryOptions() {
  const [model, setModel] = useState("khmer-t5")
  const [ratio, setRatio] = useState("30%")
  const [format, setFormat] = useState("paragraph")

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
      <RatioSelector value={ratio} onChange={setRatio} />

      {/* Format */}
      <FormatSelector value={format} onChange={setFormat} />
    </div>
  )
}
