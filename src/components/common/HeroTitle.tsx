type HeroTitleProps = {
  title: string
  subtitle?: string
  align?: "left" | "center"
}

export default function HeroTitle({
  title,
  subtitle,
  align = "center",
}: HeroTitleProps) {
  return (
    <div
      className={`w-full ${
        align === "center" ? "text-center" : "text-left"
      }`}
    >
      <p className="text-xl md:text-3xl font-bold text-gray-900 leading-tight font-moul underline">
        {title}
      </p>

      {subtitle && (
        <p className="mt-3 text-base md:text-lg text-gray-600 font-moul">
          {subtitle}
        </p>
      )}
    </div>
  )
}
