import TextInputCard from "../../common/TextInputCard"
import SummaryOptions from "../../common/SummaryOptions"
import ActionButton from "../../common/ActionButton"
import ResultCard from "../../common/ResultCard"
import StatsBar from "../../common/StatsBar"

export default function TextSummaryPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <TextInputCard />
      <SummaryOptions />
      <ActionButton />
      <ResultCard />
      <StatsBar />
    </div>
  )
}
