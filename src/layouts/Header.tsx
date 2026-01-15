import { Menu } from "lucide-react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

interface HeaderProps {
  onMenuClick: () => void
}

export default function Header({ onMenuClick }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className="
        fixed top-0 left-0 w-full z-50
        px-4 py-2
      "
    >
      <div
        className="
          bg-[#8BAD13]
          flex items-center justify-between
          rounded-4xl px-3 py-2
          max-w-fit
          space-x-2
        "
      >
        {/* Logo + Text → Home */}
        <Link
          to="/"
          className="flex items-center gap-2 cursor-pointer group"
          aria-label="Go to homepage"
        >
          {/* Logo */}
          <img
            src="/rac-logo.png"
            alt="RAC Logo"
            className={`
              transition-all duration-300
              ${scrolled ? "h-10 w-10" : "h-15 w-15"}
            `}
          />

          {/* Text */}
          <div
            className={`
              transition-all duration-300 ease-out
              ${scrolled ? "hidden" : "grid grid-rows-2"}
            `}
          >
            <p className="text-white font-semibold text-base font-moulpali group-hover:text-gray-200">
              រាជបណ្ឌិត្យសភាកម្ពុជា
            </p>
            <p className="text-white font-semibold text-base font-inria-serif group-hover:text-gray-200">
              Royal Academy of Cambodia
            </p>
          </div>
        </Link>

        {/* Menu Button */}
        <button
          onClick={onMenuClick}
          className="focus:outline-none"
          aria-label="Open menu"
        >
          <Menu className="text-white mx-4" />
        </button>
      </div>
    </header>
  )
}
