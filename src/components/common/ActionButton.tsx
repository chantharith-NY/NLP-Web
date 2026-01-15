interface ActionButtonProps {
  label: string
  isActive?: boolean
  onClick?: () => void
  className?: string
}

export default function ActionButton({
  label,
  isActive = false,
  onClick,
  className = "",
}: ActionButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        px-3 py-1 rounded-md text-sm border transition font-inter
        ${isActive
          ? "bg-[#003B77] text-white border-black"
          : "hover:bg-[#025FBD] hover:text-white"}
        ${className}
      `}
    >
      {label}
    </button>
  )
}
