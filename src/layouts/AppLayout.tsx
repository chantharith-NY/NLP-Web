import { useState } from "react"
import { Outlet, useLocation } from "react-router-dom"
import { motion } from "framer-motion"
import Sidebar from "./Sidebar"
import Header from "./Header"
import Footer from "./Footer"

export default function AppLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const location = useLocation()

  return (
    <div className="relative min-h-screen">
      {/* HEADER */}
      <div
        className={`
          fixed top-5 left-5 w-full z-30
          transition-all duration-300 ease-out
          ${sidebarOpen
            ? "scale-95 opacity-0 pointer-events-none"
            : "scale-100 opacity-100"}
        `}
      >
        <Header onMenuClick={() => setSidebarOpen(true)} />
      </div>

      {/* SIDEBAR */}
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

      {/* OVERLAY */}
      {sidebarOpen && (
        <div
          className="fixed inset-y-0 right-0 left-80 md:left-87.5 z-35"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* MAIN CONTENT */}
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
        {/* 🔥 Animated Page Content */}
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="p-6"
        >
          <Outlet />
        </motion.div>

        <Footer />
      </main>
    </div>
  )
}
