import { Pen } from "lucide-react"

export default function ActionButton() {
  return (
    <button className="w-full bg-blue-900 text-white py-3 rounded-xl flex items-center justify-center gap-2 text-lg">
      <Pen size={18} />
      ចាប់ផ្តើមសង្ខេប
    </button>
  )
}
