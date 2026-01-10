import { useRef, useState } from "react"
import { Plus, AtSign, SlidersHorizontal } from "lucide-react"

export default function SearchBar() {
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const handleFileClick = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0])
    }
  }

  return (
    <div className="mt-8 max-w-3xl mx-auto bg-white rounded-xl shadow-md px-4 py-3">
      
      {/* Row 1: Input */}
      <input
        type="text"
        placeholder="ចាប់ផ្តើមសន្ទនាជាមួយជំនួយការ AI"
        className="
          w-full
          outline-none
          text-sm
          text-gray-700
          placeholder-gray-400
          pb-3
        "
      />

      {/* Divider */}
      <div className="h-[1px] bg-gray-200 mb-2" />

      {/* Row 2: Actions */}
      <div className="flex items-center justify-between">
        
        {/* Left icons */}
        <div className="flex items-center gap-3 text-gray-600">
          {/* File Upload */}
          <a
            onClick={handleFileClick}
            className="hover:text-gray-800"
            title="Upload file"
          >
            <Plus size={18} />
          </a>

          <a className="hover:text-gray-800" title="Mention">
            <AtSign size={18} />
          </a>

          <a className="hover:text-gray-800" title="Options">
            <SlidersHorizontal size={18} />
          </a>
        </div>

        {/* Right button */}
        <button
          className="
            bg-[#6E8122]
            text-white
            px-5
            py-1.5
            rounded-full
            text-sm
            shadow-md
            shadow-gray-600
            hover:bg-[#5e6f1c]
            transition
          "
        >
          ចាប់ផ្តើម <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>

      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        className="hidden"
        onChange={handleFileChange}
      />

      {/* Selected file preview */}
      {selectedFile && (
        <div className="mt-3 text-xs text-gray-600 flex items-center gap-2">
          📎 <span>{selectedFile.name}</span>
        </div>
      )}
    </div>
  )
}