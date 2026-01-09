export default function InputPanel() {
  return (
    <section className="bg-white rounded-2xl shadow p-6">
      <label className="font-semibold mb-2 block">Khmer Text</label>
      <textarea
        rows={6}
        className="w-full border rounded-xl p-4"
        placeholder="បញ្ចូលអត្ថបទខ្មែរ..."
      />
      <div className="flex justify-between mt-4">
        <button className="bg-primary text-white px-6 py-2 rounded-lg">
          Summarize
        </button>
        <button className="border px-4 py-2 rounded-lg">
          Upload File
        </button>
      </div>
    </section>
  )
}
