import SearchBar from "./SearchBar"

export default function HeroSection() {
  return (
    <section className="text-center py-5">
        <img
            src="/rac-logo.png"
            alt="RAC"
            className="mx-auto h-45 mb-4"
        />
        
        <div className="space-y-1">
            <p className="font-moulpali text-3xl py-3">
                រាជបណ្ឌិត្យសភាកម្ពុជា
            </p>
            <p className="font-inria-serif text-[30px] text-black font-bold">
                Royal Academy of Cambodia
            </p>
        </div>
        

        <SearchBar />

        <button
            className="
                mx-auto
                mt-6
                px-6
                py-2
                rounded-full
                bg-[#6E8122]
                text-white
                shadow-md
                font-battambang
                hover:bg-[#5a6a1b]
                transition-colors
                flex items-center justify-center gap-2
            "
            >
            <i className="fa-regular fa-compass text-2xl relative top-px"></i>
            <span>ស្វែងយល់បន្ថែម</span>
        </button>
    </section>
  )
}
