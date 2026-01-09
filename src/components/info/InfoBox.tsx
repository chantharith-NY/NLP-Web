import InfoItem from "./InfoItem"

export default function InfoBox() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="bg-blue-50 rounded-2xl p-8 text-center">
        <h3 className="font-bold text-lg mb-4">អំពីប្រព័ន្ធ</h3>

        <p className="text-sm text-gray-700 max-w-4xl mx-auto">
          ប្រព័ន្ធនេះត្រូវបានបង្កើតឡើងដើម្បីគាំទ្រការសិក្សា
          និងការស្រាវជ្រាវដោយប្រើបច្ចេកវិទ្យា AI
        </p>

        <div className="flex justify-center gap-8 mt-6">
          <InfoItem icon="🛡️" label="សុវត្ថិភាព" />
          <InfoItem icon="⚡" label="ប្រសិទ្ធភាព" />
          <InfoItem icon="📘" label="គាំទ្រការសិក្សា" />
        </div>
      </div>
    </section>
  )
}
