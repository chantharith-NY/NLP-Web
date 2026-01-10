import AppLayout from "./layouts/AppLayout"
// import Dashboard from "./components/pages/Dashboard/Dashboard"
import About from "./components/pages/AboutUS/About"
import HomePage from "./components/pages/Home/HomePage"

import { Routes, Route } from "react-router-dom"

export default function App() {
  return (
    <AppLayout>
      <Routes>
        {/* <Route path="/" element={<Dashboard />} /> */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {/* <Dashboard /> */}
    </AppLayout>
  )
}
