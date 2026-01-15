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
    <div
      className="
        relative
        bg-white
        rounded-2xl
        overflow-hidden
        w-60
        h-68
        flex flex-col
        transition
        shadow-[4px_6px_16px_rgba(0,0,0,0.10)]
        hover:shadow-[6px_10px_20px_rgba(0,0,0,0.16)]
      "
    >
      {/* Image */}
      <div className="relative h-40">
        <img
          src={icon}
          alt={title}
          className="w-full h-full object-cover"
        />

        {href && (
          <a
            href={href}
            className="
              absolute top-3 right-3
              w-9 h-9
              rounded-full
              bg-white
              flex items-center justify-center
              shadow
              hover:bg-gray-100
            "
          >
            ↗
          </a>
        )}
      </div>

      {/* Content */}
      <div className="py-1 px-2 flex flex-col flex-1">
        <p className="font-moul text-[16px] text-[#6E8122] font-semibold mb-1">
          {title}
        </p>

        <p className="font-battambang text-[14px] text-gray-700 leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  )
}