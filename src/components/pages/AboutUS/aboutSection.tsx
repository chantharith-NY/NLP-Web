import FeatureCard from "../../common/FeatureCard"
import InfoBox from "../../info/InfoBox"

export default function AboutMainSection() {
  const features = [
    {
      title: "សរសេរអត្ថបទស្រាវជ្រាវ",
      description:
        "ជួយក្នុងការសរសេរ និងកែសម្រួលអត្ថបទស្រាវជ្រាវ ដោយប្រើ AI ដើម្បីធានាគុណភាព និងភាពត្រឹមត្រូវ។",
      points: [
        "ជំនួយ AI ឆ្លាតវៃ",
        "កាត់បន្ថយពេលវេលា",
        "កែសម្រួលអត្ថបទ",
      ],
      actionLabel: "ប្រើប្រាស់ប្រព័ន្ធនេះ",
    },
    {
      title: "កែសម្រួលភាសា",
      description:
        "កែសម្រួលអក្ខរាវិរុទ្ធ វេយ្យាករណ៍ និងសម្រួលភាសាឱ្យមានភាពច្បាស់លាស់។",
      points: [
        "កែអក្ខរាវិរុទ្ធ",
        "កែវេយ្យាករណ៍",
        "បង្កើនភាពច្បាស់",
      ],
      actionLabel: "ចាប់ផ្តើមប្រើ",
    },
  ]

  return (
    <main className="w-full bg-white">
      {/* Hero Section */}
      <section className="max-w-6xl px-6 py-16">
        <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#ABCA2C]/30 text-[#4C5918] text-sm font-medium font-sans">
          ⚡ Powered by Advanced AI Technology
        </span>

        <p className="mt-6 text-3xl md:text-4xl font-bold text-gray-900 leading-tight font-moul">
          អភិវឌ្ឍសំណេររបស់អ្នកជាមួយ <span className="font-sans">AI</span>
        </p>

        <p className="mt-4 text-black/70 leading-relaxed font-battambang text-lg tracking-wide">
          រាជបណ្ឌិត្យសភាកម្ពុជា បង្ហាញឧបករណ៍ដំណើរការភាសាដ៏ទូលំទូលាយមួយ
          ដែលដំណើរការដោយបញ្ញាសិប្បនិម្មិត (AI)។
          វេទិកាឆ្លាតវៃរបស់យើងជួយអ្នកស្រាវជ្រាវ និស្សិត
          និងអ្នកជំនាញឱ្យសម្រេចបាននូវភាពច្បាស់លាស់
          និងភាពជាក់លាក់នៅក្នុងការសរសេររបស់ពួកគេ។
        </p>

        <button className="bg-[#6E8122] text-white mt-5 px-5 py-1.5 rounded-full text-sm shadow-md hover:bg-[#8BAD13] transition font-battambang">
          ចាប់ផ្តើម →
        </button>
      </section>

      {/* Feature Cards */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <p className="text-2xl font-bold text-center mb-10 font-moul">
          អត្ថប្រយោជន៍នៃការប្រើប្រាស់ប្រព័ន្ធ
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              points={feature.points}
              actionLabel={feature.actionLabel}
            />
          ))}
        </div>
      </section>

      {/* Information Section */}
      <InfoBox />
    </main>
  )
}
