import { Routes, Route } from "react-router-dom"
import AppLayout from "./layouts/AppLayout"

import HomePage from "./components/pages/Home/HomePage"
import About from "./components/pages/AboutUS/About"
import TextSummaryPage from "./components/pages/TextSummary/TextSummaryPage"

export default function App() {
  return (
    <Routes>
      {/* Main layout */}
      <Route element={<AppLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/tools/text-summary" element={<TextSummaryPage />} />
      </Route>
    </Routes>
  )
}
