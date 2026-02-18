import { X } from "lucide-react";

interface TextInputCardProps {
  title?: string;
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
  onClear?: () => void;
  maxLength?: number;
}

export default function TextInputCard({
  title = "អត្ថបទបញ្ចូល",
  value,
  placeholder = "សូមបញ្ចូលអត្ថបទ...",
  onChange,
  onClear,
  maxLength = 5000,
}: TextInputCardProps) {
  const isNearLimit = value.length > maxLength * 0.9;
  const isExceedLimit = value.length > maxLength;
  const charCountColor = isExceedLimit
    ? "text-red-600"
    : isNearLimit
      ? "text-orange-500"
      : "text-gray-400";

  return (
    <div className="bg-white px-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <p className="font-semibold font-moul text-xl">{title}</p>

        {onClear && (
          <X
            className="w-4 h-4 cursor-pointer text-gray-500 hover:text-red-500"
            onClick={onClear}
          />
        )}
      </div>

      {/* Textarea */}
      <textarea
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full h-40 resize-none border rounded-md p-3 text-sm outline-none focus:ring-2 ${
          isExceedLimit
            ? "border-red-500 focus:ring-red-300 bg-red-50"
            : isNearLimit
              ? "border-orange-500 focus:ring-orange-300"
              : "border-gray-300 focus:ring-blue-300"
        }`}
      />

      {/* Character count and limit */}
      <div className="flex items-center justify-between mt-2">
        <div className="text-sm text-gray-500 font-battambang">
          {isExceedLimit && (
            <span className="text-red-600 font-semibold">⚠️ លើសពីដែនកំណត់</span>
          )}
        </div>
        <div className={`text-sm font-battambang ${charCountColor}`}>
          {value.length} / {maxLength} តួអក្សរ
        </div>
      </div>
    </div>
  );
}
