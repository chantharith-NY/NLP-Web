interface FeatureCardProps {
  title: string
  description: string
  points: string[]
  actionLabel: string
  onAction?: () => void
}

export default function FeatureCard({
  title,
  description,
  points,
  actionLabel,
  onAction,
}: FeatureCardProps) {
  return (
    <div className="border rounded-xl p-6 shadow-sm hover:shadow-md transition flex flex-col h-full">
      {/* Title */}
      <p className="text-[#8BAD13] font-semibold text-lg mb-3 font-moul">
        {title}
      </p>

      {/* Description */}
      <p className="text-gray-600 mb-4">
        {description}
      </p>

      {/* Point list */}
      <ul className="space-y-2 text-sm text-gray-700">
        {points.map((point, index) => (
          <li key={index}>✔️ {point}</li>
        ))}
      </ul>

      {/* Action button (always bottom) */}
      <div className="mt-auto mx-auto">
        <button
            onClick={onAction}
            className="
                 w-68 py-2 rounded-full
                bg-[#8BAD13] text-white font-medium
                transition-all duration-200 ease-out
                hover:bg-[#6E8122]
                hover:shadow-md
                hover:-translate-y-px
                active:translate-y-0
                active:shadow-sm
                focus:outline-none
                focus:ring-2 focus:ring-[#8BAD13]/40
            "
            >
            {actionLabel}
        </button>
      </div>

    </div>
  )
}
