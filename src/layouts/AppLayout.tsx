import { useState } from "react"
import type { ReactNode } from "react"
import Sidebar from "./Sidebar"
import Header from "./Header"

export default function AppLayout({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* ===== HEADER ===== */}
      <div
        className={`
          absolute top-0 left-0 w-full z-30
          transform transition-all duration-300 ease-out
          ${sidebarOpen
            ? "scale-95 opacity-0 pointer-events-none"
            : "scale-100 opacity-100"}
        `}
      >
        <Header onMenuClick={() => setSidebarOpen(true)} />
      </div>

      {/* ===== SIDEBAR ===== */}
      <div
        className={`
          absolute top-0 left-0 z-40
          transform transition-all duration-300 ease-out
          ${sidebarOpen
            ? "scale-100 opacity-100"
            : "scale-95 opacity-0 pointer-events-none"}
        `}
      >
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <main
        className={`
          transition-all duration-300 ease-out
          ${sidebarOpen ? "mt-[108px] ml-[320px]" : "mt-[108px]"}
          p-6 min-h-screen
        `}
      >
        {children}
      </main>
    </div>
  )
}
