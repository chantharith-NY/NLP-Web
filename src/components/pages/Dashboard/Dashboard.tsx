import InputPanel from "./InputPanel"
import OptionsPanel from "./OptionsPanel"
import ResultPanel from "./ResultPanel"
import StatsPanel from "./StatsPanel"

export default function Dashboard() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <InputPanel />
      <OptionsPanel />
      <ResultPanel />
      <StatsPanel />
    </div>
  )
}
