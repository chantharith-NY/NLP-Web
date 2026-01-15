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
          w-[320px] md:w-87.5 min-h-screen
          bg-[#8BAD13] text-white
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
      {/* Header / Logo */}
      <div className="px-6 pt-6 pb-4">
        <div className="flex items-center justify-between">
          {/* Logo + Text (Clickable → Home) */}
          <Link
            to="/"
            onClick={onClose}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <img
              src="/rac-logo.png"
              alt="RAC Logo"
              className="w-13"
            />

            <div className="grid grid-rows-2 text-left space-y-1">
              <p className="text-white font-semibold text-sm font-moulpali group-hover:text-gray-200">
                រាជបណ្ឌិត្យសភាកម្ពុជា
              </p>
              <p className="text-white font-semibold text-xs font-inria-serif group-hover:text-gray-200">
                Royal Academy of Cambodia
              </p>
            </div>
          </Link>

          {/* Menu Button */}
          <button
            onClick={onClose}
            className="group focus:outline-none"
          >
            <Menu
              className="
                text-white ml-4 mr-4
                transition-colors duration-200
                group-hover:text-gray-300
                active:text-gray-400
              "
            />
          </button>
        </div>
      </div>

      {/* Welcome */}
      <div className="px-6 mt-4">
        <p className="text-lg font-moul">សូមស្វាគមន៍</p>
        <div className="h-px bg-white/50 mt-2 mb-4" />

        {/* Cards */}
        <div className="grid grid-cols-2 gap-4">
          <div className="h-24 rounded-xl bg-[#F3FFD4]" />
          <div className="h-24 rounded-xl bg-[#F3FFD4]" />
        </div>
      </div>

      {/* History */}
      <Section title="ប្រវត្តិ">
        <HistoryItem />
        <HistoryItem />
        <HistoryItem />
      </Section>

      {/* Tools */}
      <Section title="ឧបករណ៍">
        <ToolLink
          text="សង្ខេបអត្ថបទ"
          to="/tools/text-summary"
          onClick={onClose}
        />
        <ToolLink
          text="ពិនិត្យអក្ខរាវិរុទ្ធ"
          to="/tools/spell-check"
          onClick={onClose}
        />
      </Section>


      {/* Footer */}
      <div className="mt-auto px-6 pb-6">
        <FooterLink text="ទំព័រដើម" to="/" onClick={onClose} />
        <FooterLink text="អំពីពួកយើង" to="/about" onClick={onClose} />
        {/* <FooterLink text="ទំនាក់ទំនង" to="/contact" onClick={onClose} /> */}

        <div className="flex gap-4 mt-4 text-lg">
          <a
            href="https://t.me/yourusername"
            target="_blank"
            className="text-white hover:text-[#229ED9] transition cursor-pointer"
          >
            <i className="fa-brands fa-telegram"></i>
          </a>

          <a
            href="https://facebook.com/yourpage"
            target="_blank"
            className="text-white hover:text-[#1877F2] transition cursor-pointer"
          >
            <i className="fa-brands fa-facebook"></i>
          </a>

          <a
            href="https://github.com/yourusername"
            target="_blank"
            className="text-white hover:text-black transition cursor-pointer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
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
      <p className="font-medium text-lg font-moul">{title}</p>
      <div className="h-px bg-white/50 mt-2 mb-4" />
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
          border-b pb-1 block cursor-pointer transition font-moul
          ${isActive
            ? "border-white text-white font-medium"
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

function ToolLink({
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
    <Link
      to={to}
      onClick={onClick}
      className={`
        block px-2 py-1 rounded-md text-base cursor-pointer transition font-battambang
        ${isActive
          ? "bg-white/20 text-white font-medium"
          : "text-white/80 hover:bg-white/10 hover:text-white"}
      `}
    >
      {text}
    </Link>
  )
}
