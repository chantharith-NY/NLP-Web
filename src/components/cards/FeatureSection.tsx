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
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="font-moul text-3xl font-bold mb-8">
        {title}
      </h2>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <FeatureCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}


