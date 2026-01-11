import { useRef, useState } from "react"
import { Plus, AtSign, SlidersHorizontal, X } from "lucide-react"

interface FileItem {
  file: File
  preview?: string
}

export default function SearchBar() {
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const [files, setFiles] = useState<FileItem[]>([])

  const allowedTypes = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "image/jpeg",
    "image/png",
    "image/webp",
  ]

  const handleFileClick = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return

    const selected = Array.from(e.target.files)

    const validFiles: FileItem[] = []

    for (const file of selected) {
      if (!allowedTypes.includes(file.type)) {
        alert(`❌ ${file.name} មិនមែនជា PDF, Word ឬ Image`)
        continue
      }

      validFiles.push({
        file,
        preview: file.type.startsWith("image/")
          ? URL.createObjectURL(file)
          : undefined,
      })
    }

    setFiles(prev => [...prev, ...validFiles])
    e.target.value = ""
  }

  const removeFile = (index: number) => {
    setFiles(prev => {
      const updated = [...prev]
      if (updated[index]?.preview) {
        URL.revokeObjectURL(updated[index].preview!)
      }
      updated.splice(index, 1)
      return updated
    })
  }

  const renderPreview = (item: FileItem) => {
    if (item.preview) {
      return (
        <img
          src={item.preview}
          alt="preview"
          className="h-20 w-auto rounded-md border object-cover"
        />
      )
    }

    if (item.file.type === "application/pdf") {
      return <img src="/icon/pdf-icon.png" alt="pdf" className="h-20" />
    }

    return <img src="/icon/docx-icon.png" alt="docx" className="h-20" />
  }

  return (
    <div className="mt-8 max-w-5xl mx-auto bg-[#F2F2F2] rounded-xl shadow-lg px-4 py-3">

      {/* Row 1 */}
      <input
        type="text"
        placeholder="ចាប់ផ្តើមសន្ទនាជាមួយជំនួយការ AI"
        className="w-full outline-none text-sm text-gray-700 pb-3"
      />

      <div className="h-px bg-gray-200 mb-2" />

      {/* Row 2 */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 text-gray-600">
          <a onClick={handleFileClick} className="hover:text-gray-800 cursor-pointer">
            <Plus size={18} />
          </a>
          <a className="hover:text-gray-800 cursor-pointer">
            <AtSign size={18} />
          </a>
          <a className="hover:text-gray-800 cursor-pointer">
            <SlidersHorizontal size={18} />
          </a>
        </div>

        <button className="bg-[#6E8122] text-white px-5 py-1.5 rounded-full text-sm shadow-md">
          ចាប់ផ្តើម →
        </button>
      </div>

      {/* Hidden input */}
      <input
        ref={fileInputRef}
        type="file"
        multiple
        className="hidden"
        accept=".pdf,.doc,.docx,image/*"
        onChange={handleFileChange}
      />

      {/* Attachments */}
      {files.length > 0 && (
        <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {files.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-gray-50 p-2 rounded-lg border"
            >
              {renderPreview(item)}

              <div className="flex-1 text-xs text-gray-700 truncate">
                {item.file.name}
              </div>

              <button
                onClick={() => removeFile(index)}
                className="text-gray-500 hover:text-red-600"
              >
                <X size={16} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
