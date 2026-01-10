import InfoItem from "./InfoItem"
import { Shield, BookOpen, Zap, BookMarked } from "lucide-react"

export default function InfoBox() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <div className="bg-blue-50 rounded-[50px] p-8 text-center">
        
        <h3 className="font-moul font-bold text-lg mb-6 flex items-center justify-center gap-3 text-[#005A9C]">
          <BookMarked className="w-6 h-6" />
          <span>អំពីគម្រោងនេះ</span>
        </h3>

        <p className="font-battambang text-md leading-7 text-gray-700 max-w-4xl mx-auto px-7">
          វេទិកាដំណើរការភាសាដោយបញ្ញាសិប្បនិម្មិតនេះ ត្រូវបានបង្កើតឡើងដោយរាជបណ្ឌិត្យសភាកម្ពុជា តំណាងឱ្យការប្តេជ្ញាចិត្តរបស់យើង 
          ក្នុងការជំរុញការអប់រំ និងការស្រាវជ្រាវតាមរយៈបច្ចេកវិទ្យាទំនើប។ ឧបករណ៍របស់យើងត្រូវបានរចនាឡើងដើម្បីគាំទ្រដល់អ្នកប្រាជ្ញ និស្សិត 
          និងអ្នកជំនាញក្នុងការផលិតស្នាដៃសរសេរដែលមានគុណភាពខ្ពស់ ដែលបំពេញតាមស្តង់ដារសិក្សាអន្តរជាតិ។
        </p>

        <div className="flex justify-center gap-8 mt-6">
          <InfoItem icon={Shield} label="សុវត្ថិភាព និងឯកជនភាព" />
          <InfoItem icon={Zap} label="ដំណើរការលឿន" />
          <InfoItem icon={BookOpen} label="ឧត្តមភាពសិក្សា" />
        </div>
      </div>
    </section>
  )
}
