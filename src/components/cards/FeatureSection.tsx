import FeatureCard from "./FeatureCard"

interface FeatureSectionProps {
  title: string
  items: any[]
}

export default function FeatureSection({
  title,
  items,
}: FeatureSectionProps) {
  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      <h2 className="text-xl font-bold mb-6">{title}</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((item, index) => (
          <FeatureCard key={index} {...item} />
        ))}
      </div>
    </section>
  )
}
