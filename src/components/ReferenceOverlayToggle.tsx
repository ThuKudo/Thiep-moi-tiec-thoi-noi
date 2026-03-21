"use client";

import styles from "@/components/InvitationScene.module.css";

type ReferenceOverlayToggleProps = {
  enabled: boolean;
  onToggle: () => void;
  disabled?: boolean;
};

export function ReferenceOverlayToggle({
  enabled,
  onToggle,
  disabled = false,
}: ReferenceOverlayToggleProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      disabled={disabled}
      className={styles.controlButton}
      title={disabled ? "Thêm ảnh ref vào public để bật overlay" : undefined}
    >
      {enabled ? "Tắt overlay" : "Bật overlay"}
    </button>
  );
}
