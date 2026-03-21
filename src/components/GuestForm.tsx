"use client";

type GuestFormProps = {
  guestName: string;
  onGuestNameChange: (value: string) => void;
};

function SparkIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-5 w-5" aria-hidden="true" fill="none">
      <path
        d="M24 4l4.8 14.2L43 23l-14.2 4.8L24 42l-4.8-14.2L5 23l14.2-4.8L24 4Z"
        fill="#f4d49c"
        stroke="#e7b36d"
        strokeWidth="2.2"
      />
    </svg>
  );
}

export function GuestForm({ guestName, onGuestNameChange }: GuestFormProps) {
  return (
    <section className="glass-panel fade-rise rounded-[2rem] p-6 sm:p-7">
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/80 shadow-[0_14px_30px_rgba(238,196,165,0.22)]">
          <SparkIcon />
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#bf8a90]">
            Cá nhân hóa thiệp
          </p>
          <h2 className="font-heading text-[2rem] leading-none text-[#7b5565]">
            Tên khách mời
          </h2>
        </div>
      </div>

      <label
        className="mb-3 block text-sm font-semibold text-[#8c6c78]"
        htmlFor="guest-name"
      >
        Nhập tên để thiệp cập nhật ngay theo thời gian thực
      </label>
      <input
        id="guest-name"
        type="text"
        placeholder="Ví dụ: Nguyễn Thị Ngọc Ánh"
        value={guestName}
        onChange={(event) => onGuestNameChange(event.target.value)}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="words"
        spellCheck={false}
        className="w-full rounded-[1.55rem] border border-[#eed6c1] bg-white/84 px-4 py-3.5 text-[1.05rem] font-medium text-[#704d5b] outline-none transition duration-200 placeholder:text-[#c4a1ac] focus:border-[#efceb0] focus:ring-4 focus:ring-[#fde5cc]/70"
      />

      <p className="mt-3 text-sm leading-7 text-[#9a7b88]">
        Nếu để trống, thiệp sẽ dùng tên mặc định là{" "}
        <span className="font-semibold text-[#7b5565]">Quý Khách</span>.
      </p>
    </section>
  );
}
