import { Upload, X } from "lucide-react"

export default function TextInputCard() {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold font-inria-serif text-xl">Khmer Text</h3>
        <X className="w-4 h-4 cursor-pointer text-gray-500" />
      </div>

      <textarea
        placeholder="សូមបញ្ចូលអត្ថបទ..."
        className="w-full h-40 resize-none border rounded-md p-3 text-sm outline-none"
      />

      <div className="flex justify-between mt-3">
        <button className="font-semibold text-[#003B77] border px-4 py-1.5 rounded-md text-sm hover:bg-[#025FBD] hover:text-white">
          Summarize
        </button>

        <button className="font-semibold text-[#003B77] flex items-center gap-2 border px-4 py-1.5 rounded-md text-sm hover:bg-[#025FBD] hover:text-white">
          <Upload size={16} />
          Upload File
        </button>
      </div>
    </div>
  )
}
