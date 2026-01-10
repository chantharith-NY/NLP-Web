import { Menu } from 'lucide-react';
import { Link, useLocation } from "react-router-dom"

interface SidebarProps {
  open: boolean
  onClose: () => void
}

export default function Sidebar({ open, onClose }: SidebarProps) {
  return (
    <>
      {/* Overlay (mobile only) */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed md:static top-0 left-0 z-50
          w-[320px] md:w-[350px] min-h-screen
          bg-[#8BAD13] text-white
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
    {/* Header / Logo */}
      <div className="px-6 pt-6 pb-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src="/rac-logo.png" alt="Logo" className="w-13" />
          </div>
          {/* Text */}
          <div className="grid grid-rows-2 text-left items-center space-y-1">
            <p className="text-white font-semibold text-sm font-moulpali">រាជបណ្ឌិតសភាកម្ពុជា</p>
            <p className="text-white font-semibold text-xs font-inria-serif">Royal Academy of Cambodia</p>
          </div>
          {/* Menu Button */}
          <div className="flex items-center justify-center">
            <a
              onClick={onClose}
              className="group focus:outline-none "
            >
              <Menu className="text-white ml-4 mr-4 
                              transition-colors duration-200
                              group-hover:text-gray-300
                              active:text-gray-400" />
            </a>
          </div>
        </div>
      </div>

      {/* Welcome */}
      <div className="px-6 mt-4">
        <h2 className="text-lg font-semibold">Welcome Back!</h2>
        <div className="h-[1px] bg-white/50 mt-2 mb-4" />

        {/* Cards */}
        <div className="grid grid-cols-2 gap-4">
          <div className="h-24 rounded-xl bg-[#F3FFD4]" />
          <div className="h-24 rounded-xl bg-[#F3FFD4]" />
        </div>
      </div>

      {/* History */}
      <Section title="Your History">
        <HistoryItem />
        <HistoryItem />
        <HistoryItem />
      </Section>

      {/* Tools */}
      <Section title="Tools">
        <HistoryItem />
        <HistoryItem />
      </Section>

      {/* Footer */}
      <div className="mt-auto px-6 pb-6">
        <FooterLink text="Home" to="/" onClick={onClose} />
        <FooterLink text="About Us" to="/about" onClick={onClose} />
        <FooterLink text="Contact" to="/contact" onClick={onClose} />

        <div className="flex gap-4 mt-4 text-lg ">
          <a ><i className="fa-brands fa-telegram"></i></a>
          <a ><i className="fa-brands fa-facebook"></i></a>
          <a ><i className="fa-brands fa-github"></i></a>
          {/* <span>✖️</span> */}
        </div>
      </div>
      </aside>
    </>
  )
}

function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="px-6 mt-6">
      <p className="font-medium">{title}</p>
      <div className="h-[1px] bg-white/50 mt-2 mb-4" />
      <div className="space-y-3">{children}</div>
    </div>
  )
}

function HistoryItem() {
  return (
    <div className="h-4 rounded bg-[#D9D9D9]" />
  )
}

function FooterLink({
  text,
  to,
  onClick,
}: {
  text: string
  to: string
  onClick?: () => void
}) {
  const location = useLocation()
  const isActive = location.pathname === to

  return (
    <div className="mt-3">
      <Link
        to={to}
        onClick={onClick}
        className={`
          relative group
          border-b pb-1 block cursor-pointer transition
          ${isActive
            ? "border-white text-white font-semibold"
            : "border-white/50 text-white/80 hover:text-white"}
        `}
      >
        {text}

        {/* Tooltip */}
        <span
          className="
            absolute left-full ml-3 top-1/2 -translate-y-1/2
            px-2 py-1 rounded-md text-xs whitespace-nowrap
            bg-black text-white
            opacity-0 scale-95
            pointer-events-none
            transition-all duration-200
            group-hover:opacity-100 group-hover:scale-100
          "
        >
          {text}
        </span>
      </Link>
    </div>
  )
}
