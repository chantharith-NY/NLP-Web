import { Menu } from "lucide-react"

interface HeaderProps {
  onMenuClick: () => void
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="py-3 px-5 w-full relative">
      <div className="bg-[#8BAD13] flex justify-between rounded-4xl space-x-2 px-2 py-3 max-w-fit">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="/rac-logo.png" alt="Logo" className="h-15 w-15" />
        </div>
        {/* Text */}
        <div className="grid grid-rows-2 text-left items-center">
          <p className="text-white font-semibold text-sm font-moulpali">រាជបណ្ឌិតសភាកម្ពុជា</p>
          <p className="text-white font-semibold text-base font-inria-serif">Royal Academy of Cambodia</p>
        </div>
        {/* Menu Button */}
        <div className="flex items-center justify-center">
          <a
            onClick={onMenuClick}
            className="group focus:outline-none "
          >
            <Menu className="text-white ml-4 mr-4 
                            transition-colors duration-200
                            group-hover:text-gray-300
                            active:text-gray-400" />
          </a>
        </div>
      </div>
    </header>
  )
}
