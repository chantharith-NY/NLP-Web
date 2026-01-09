export default function OptionsPanel() {
  return (
    <section className="grid grid-cols-3 gap-6">
      <Option title="ម៉ូដែល" />
      <Option title="ភាគរយ" />
      <Option title="របៀប" />
    </section>
  )
}

function Option({ title }: { title: string }) {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <p className="font-semibold mb-2">{title}</p>
      <div className="bg-gray-200 h-8 rounded" />
    </div>
  )
}
