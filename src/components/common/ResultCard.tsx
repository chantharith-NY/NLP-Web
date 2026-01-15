import { X } from "lucide-react"

interface ResultCardProps {
  title?: string
  format: "paragraph" | "bullet"
  paragraphText?: string
  bulletItems?: string[]
  onClear?: () => void
}

export default function ResultCard({
  title = "លទ្ធផល",
  format,
  paragraphText = "",
  bulletItems = [],
  onClear,
}: ResultCardProps) {
  const isEmpty = !paragraphText

  return (
    <div className="bg-white px-4">
      {/* Header – SAME as TextInputCard */}
      <div className="flex items-center justify-between mb-2">
        <p className="font-semibold font-moul text-xl">
          {title}
        </p>

        {onClear && (
          <X
            className="w-4 h-4 cursor-pointer text-gray-500 hover:text-red-500"
            onClick={onClear}
          />
        )}
      </div>

      {/* Content box – SAME visual weight as textarea */}
      <div className="w-full min-h-40 border rounded-md p-3 text-sm text-gray-700">
        {isEmpty ? (
          <p className="text-gray-400 italic">
            លទ្ធផលនឹងបង្ហាញនៅទីនេះ
          </p>
        ) : format === "paragraph" ? (
          <p className="leading-relaxed">
            {paragraphText}
          </p>
        ) : (
          <ul className="list-disc pl-5 space-y-1">
            {bulletItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
