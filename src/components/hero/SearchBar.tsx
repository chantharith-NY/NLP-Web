export default function SearchBar() {
  return (
    <div className="mt-8 max-w-3xl mx-auto bg-white rounded-xl shadow flex items-center px-4 py-3">
      <input
        type="text"
        placeholder="សូមបញ្ចូលសំណួរ..."
        className="flex-1 outline-none text-sm"
      />
      <button className="ml-3 bg-[#6E8122] text-white px-4 py-1 rounded-full shadow-md shadow-gray-700">
        ស្វែងរក →
      </button>
    </div>
  )
}
