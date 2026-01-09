interface InfoItemProps {
  icon: string
  label: string
}

export default function InfoItem({ icon, label }: InfoItemProps) {
  return (
    <div className="flex items-center gap-2 text-sm">
      <span>{icon}</span>
      <span>{label}</span>
    </div>
  )
}
