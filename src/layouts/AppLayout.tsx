import { useState } from "react"
import { Outlet } from "react-router-dom"
// import type { ReactNode } from "react"
import Sidebar from "./Sidebar"
import Header from "./Header"
import Footer from "./Footer"

export default function AppLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="relative min-h-screen">
      {/* ===== HEADER (FIXED) ===== */}
      <div
        className={`
          fixed top-0 left-0 w-full z-30
          transition-all duration-300 ease-out
          ${sidebarOpen
            ? "scale-95 opacity-0 pointer-events-none"
            : "scale-100 opacity-100"}
        `}
      >
        <Header onMenuClick={() => setSidebarOpen(true)} />
      </div>

      {/* ===== SIDEBAR (FIXED) ===== */}
      <div
        className={`
          fixed top-0 left-0 h-screen z-20
          transition-all duration-300 ease-out
          ${sidebarOpen
            ? "scale-100 opacity-100"
            : "scale-95 opacity-0 pointer-events-none"}
        `}
      >
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      </div>

      {/* ===== CLICK-OUTSIDE OVERLAY ===== */}
      {sidebarOpen && (
        <div
          className="
            fixed inset-y-0 right-0
            left-80 md:left-87.5
            z-35
            bg-transparent
            pointer-events-auto
          "
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* ===== MAIN CONTENT (SCROLLS, DOES NOT CLOSE) ===== */}
      <main
        className={`
            min-h-screen
            transition-all duration-300 ease-out
            ${sidebarOpen ? "ml-80" : ""}
            mt-27
            overflow-y-auto
            relative z-10
        `}
      >
        <div
          className={`
            p-6
          `}
        >
          <Outlet />
        </div>
        
        <Footer />
      </main>

    </div>
  )
}
