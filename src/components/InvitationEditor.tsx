"use client";

import { type ChangeEvent } from "react";
import { type InvitationContent } from "@/data/invitation";
import styles from "@/components/InvitationScene.module.css";

type InvitationEditorProps = {
  content: InvitationContent;
  onChange: (next: InvitationContent) => void;
};

export function InvitationEditor({
  content,
  onChange,
}: InvitationEditorProps) {
  const handleField =
    <K extends keyof InvitationContent>(key: K) =>
    (
      event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
      onChange({
        ...content,
        [key]: event.target.value,
      });
    };

  const handleTimeField =
    (key: "hour" | "minute") =>
    (event: ChangeEvent<HTMLInputElement>) => {
      onChange({
        ...content,
        timeDisplay: {
          ...content.timeDisplay,
          [key]: event.target.value,
        },
      });
    };

  const handleDayField =
    (key: "weekday" | "date" | "year") =>
    (event: ChangeEvent<HTMLInputElement>) => {
      onChange({
        ...content,
        dayBox: {
          ...content.dayBox,
          [key]: event.target.value,
        },
      });
    };

  const handleAddressField =
    (index: 0 | 1) =>
    (event: ChangeEvent<HTMLInputElement>) => {
      const nextAddressLines: [string, string] = [...content.addressLines] as [
        string,
        string,
      ];
      nextAddressLines[index] = event.target.value;

      onChange({
        ...content,
        addressLines: nextAddressLines,
      });
    };

  return (
    <section className={styles.editorPanel}>
      <div className={styles.editorGrid}>
        <label className={styles.editorField}>
          <span>Khách mời</span>
          <input
            value={content.guestName}
            onChange={handleField("guestName")}
            placeholder="Để trống để viết tay"
          />
        </label>

        <label className={styles.editorField}>
          <span>Giờ</span>
          <input
            value={content.timeDisplay.hour}
            onChange={handleTimeField("hour")}
            maxLength={2}
          />
        </label>

        <label className={styles.editorField}>
          <span>Phút</span>
          <input
            value={content.timeDisplay.minute}
            onChange={handleTimeField("minute")}
            maxLength={2}
          />
        </label>

        <label className={styles.editorField}>
          <span>Thứ</span>
          <input
            value={content.dayBox.weekday}
            onChange={handleDayField("weekday")}
          />
        </label>

        <label className={styles.editorField}>
          <span>Ngày</span>
          <input
            value={content.dayBox.date}
            onChange={handleDayField("date")}
          />
        </label>

        <label className={styles.editorField}>
          <span>Năm</span>
          <input
            value={content.dayBox.year}
            onChange={handleDayField("year")}
            maxLength={4}
          />
        </label>

        <label className={`${styles.editorField} ${styles.editorFieldWide}`}>
          <span>Ngày âm</span>
          <input
            value={content.lunarDate}
            onChange={handleField("lunarDate")}
          />
        </label>

        <label className={`${styles.editorField} ${styles.editorFieldWide}`}>
          <span>Địa điểm</span>
          <input
            value={content.venueTitle}
            onChange={handleField("venueTitle")}
          />
        </label>

        <label className={`${styles.editorField} ${styles.editorFieldWide}`}>
          <span>Địa chỉ dòng 1</span>
          <input
            value={content.addressLines[0]}
            onChange={handleAddressField(0)}
          />
        </label>

        <label className={`${styles.editorField} ${styles.editorFieldWide}`}>
          <span>Địa chỉ dòng 2</span>
          <input
            value={content.addressLines[1]}
            onChange={handleAddressField(1)}
          />
        </label>
      </div>
    </section>
  );
}
