import { X } from "lucide-react"

interface TextInputCardProps {
  title?: string
  value: string
  placeholder?: string
  onChange: (value: string) => void
  onClear?: () => void
}

export default function TextInputCard({
  title = "Khmer Text",
  value,
  placeholder = "សូមបញ្ចូលអត្ថបទ...",
  onChange,
  onClear,
}: TextInputCardProps) {
  return (
    <div className="bg-white px-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold font-inter text-xl">
          {title}
        </h3>

        {onClear && (
          <X
            className="w-4 h-4 cursor-pointer text-gray-500 hover:text-red-500"
            onClick={onClear}
          />
        )}
      </div>

      {/* Textarea */}
      <textarea
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-40 resize-none border rounded-md p-3 text-sm outline-none focus:ring-2 focus:ring-blue-300"
      />

      {/* Character count */}
      <div className="text-right text-xs text-gray-400 mt-1">
        {value.length} characters
      </div>
    </div>
  )
}
