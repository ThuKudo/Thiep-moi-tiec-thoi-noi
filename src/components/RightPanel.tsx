import { invitationConfig } from "@/data/invitation";
import styles from "@/components/InvitationScene.module.css";

function BowIcon() {
  return (
    <svg viewBox="0 0 170 86" className="h-full w-full" aria-hidden="true" fill="none">
      <defs>
        <linearGradient id="softBowPanel" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f8bdca" />
          <stop offset="100%" stopColor="#ef9ab3" />
        </linearGradient>
      </defs>
      <path d="M85 40C56 12 19 13 9 30c-8 14 6 31 25 31 20 0 34-11 51-21Z" fill="url(#softBowPanel)" />
      <path d="M85 40c29-28 66-27 76-10 8 14-6 31-25 31-20 0-34-11-51-21Z" fill="url(#softBowPanel)" />
      <ellipse cx="85" cy="38" rx="16" ry="13" fill="#f2a8bb" />
      <path d="M77 48c-3 9-7 17-17 25" stroke="#ef9fb5" strokeWidth="6" strokeLinecap="round" />
      <path d="M93 48c3 9 7 17 17 25" stroke="#ef9fb5" strokeWidth="6" strokeLinecap="round" />
      <path d="M37 25c12 1 21 4 30 10" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" opacity="0.65" />
      <path d="M133 25c-12 1-21 4-30 10" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" opacity="0.65" />
    </svg>
  );
}

function CupcakeIcon() {
  return (
    <svg viewBox="0 0 90 90" className="h-full w-full" aria-hidden="true" fill="none">
      <path d="M24 54h42l-5 20H29l-5-20Z" fill="#f29abb" />
      <path d="M18 45c0-8 5-14 13-15 2-7 8-12 17-12 8 0 15 5 17 13 7 1 12 7 12 15 0 9-7 16-16 16H33c-9 0-15-7-15-17Z" fill="#fff4f7" stroke="#f2bfd0" strokeWidth="3" />
      <path d="M45 18v-7" stroke="#d99a72" strokeWidth="3" strokeLinecap="round" />
      <path d="M45 11c2 2 3 4 3 6s-1 4-3 5c-2-1-3-3-3-5s1-4 3-6Z" fill="#ffd58f" />
      <circle cx="34" cy="39" r="3" fill="#ffdba7" />
      <circle cx="58" cy="35" r="3" fill="#f4bdd0" />
      <circle cx="48" cy="44" r="2.6" fill="#ffdba7" />
    </svg>
  );
}

export function RightPanel() {
  return (
    <section className={styles.panelRight}>
      <div className={styles.archOuter} />
      <div className={styles.archInner} />

      <div className={styles.bowWrap}>
        <BowIcon />
      </div>

      <p className={styles.headline}>{invitationConfig.inviteHeadline}</p>
      <div className={styles.headlineRule} />

      <p className={styles.inviteLineOne}>{invitationConfig.inviteLineOne}</p>
      <p className={styles.inviteLineTwo}>{invitationConfig.inviteLineTwo}</p>
      <p className={styles.babyNameRight}>{invitationConfig.babyName}</p>

      <p className={styles.timeLabel}>{invitationConfig.timeLabel}</p>
      <div className={styles.timeDecor}>
        <div className={styles.timeDot} />
        <div className={styles.timeColon}>:</div>
        <div className={styles.timeDot} />
      </div>

      <div className={styles.dateBox}>
        <p className={styles.dateText}>{invitationConfig.weekday}</p>
        <p className={styles.dateText}>{invitationConfig.solarDateLine1}</p>
        <p className={styles.dateText}>{invitationConfig.solarDateLine2}</p>
      </div>

      <p className={styles.lunarText}>{invitationConfig.lunarDate}</p>
      <p className={styles.venueText}>{invitationConfig.venueLabel}</p>
      <p className={styles.addressLine1}>{invitationConfig.addressLine1}</p>
      <p className={styles.addressLine2}>{invitationConfig.addressLine2}</p>
      <p className={styles.closingText}>{invitationConfig.closingLine}</p>

      <div className={styles.cupcakeWrap}>
        <CupcakeIcon />
      </div>
    </section>
  );
}
