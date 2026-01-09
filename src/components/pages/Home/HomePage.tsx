import HeroSection from "../../hero/HeroSection"
import FeatureSection from "../../cards/FeatureSection"
import InfoBox from "../../info/InfoBox"

const aiModels = [
  {
    title: "AI Assistant",
    description: "ជំនួយឆ្លាតវៃសម្រាប់សិក្សា",
    icon: "/icons/chatgpt.png",
    href: "#",
  },
  // repeat 4 items
]

const tools = [
  {
    title: "Whale Tool",
    description: "ឧបករណ៍ជំនួយផ្សេងៗ",
    icon: "/icons/whale.png",
    href: "#",
  },
]

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeatureSection title="អត្ថប្រយោជន៍នៃ AI" items={aiModels} />
      <FeatureSection title="ឧបករណ៍ផ្សេងៗ" items={tools} />
      <InfoBox />
    </>
  )
}
