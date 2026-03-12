"use client";

type GuestFormProps = {
  guestName: string;
  onGuestNameChange: (value: string) => void;
};

export function GuestForm({ guestName, onGuestNameChange }: GuestFormProps) {
  return (
    <section className="glass-panel fade-rise rounded-[2rem] p-6 sm:p-7">
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/70 text-xl shadow-[0_12px_30px_rgba(244,191,148,0.24)]">
          ✨
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#bf8a90]">
            Cá nhân hóa thiệp
          </p>
          <h2 className="font-heading text-2xl text-[#7b5565]">
            Tên khách mời
          </h2>
        </div>
      </div>

      <label className="mb-3 block text-sm font-semibold text-[#8c6c78]" htmlFor="guest-name">
        Nhập tên để lời mời cập nhật ngay trên thiệp
      </label>
      <input
        id="guest-name"
        type="text"
        placeholder="Ví dụ: Nguyễn Văn A"
        value={guestName}
        onChange={(event) => onGuestNameChange(event.target.value)}
        className="w-full rounded-2xl border border-white/70 bg-white/80 px-4 py-3 text-base text-[#704d5b] outline-none transition duration-200 placeholder:text-[#c4a1ac] focus:border-[#f3d2b7] focus:ring-4 focus:ring-[#fde5cc]/70"
      />

      <p className="mt-3 text-sm leading-6 text-[#9a7b88]">
        Nếu để trống, thiệp sẽ dùng tên mặc định là{" "}
        <span className="font-semibold text-[#7b5565]">Quý Khách</span>.
      </p>
    </section>
  );
}
