"use client";

import { toPng } from "html-to-image";
import { useDeferredValue, useEffect, useMemo, useRef, useState } from "react";
import { Toaster, toast } from "sonner";
import { ActionButtons } from "@/components/ActionButtons";
import { GuestForm } from "@/components/GuestForm";
import { InvitationCard } from "@/components/InvitationCard";
import { resolveGuestName, type InvitationConfig } from "@/data/invitation";

type InvitationExperienceProps = {
  config: InvitationConfig;
  initialGuest: string;
};

export function InvitationExperience({
  config,
  initialGuest,
}: InvitationExperienceProps) {
  const [guestName, setGuestName] = useState(initialGuest);
  const [isExporting, setIsExporting] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);
  const deferredGuestName = useDeferredValue(guestName);

  useEffect(() => {
    setGuestName(initialGuest);
  }, [initialGuest]);

  const invitationLink = useMemo(() => {
    if (typeof window === "undefined") {
      return "";
    }

    const url = new URL(window.location.href);
    url.searchParams.set("guest", resolveGuestName(guestName));
    return url.toString();
  }, [guestName]);

  const handlePreview = () => {
    previewRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const handleCopyLink = async () => {
    try {
      const link =
        invitationLink ||
        `/?guest=${encodeURIComponent(resolveGuestName(guestName))}`;
      await navigator.clipboard.writeText(link);
      toast.success("Đã sao chép link mời.");
    } catch {
      toast.error("Không thể sao chép link. Hãy thử lại.");
    }
  };

  const handleExport = async () => {
    const node = previewRef.current;
    if (!node) {
      return;
    }

    setIsExporting(true);

    try {
      await document.fonts.ready;
      const exportWidth = 1520;
      const exportHeight = Math.round(
        (node.scrollHeight / node.scrollWidth) * exportWidth,
      );
      const dataUrl = await toPng(node, {
        cacheBust: true,
        pixelRatio: 2.5,
        canvasWidth: exportWidth,
        canvasHeight: exportHeight,
        style: {
          width: "760px",
          margin: "0",
        },
      });

      const link = document.createElement("a");
      link.download = `thiep-moi-${resolveGuestName(guestName)
        .toLowerCase()
        .replaceAll(/\s+/g, "-")}.png`;
      link.href = dataUrl;
      link.click();
      toast.success("Xuất thiệp PNG thành công.");
    } catch {
      toast.error("Xuất PNG thất bại. Vui lòng thử lại.");
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <main className="page-shell custom-scrollbar relative min-h-screen px-4 py-8 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <section className="fade-rise mx-auto mb-8 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.38em] text-[#c08b90]">
            Thiệp thôi nôi online
          </p>
          <h1 className="font-heading text-[clamp(2.8rem,6vw,4.8rem)] leading-[1.03] tracking-[-0.03em] text-[#7b5261]">
            Thiệp mời nhẹ nhàng, sang trọng cho{" "}
            <span className="font-display italic text-[#d98f67]">
              {config.babyName}
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-[#8e6d79] sm:text-lg">
            Tùy chỉnh tên khách mời, xem trước theo thời gian thực, sao chép
            link cá nhân hóa và xuất PNG rõ nét để gửi ngay.
          </p>
        </section>

        <section className="grid gap-6 lg:grid-cols-[380px_minmax(0,1fr)] lg:items-start">
          <div className="space-y-5 lg:sticky lg:top-6">
            <GuestForm guestName={guestName} onGuestNameChange={setGuestName} />

            <section className="glass-panel fade-rise rounded-[2rem] p-6 sm:p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#bf8a90]">
                Hành động nhanh
              </p>
              <h2 className="font-heading mt-2 text-[2rem] leading-none text-[#7b5565]">
                Chia sẻ thiệp
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#9a7b88]">
                Link mời sẽ luôn chứa tên hiện tại của khách mời để mở ra là
                hiển thị sẵn.
              </p>

              <div className="mt-5">
                <ActionButtons
                  onPreview={handlePreview}
                  onExport={handleExport}
                  onCopyLink={handleCopyLink}
                  isExporting={isExporting}
                />
              </div>

              <div className="mt-5 rounded-[1.5rem] border border-white/70 bg-white/70 p-4 text-sm leading-7 text-[#8f707d]">
                <p className="font-semibold text-[#785260]">Link xem trước</p>
                <p className="mt-2 break-all">
                  {invitationLink ||
                    `/?guest=${encodeURIComponent(resolveGuestName(guestName))}`}
                </p>
                <p className="mt-3 text-xs uppercase tracking-[0.22em] text-[#c59b86]">
                  {deferredGuestName !== guestName
                    ? "Đang cập nhật preview..."
                    : "Preview đã sẵn sàng"}
                </p>
              </div>
            </section>
          </div>

          <section className="fade-rise">
            <div className="glass-panel rounded-[2.4rem] p-3 sm:p-4">
              <div className="mb-4 flex items-center justify-between gap-3 px-2 pt-2">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#bf8a90]">
                    Preview thiệp
                  </p>
                  <h2 className="font-heading text-[2rem] leading-none text-[#7b5565]">
                    Cập nhật theo thời gian thực
                  </h2>
                </div>
                <div className="rounded-full border border-white/70 bg-white/70 px-3 py-2 text-sm text-[#8d6773]">
                  Khách mời:{" "}
                  <span className="font-semibold text-[#734d5c]">
                    {resolveGuestName(deferredGuestName)}
                  </span>
                </div>
              </div>

              <div ref={previewRef}>
                <InvitationCard
                  config={config}
                  guestName={deferredGuestName}
                />
              </div>
            </div>
          </section>
        </section>
      </div>

      <Toaster
        position="top-center"
        richColors
        toastOptions={{
          className: "!border-white/70 !bg-white/90 !text-[#6b4a58]",
        }}
      />
    </main>
  );
}
