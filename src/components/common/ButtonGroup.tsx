import ActionButton from "./ActionButton"

interface Option {
  label: string
  value: string
}

interface ButtonGroupProps {
  value: string
  options: Option[]
  onChange: (value: string) => void
}

export default function ButtonGroup({
  value,
  options,
  onChange,
}: ButtonGroupProps) {
  return (
    <div className="flex gap-2">
      {options.map((opt) => (
        <ActionButton
          key={opt.value}
          label={opt.label}
          isActive={value === opt.value}
          onClick={() => onChange(opt.value)}
        />
      ))}
    </div>
  )
}
