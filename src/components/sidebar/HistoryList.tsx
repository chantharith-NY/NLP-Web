import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import type { HistoryItem } from "../../types/history"

export default function HistoryList() {
  const [items, setItems] = useState<HistoryItem[]>([])

  useEffect(() => {
    const raw = localStorage.getItem("rac_history")
    setItems(raw ? JSON.parse(raw) : [])
  }, [])

  if (items.length === 0) {
    return (
      <p className="text-sm text-white/60 italic">
        មិនមានប្រវត្តិ
      </p>
    )
  }

  return (
    <div className="space-y-2">
      {items.map(item => (
        <Link
          key={item.id}
          to={item.route}
          className="
            block
            px-2 py-1
            rounded-md
            text-sm
            text-white/90
            hover:bg-white/10
            transition
          "
        >
          <p className="font-medium">
            {item.title}
          </p>
          <p className="text-xs text-white/60 truncate">
            {item.preview}
          </p>
        </Link>
      ))}
    </div>
  )
}
