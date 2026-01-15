interface ResultCardProps {
  title?: string
  format: "paragraph" | "bullet"
  paragraphText: string
  bulletItems?: string[]
}

export default function ResultCard({
  title = "លទ្ធផល",
  format,
  paragraphText,
  bulletItems = [],
}: ResultCardProps) {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h4 className="font-semibold mb-2">{title}</h4>

      {format === "paragraph" ? (
        <p className="text-sm leading-relaxed text-gray-700">
          {paragraphText}
        </p>
      ) : (
        <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
          {bulletItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  )
}
