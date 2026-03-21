import { fillTemplate, resolveGuestName, type InvitationConfig } from "@/data/invitation";

type InvitationCoverProps = {
  config: InvitationConfig;
  guestName: string;
};

function BalloonIcon() {
  return (
    <svg viewBox="0 0 190 320" className="h-full w-full" aria-hidden="true" fill="none">
      <defs>
        <radialGradient id="coverBalloon" cx="38%" cy="26%" r="72%">
          <stop offset="0%" stopColor="#fff8fb" />
          <stop offset="60%" stopColor="#f7c7cf" />
          <stop offset="100%" stopColor="#eeaebc" />
        </radialGradient>
        <radialGradient id="coverGlow" cx="35%" cy="22%" r="56%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.95)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
      </defs>

      <ellipse cx="88" cy="96" rx="62" ry="78" fill="url(#coverBalloon)" />
      <ellipse cx="116" cy="84" rx="14" ry="26" fill="url(#coverGlow)" opacity="0.85" />

      {Array.from({ length: 65 }).map((_, index) => {
        const x = 28 + ((index * 29) % 86);
        const y = 138 + ((index * 17) % 78);
        const r = 0.7 + ((index * 13) % 8) / 10;
        const colors = ["#f8dca4", "#f2bfd0", "#f7ead6", "#ed96af"];
        return <circle key={index} cx={x} cy={y} r={r} fill={colors[index % colors.length]} opacity="0.75" />;
      })}

      <path d="M88 171c-6 8-9 16-9 26 0 10 4 18 9 22 5-4 9-12 9-22 0-10-4-18-9-26Z" fill="#e8a3b7" opacity="0.9" />
      <path d="M88 218c-8 24-8 47 0 69" stroke="#585664" strokeWidth="2.1" strokeLinecap="round" />
      <path d="M88 246c-12 7-16 18-12 31" stroke="#585664" strokeWidth="2.1" strokeLinecap="round" />
    </svg>
  );
}

export function InvitationCover({ config, guestName }: InvitationCoverProps) {
  const resolvedGuestName = resolveGuestName(guestName);
  const inviteLine = fillTemplate(config.coverInviteLine, resolvedGuestName);

  return (
    <section className="cover-panel relative overflow-hidden rounded-none border border-[#2a2a2a] bg-[#fef1f4] px-7 py-8 sm:px-10 sm:py-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.5),transparent_34%)]" />

      <div className="relative flex min-h-[34rem] flex-col justify-between sm:min-h-[38rem]">
        <div className="flex-1">
          <div className="mx-auto flex max-w-[39rem] items-start justify-center gap-2 pt-8 sm:pt-12">
            <div className="mt-10 h-[14rem] w-[8.8rem] shrink-0 sm:mt-8 sm:h-[15.5rem] sm:w-[9.5rem]">
              <BalloonIcon />
            </div>

            <div className="min-w-0">
              <div className="glitter-word text-[clamp(5.4rem,14vw,9.6rem)] leading-[0.78] tracking-[-0.08em]">
                {config.coverOneLabel}
              </div>

              <div className="-mt-1 flex items-end gap-2 sm:gap-3">
                <p className="pb-2 font-heading text-[clamp(1.7rem,3.8vw,2.8rem)] italic text-[#2f2c35]">
                  {config.coverTodayLabel}
                </p>
                <p className="cover-baby-name text-[clamp(3.3rem,7.2vw,5.8rem)] leading-[0.88] text-[#ec6f8d]">
                  {config.babyName}
                </p>
              </div>

              <div className="mt-5 flex items-center justify-center gap-3 sm:mt-6">
                <span className="h-[0.95rem] w-[3.65rem] bg-[#ef6f8f]" />
                <p className="text-[clamp(1rem,2vw,1.5rem)] font-bold uppercase tracking-[0.04em] text-[#ef6f8f]">
                  {config.coverBadgeLabel}
                </p>
                <span className="h-[0.95rem] w-[3.65rem] bg-[#ef6f8f]" />
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-8 w-full max-w-[42rem] pt-5">
          <p className="font-display text-[clamp(1.3rem,3vw,2.2rem)] italic leading-none text-[#b38a53] drop-shadow-[0_2px_5px_rgba(219,185,126,0.24)]">
            {inviteLine}
          </p>
          <div className="mt-3 h-px bg-[repeating-linear-gradient(90deg,rgba(213,174,105,0.72)_0_3px,transparent_3px_7px)]" />
        </div>
      </div>
    </section>
  );
}
