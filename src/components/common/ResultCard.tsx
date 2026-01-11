export default function ResultCard() {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h4 className="font-semibold mb-2">លទ្ធផលសង្ខេប</h4>

      <div className="flex gap-2 mb-3">
        <button className="px-3 py-1 bg-blue-800 text-white rounded-md text-sm">
          Paragraph
        </button>
        <button className="px-3 py-1 border rounded-md text-sm">
          Bullet
        </button>
      </div>

      <p className="text-sm leading-relaxed text-gray-700">
        Manchester United បានយកឈ្នះ Atalanta ក្នុងការប្រកួត...
      </p>
    </div>
  )
}
