import type { LucideIcon } from "lucide-react"

interface InfoItemProps {
  icon: LucideIcon
  label: string
}

export default function InfoItem({ icon: Icon, label }: InfoItemProps) {
  return (
    <div className="flex items-center gap-2 text-sm">
      <Icon className="w-5 h-5 text-[#005A9C]" />
      <span className="text-base text-wrap">{label}</span>
    </div>
  )
}
