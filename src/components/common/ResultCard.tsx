import { useState } from "react"

export default function ResultCard() {
  const [format, setFormat] = useState<"paragraph" | "bullet">("paragraph")

  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h4 className="font-semibold mb-2">លទ្ធផលសង្ខេប</h4>

      <div className="flex gap-2 mb-3">
        <button
          onClick={() => setFormat("paragraph")}
          className={`
            px-3 py-1 rounded-md text-sm border
            ${format === "paragraph"
                  ? "bg-[#003B77] text-white border-black"
                  : "hover:bg-[#025FBD] hover:text-white"}
          `}
        >
          Paragraph
        </button>

        <button
          onClick={() => setFormat("bullet")}
          className={`
            px-3 py-1 rounded-md text-sm border
            ${format === "bullet"
                  ? "bg-[#003B77] text-white border-black"
                  : "hover:bg-[#025FBD] hover:text-white"}
          `}
        >
          Bullet
        </button>
      </div>

      {format === "paragraph" ? (
        <p className="text-sm leading-relaxed text-gray-700">
          Manchester United បានយកឈ្នះ Atalanta ក្នុងការប្រកួត...
        </p>
      ) : (
        <ul className="list-disc pl-5 text-sm text-gray-700">
          <li>Manchester United ឈ្នះ Atalanta</li>
          <li>ការប្រកួតមានភាពតានតឹង</li>
          <li>អ្នកគាំទ្រពេញចិត្ត</li>
        </ul>
      )}
    </div>
  )
}
