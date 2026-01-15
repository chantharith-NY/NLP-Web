import { Routes, Route, useLocation } from "react-router-dom"
import AppLayout from "./layouts/AppLayout"
import { AnimatePresence } from "framer-motion"

import HomePage from "./components/pages/Home/HomePage"
import About from "./components/pages/AboutUS/About"
import TextSummaryPage from "./components/pages/TextSummary/TextSummaryPage"
import SpellCheckPage from "./components/pages/SpellCheck/SpellCheckPage"

export default function App() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Main layout */}
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/tools/text-summary" element={<TextSummaryPage />} />
          <Route path="/tools/spell-check" element={<SpellCheckPage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}
