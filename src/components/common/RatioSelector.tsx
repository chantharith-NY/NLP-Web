import OptionCard from "./OptionCard"
import ButtonGroup from "./ButtonGroup"

interface RatioSelectorProps {
  value: string
  onChange: (value: string) => void
}

export default function RatioSelector({
  value,
  onChange,
}: RatioSelectorProps) {
  return (
    <OptionCard title="អត្រាសង្ខេប">
      <ButtonGroup
        value={value}
        onChange={onChange}
        options={[
          { label: "10%", value: "20%" },
          { label: "20%", value: "20%" },
          { label: "30%", value: "30%" },
          { label: "40%", value: "40%" },
          { label: "50%", value: "50%" },
        ]}
      />
    </OptionCard>
  )
}
