import HeroSection from "../../hero/HeroSection"
import FeatureSection from "../../cards/FeatureSection"
import InfoBox from "../../info/InfoBox"

const aiModels = [
  {
    title: "ត្រួតពិនិត្យអក្ខរាវិរុទ្ធខ្មែរ",
    description: "ត្រួតពិនិត្យអក្ខរាវិរុទ្ធខ្មែរដោយប្រើ ម៉ូដែល AI កម្រិតខ្ពស់។ ទទួលបានសេចក្តីសង្ខេបអត្ថបទត្រឹមត្រូវ ក្នុងរយៈពេល ត្រឹមតែប៉ុន្មានវិនាទី។",
    icon: "/icon/chatgpt-icon.png",
    href: "/tools/spell-check",
  },
  {
    title: "សង្ខេបអត្ថបទខ្មែរ",
    description: "សង្ខេបអត្ថបទព័ត៌មាននិងអត្ថបទវែងជាភាសាខ្មែរភ្លាមៗដោយប្រើ ម៉ូដែល AI កម្រិតខ្ពស់។ ទទួលបានសេចក្តីសង្ខេបអត្ថបទត្រឹមត្រូវ ក្នុងរយៈពេល ត្រឹមតែប៉ុន្មានវិនាទី។",
    icon: "/icon/chatgpt-icon.png",
    href: "/tools/text-summary",
  },
  {
    title: "សង្ខេបអត្ថបទខ្មែរ",
    description: "សង្ខេបអត្ថបទព័ត៌មាននិងអត្ថបទវែងជាភាសាខ្មែរភ្លាមៗដោយប្រើ ម៉ូដែល AI កម្រិតខ្ពស់។ ទទួលបានសេចក្តីសង្ខេបអត្ថបទត្រឹមត្រូវ ក្នុងរយៈពេល ត្រឹមតែប៉ុន្មានវិនាទី។",
    icon: "/icon/chatgpt-icon.png",
    href: "#",
  },
  {
    title: "សង្ខេបអត្ថបទខ្មែរ",
    description: "សង្ខេបអត្ថបទព័ត៌មាននិងអត្ថបទវែងជាភាសាខ្មែរភ្លាមៗដោយប្រើ ម៉ូដែល AI កម្រិតខ្ពស់។ ទទួលបានសេចក្តីសង្ខេបអត្ថបទត្រឹមត្រូវ ក្នុងរយៈពេល ត្រឹមតែប៉ុន្មានវិនាទី។",
    icon: "/icon/chatgpt-icon.png",
    href: "#",
  },
]

const tools = [
  {
    title: "ត្រួតពិនិត្យអក្ខរាវិរុទ្ធខ្មែរ",
    description: "ត្រួតពិនិត្យអក្ខរាវិរុទ្ធខ្មែរដោយប្រើ ម៉ូដែល AI កម្រិតខ្ពស់។ ទទួលបានសេចក្តីសង្ខេបអត្ថបទត្រឹមត្រូវ ក្នុងរយៈពេល ត្រឹមតែប៉ុន្មានវិនាទី។",
    icon: "/icon/deepseek-icon.png",
    href: "/tools/spell-check",
  },
  {
    title: "សង្ខេបអត្ថបទខ្មែរ",
    description: "សង្ខេបអត្ថបទព័ត៌មាននិងអត្ថបទវែងជាភាសាខ្មែរភ្លាមៗដោយប្រើ ម៉ូដែល AI កម្រិតខ្ពស់។ ទទួលបានសេចក្តីសង្ខេបអត្ថបទត្រឹមត្រូវ ក្នុងរយៈពេល ត្រឹមតែប៉ុន្មានវិនាទី។",
    icon: "/icon/deepseek-icon.png",
    href: "/tools/text-summary",
  },
  {
    title: "សង្ខេបអត្ថបទខ្មែរ",
    description: "សង្ខេបអត្ថបទព័ត៌មាននិងអត្ថបទវែងជាភាសាខ្មែរភ្លាមៗដោយប្រើ ម៉ូដែល AI កម្រិតខ្ពស់។ ទទួលបានសេចក្តីសង្ខេបអត្ថបទត្រឹមត្រូវ ក្នុងរយៈពេល ត្រឹមតែប៉ុន្មានវិនាទី។",
    icon: "/icon/deepseek-icon.png",
    href: "/tools/summarize",
  },
  {
    title: "សង្ខេបអត្ថបទខ្មែរ",
    description: "សង្ខេបអត្ថបទព័ត៌មាននិងអត្ថបទវែងជាភាសាខ្មែរភ្លាមៗដោយប្រើ ម៉ូដែល AI កម្រិតខ្ពស់។ ទទួលបានសេចក្តីសង្ខេបអត្ថបទត្រឹមត្រូវ ក្នុងរយៈពេល ត្រឹមតែប៉ុន្មានវិនាទី។",
    icon: "/icon/deepseek-icon.png",
    href: "/tools/summarize",
  },
]

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeatureSection title="ម៉ូដែល AI កម្រិតខ្ពស់របស់យើង" items={aiModels} />
      <FeatureSection title="ឧបករណ៍បញ្ញាសិប្បនិម្មិតផ្សេងៗទៀត" items={tools} />
      <InfoBox />
    </>
  )
}
