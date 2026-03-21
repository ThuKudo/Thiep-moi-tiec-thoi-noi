"use client";

import styles from "@/components/InvitationScene.module.css";

type ExportButtonProps = {
  onClick: () => void;
  isExporting: boolean;
};

export function ExportButton({ onClick, isExporting }: ExportButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={isExporting}
      className={styles.controlButton}
    >
      {isExporting ? "Đang xuất ảnh..." : "Lưu ảnh thiệp"}
    </button>
  );
}
