import type { ReactNode } from "react"

interface OptionCardProps {
  title?: string
  children: ReactNode
}

export default function OptionCard({ title, children }: OptionCardProps) {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      {title && (
        <p className="font-semibold mb-2 font-battambang">{title}</p>
      )}
      {children}
    </div>
  )
}
