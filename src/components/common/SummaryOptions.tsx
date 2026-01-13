import { Cpu } from "lucide-react"
import { useState } from "react"
import SelectField from "../ui/SelectField"

export default function SummaryOptions() {
    const [model, setModel] = useState("khmer-t5")
    const [ratio, setRatio] = useState("25%")
    const [format, setFormat] = useState("paragraph")

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

      {/* Model */}
      <div className="bg-white rounded-xl shadow p-4">
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
      </div>

      {/* Ratio */}
      <div className="bg-white rounded-xl shadow p-4">
        <h4 className="font-semibold mb-2">អត្រាសង្ខេប</h4>
        <div className="flex gap-2">
          {["20%", "25%", "30%", "40%", "50%"].map(r => (
            <button
              key={r}
              onClick={() => setRatio(r)}
              className={`
                px-3 py-1 rounded-md border text-sm
                ${ratio === r
                  ? "bg-[#003B77] text-white border-black"
                  : "hover:bg-[#025FBD] hover:text-white"}
              `}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      {/* Format */}
      <div className="bg-white rounded-xl shadow p-4">
        <h4 className="font-semibold mb-2">ទម្រង់</h4>
        <div className="flex gap-2">
          {[
            { label: "Paragraph", value: "paragraph" },
            { label: "Bullet", value: "bullet" },
            { label: "Table", value: "table" },
          ].map(f => (
            <button
              key={f.value}
              onClick={() => setFormat(f.value)}
              className={`
                px-3 py-1 border rounded-md text-sm
                ${format === f.value
                  ? "bg-[#003B77] text-white border-black"
                  : "hover:bg-[#025FBD] hover:text-white"}
              `}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

    </div>
  )
}
