import SearchBar from "./SearchBar"

export default function HeroSection() {
  return (
    <section className="text-center py-16">
        <img
            src="/rac-logo.png"
            alt="RAC"
            className="mx-auto w-28 mb-4"
        />
        
        <div className="space-y-4">
            <p className="font-moulpali text-3xl py-3">
                រាជបណ្ឌិតសភាកម្ពុជា
            </p>
            <p className="font-inria-serif text-xl text-gray-700">
                Royal Academy of Cambodia
            </p>
        </div>
        

        <SearchBar />

        <button className="mt-6 px-6 py-2 rounded-full bg-[#8BAD13] text-white">
            ចាប់ផ្តើមប្រើប្រាស់
        </button>
    </section>
  )
}
