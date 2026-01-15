export default function AboutMainSection() {
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
          រាជបណ្ឌិត្យសភាកម្ពុជា បង្ហាញឧបករណ៍ដំណើរការភាសាដ៏ទូលំទូលាយមួយ ដែលដំណើរការដោយបញ្ញាសិប្បនិម្មិត <span className="font-sans">(AI)</span>។ គម្រោងនេះត្រូវបានរចនាឡើងដើម្បីបង្កើនឧត្តមភាពសិក្សា និងការទំនាក់ទំនងវិជ្ជាជីវៈ។ 
          វេទិកាឆ្លាតវៃរបស់យើងជួយអ្នកស្រាវជ្រាវ និស្សិត និងអ្នកជំនាញឱ្យសម្រេចបាននូវភាពច្បាស់លាស់ និងភាពជាក់លាក់នៅក្នុងការសរសេររបស់ពួកគេ។
        </p>

        <button className="bg-[#6E8122] text-white mt-5 px-5 py-1.5 rounded-full text-sm shadow-md">
          ចាប់ផ្តើម →
        </button>
      </section>

      {/* Feature Cards */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold text-center mb-10">
          អត្ថប្រយោជន៍នៃការប្រើប្រាស់ប្រព័ន្ធ
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="border rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-green-700 font-semibold text-lg mb-3">
              📘 សរសេរអត្ថបទស្រាវជ្រាវ
            </h3>

            <p className="text-gray-600 mb-4">
              ជួយក្នុងការសរសេរ និងកែសម្រួលអត្ថបទស្រាវជ្រាវ
              ដោយប្រើ AI ដើម្បីធានាគុណភាព និងភាពត្រឹមត្រូវ។
            </p>

            <ul className="space-y-2 text-sm text-gray-700">
              <li>✔️ ជំនួយ AI ឆ្លាតវៃ</li>
              <li>✔️ កាត់បន្ថយពេលវេលា</li>
              <li>✔️ កែសម្រួលអត្ថបទ</li>
            </ul>

            <button className="mt-6 w-full py-2 rounded-full bg-green-700 text-white hover:bg-green-800 transition">
              ប្រើប្រាស់ប្រព័ន្ធនេះ
            </button>
          </div>

          {/* Card 2 */}
          <div className="border rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-green-700 font-semibold text-lg mb-3">
              🅰️ កែសម្រួលភាសា
            </h3>

            <p className="text-gray-600 mb-4">
              កែសម្រួលអក្ខរាវិរុទ្ធ វេយ្យាករណ៍
              និងសម្រួលភាសាឱ្យមានភាពច្បាស់លាស់។
            </p>

            <ul className="space-y-2 text-sm text-gray-700">
              <li>✔️ កែអក្ខរាវិរុទ្ធ</li>
              <li>✔️ កែវេយ្យាករណ៍</li>
              <li>✔️ បង្កើនភាពច្បាស់</li>
            </ul>

            <button className="mt-6 w-full py-2 rounded-full bg-green-700 text-white hover:bg-green-800 transition">
              ចាប់ផ្តើមប្រើ
            </button>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="bg-blue-50 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-blue-800 mb-4">
            📘 អំពីប្រព័ន្ធ
          </h3>

          <p className="text-gray-700 max-w-4xl mx-auto leading-relaxed">
            ប្រព័ន្ធនេះត្រូវបានបង្កើតឡើងដើម្បីគាំទ្រការសិក្សា
            ការស្រាវជ្រាវ និងការសរសេរផ្លូវការនៅក្នុងស្ថាប័នអប់រំ
            ដោយផ្តល់នូវជំនួយឆ្លាតវៃ សុវត្ថិភាព និងទំនុកចិត្ត។
          </p>

          <div className="flex justify-center gap-10 mt-6 text-sm text-gray-700">
            <span>🛡️ សុវត្ថិភាព</span>
            <span>⚡ ប្រសិទ្ធភាព</span>
            <span>📖 គាំទ្រការសិក្សា</span>
          </div>
        </div>
      </section>
    </main>
  )
}
