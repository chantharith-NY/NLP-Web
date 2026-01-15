import OptionCard from "./OptionCard"
import ButtonGroup from "./ButtonGroup"

interface FormatSelectorProps {
  value: string
  onChange: (value: string) => void
}

export default function FormatSelector({
  value,
  onChange,
}: FormatSelectorProps) {
  return (
    <OptionCard title="ទម្រង់">
      <ButtonGroup
        value={value}
        onChange={onChange}
        options={[
          { label: "Paragraph", value: "paragraph" },
          { label: "Bullet", value: "bullet" },
          { label: "Table", value: "table" },
        ]}
      />
    </OptionCard>
  )
}
