export default function StatsBar() {
  return (
    <div className="bg-gray-50 rounded-xl p-4 grid grid-cols-3 text-center text-sm">
      <div>
        <p className="font-semibold">63 ពាក្យ</p>
        <p className="text-gray-500">ពាក្យដើម</p>
      </div>
      <div>
        <p className="font-semibold">24 ពាក្យ</p>
        <p className="text-gray-500">សង្ខេប</p>
      </div>
      <div>
        <p className="font-semibold">61%</p>
        <p className="text-gray-500">ភាពត្រឹមត្រូវ</p>
      </div>
    </div>
  )
}
