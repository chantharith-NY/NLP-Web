interface LoadingOverlayProps {
  message?: string
}

export default function LoadingOverlay({
  message = "កំពុងដំណើរការ..."
}: LoadingOverlayProps) {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div
        className="
          bg-white
          px-6 py-4
          rounded-xl
          shadow-lg
          flex items-center gap-3
          border
        "
      >
        {/* Spinner */}
        <div className="w-5 h-5 border-2 border-[#8BAD13] border-t-transparent rounded-full animate-spin" />

        {/* Text */}
        <p className="text-sm text-gray-700 font-battambang">
          {message}
        </p>
      </div>
    </div>
  )
}
