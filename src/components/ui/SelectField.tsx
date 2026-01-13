import type { ReactNode } from "react"
import { useEffect, useRef, useState } from "react"
import { ChevronDown, Check } from "lucide-react"

interface SelectOption {
  label: string
  value: string
}

interface SelectFieldProps {
  label?: string
  value: string
  options: SelectOption[]
  onChange: (value: string) => void

  placeholder?: string
  error?: string
  disabled?: boolean
  icon?: ReactNode
  size?: "sm" | "md" | "lg"
}

export default function SelectField({
  label,
  value,
  options,
  onChange,
  icon,
  placeholder = "Select option",
}: SelectFieldProps) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const selected = options.find((o) => o.value === value)

  // close when click outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  return (
    <div className="relative space-y-1" ref={ref}>
      {label && (
        <label className="font-semibold text-gray-700">
          {label}
        </label>
      )}

      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="
          w-full flex items-center justify-between
          border rounded-md px-3 py-2 text-sm
          bg-white hover:bg-gray-50
          focus:outline-none focus:ring-2 focus:ring-blue-600
        "
      >
        <div className="flex items-center gap-2">
          {icon}
          <span className={selected ? "text-gray-800" : "text-gray-400"}>
            {selected?.label || placeholder}
          </span>
        </div>

        <ChevronDown
          size={16}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div
            className="
            absolute left-0 top-full mt-1
            w-full
            rounded-md
            border
            bg-white
            shadow-lg
            z-50
            overflow-hidden
            "
        >
            {options.map((opt) => {
            const active = value === opt.value

            return (
                <button
                key={opt.value}
                onClick={() => {
                    onChange(opt.value)
                    setOpen(false)
                }}
                className={`
                    w-full flex items-center justify-between
                    px-3 py-2 text-sm text-left
                    transition
                    border-b last:border-b-0

                    ${
                    active
                        ? "bg-[#003B77] text-white"
                        : "bg-white text-gray-700 hover:bg-blue-50"
                    }
                `}
                >
                <span>{opt.label}</span>
                {active && <Check size={14} />}
                </button>
            )
            })}
        </div>
        )}
    </div>
  )
}