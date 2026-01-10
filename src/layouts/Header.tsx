import { Menu } from "lucide-react"
import { useEffect, useState } from "react"

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
      className={`
        fixed top-0 left-0 w-full z-50
        h-fit
        px-4 py-2
      `}
    >
      <div
        className="
          bg-[#8BAD13]
          h-fit
          flex items-center justify-between
          rounded-4xl px-3 py-2
          max-w-fit
        "
      >
        {/* Logo */}
        <img
          src="/rac-logo.png"
          alt="Logo"
          className={`
            transition-all duration-300
            ${scrolled ? "h-10 w-10" : "h-15 w-15"}
          `}
        />

        {/* Text */}
        <div
          className={`
            transition-all duration-300 ease-out
            ${scrolled
              ? "hidden"
              : "grid grid-rows-2"}
          `}
        >
          <p className="text-white font-semibold text-base font-moulpali">
            រាជបណ្ឌិតសភាកម្ពុជា
          </p>
          <p className="text-white font-semibold text-base font-inria-serif">
            Royal Academy of Cambodia
          </p>
        </div>

        {/* Menu */}
        <button onClick={onMenuClick}>
          <Menu className="text-white mx-4" />
        </button>
      </div>
    </header>
  )
}
