"use client";

type ActionButtonsProps = {
  onPreview: () => void;
  onExport: () => void;
  onCopyLink: () => void;
  isExporting: boolean;
};

const buttonBase =
  "inline-flex min-h-12 items-center justify-center rounded-full px-5 py-3 text-sm font-bold transition duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/70";

export function ActionButtons({
  onPreview,
  onExport,
  onCopyLink,
  isExporting,
}: ActionButtonsProps) {
  return (
    <div className="fade-rise flex flex-wrap gap-3">
      <button
        type="button"
        onClick={onPreview}
        className={`${buttonBase} border border-white/70 bg-white/70 text-[#7a5868] shadow-[0_15px_30px_rgba(226,190,170,0.18)] hover:-translate-y-0.5 hover:bg-white`}
      >
        Xem trước
      </button>
      <button
        type="button"
        onClick={onExport}
        disabled={isExporting}
        className={`${buttonBase} shine bg-[linear-gradient(135deg,#f6cbd4,#f7deb0)] text-[#6f4555] shadow-[0_18px_35px_rgba(240,191,164,0.34)] hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-75`}
      >
        {isExporting ? "Đang xuất PNG..." : "Xuất PNG"}
      </button>
      <button
        type="button"
        onClick={onCopyLink}
        className={`${buttonBase} border border-[#f1d4c2] bg-[#fff8f3] text-[#916674] hover:-translate-y-0.5 hover:border-[#ecc5b7] hover:bg-white`}
      >
        Sao chép link mời
      </button>
    </div>
  );
}
