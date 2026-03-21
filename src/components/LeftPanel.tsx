import { type InvitationContent } from "@/data/invitation";
import styles from "@/components/InvitationScene.module.css";

function BalloonIcon() {
  return (
    <svg viewBox="0 0 190 320" className="h-full w-full" aria-hidden="true" fill="none">
      <defs>
        <radialGradient id="leftBalloon" cx="38%" cy="26%" r="72%">
          <stop offset="0%" stopColor="#fff8fb" />
          <stop offset="60%" stopColor="#f7c7cf" />
          <stop offset="100%" stopColor="#eeaebc" />
        </radialGradient>
        <radialGradient id="leftBalloonGlow" cx="35%" cy="22%" r="56%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.95)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
      </defs>

      <ellipse cx="88" cy="96" rx="62" ry="78" fill="url(#leftBalloon)" />
      <ellipse cx="116" cy="84" rx="14" ry="26" fill="url(#leftBalloonGlow)" opacity="0.85" />

      {Array.from({ length: 72 }).map((_, index) => {
        const x = 28 + ((index * 29) % 86);
        const y = 138 + ((index * 17) % 78);
        const r = 0.6 + ((index * 13) % 8) / 10;
        const colors = ["#f8dca4", "#f2bfd0", "#f7ead6", "#ed96af"];
        return <circle key={index} cx={x} cy={y} r={r} fill={colors[index % colors.length]} opacity="0.78" />;
      })}

      <path d="M88 171c-6 8-9 16-9 26 0 10 4 18 9 22 5-4 9-12 9-22 0-10-4-18-9-26Z" fill="#e8a3b7" opacity="0.9" />
      <path d="M88 218c-8 24-8 47 0 69" stroke="#585664" strokeWidth="2.1" strokeLinecap="round" />
      <path d="M88 246c-12 7-16 18-12 31" stroke="#585664" strokeWidth="2.1" strokeLinecap="round" />
    </svg>
  );
}

type LeftPanelProps = {
  content: InvitationContent;
};

export function LeftPanel({ content }: LeftPanelProps) {
  const guestName = content.guestName.trim();

  return (
    <section className={styles.panelLeft}>
      <div className={styles.balloonWrap}>
        <BalloonIcon />
      </div>

      <p className={styles.oneText}>{content.leftOneLabel}</p>
      <p className={styles.todayText}>{content.leftTodayLabel}</p>
      <p className={styles.babyNameLeft}>{content.childName}</p>

      <div className={styles.ageBand}>
        <span className={styles.ageLine} />
        <p className={styles.ageText}>{content.occasionText}</p>
        <span className={styles.ageLine} />
      </div>

      <div className={styles.inviteRow}>
        <p className={styles.inviteLabel}>{content.leftInviteLabel}</p>
        {guestName ? (
          <p className={styles.inviteValue}>{guestName}</p>
        ) : (
          <div className={styles.inviteDots} />
        )}
      </div>
    </section>
  );
}
