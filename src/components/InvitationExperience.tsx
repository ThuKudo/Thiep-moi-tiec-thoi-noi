"use client";

import { toPng } from "html-to-image";
import { useRef, useState } from "react";
import { Toaster, toast } from "sonner";
import { ExportButton } from "@/components/ExportButton";
import { InvitationScene } from "@/components/InvitationScene";
import styles from "@/components/InvitationScene.module.css";
import { ReferenceOverlayToggle } from "@/components/ReferenceOverlayToggle";
import {
  invitationConfig,
  SCENE_HEIGHT,
  SCENE_WIDTH,
  type InvitationConfig,
} from "@/data/invitation";

type InvitationExperienceProps = {
  config: InvitationConfig;
  initialGuest: string;
};

export function InvitationExperience({
  config: _config,
  initialGuest: _initialGuest,
}: InvitationExperienceProps) {
  const exportRef = useRef<HTMLDivElement>(null);
  const [isExporting, setIsExporting] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(false);

  const handleExport = async () => {
    const node = exportRef.current;
    if (!node) {
      return;
    }

    setIsExporting(true);

    try {
      await document.fonts.ready;
      const dataUrl = await toPng(node, {
        cacheBust: true,
        pixelRatio: 2.4,
        canvasWidth: SCENE_WIDTH * 2.4,
        canvasHeight: SCENE_HEIGHT * 2.4,
        style: {
          width: `${SCENE_WIDTH}px`,
          height: `${SCENE_HEIGHT}px`,
          margin: "0",
        },
      });

      const link = document.createElement("a");
      link.download = "thiep-thoi-noi-anh-duong.png";
      link.href = dataUrl;
      link.click();
      toast.success("Đã xuất PNG.");
    } catch {
      toast.error("Xuất PNG thất bại.");
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <main className={styles.viewport}>
      <div className={styles.controls}>
        <ReferenceOverlayToggle
          enabled={overlayVisible}
          onToggle={() => setOverlayVisible((value) => !value)}
          disabled={!invitationConfig.referenceOverlaySrc}
        />
        <ExportButton onClick={handleExport} isExporting={isExporting} />
      </div>

      <InvitationScene overlayVisible={overlayVisible} sceneRef={exportRef} />

      <Toaster
        position="top-center"
        richColors
        toastOptions={{
          className: "!border-[#d6d6d6] !bg-white !text-[#303030]",
        }}
      />
    </main>
  );
}
