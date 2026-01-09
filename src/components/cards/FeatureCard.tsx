interface FeatureCardProps {
  title: string
  description: string
  icon: string
  href?: string
}

export default function FeatureCard({
  title,
  description,
  icon,
  href,
}: FeatureCardProps) {
  return (
    <div className="relative bg-white rounded-xl shadow hover:shadow-md transition p-4">
      {/* External link icon */}
      {href && (
        <a
          href={href}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          ↗
        </a>
      )}

      <img src={icon} alt={title} className="w-14 h-14 mb-3" />

      <h3 className="font-semibold text-sm mb-1">{title}</h3>
      <p className="text-xs text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  )
}
