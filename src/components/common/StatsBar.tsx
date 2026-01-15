interface StatItem {
  label: string
  value: string
}

interface StatsBarProps {
  stats: StatItem[]
}

export default function StatsBar({ stats }: StatsBarProps) {
  return (
    <div className="bg-gray-50 rounded-xl p-4 grid grid-cols-3 text-center text-sm">
      {stats.map((stat, index) => (
        <div key={index}>
          <p className="font-semibold">{stat.value}</p>
          <p className="text-gray-500">{stat.label}</p>
        </div>
      ))}
    </div>
  )
}
