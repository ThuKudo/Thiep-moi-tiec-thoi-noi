import {
  fillTemplate,
  resolveGuestName,
  type InvitationConfig,
} from "@/data/invitation";

type InvitationCardProps = {
  config: InvitationConfig;
  guestName: string;
};

function SunIcon() {
  return (
    <svg viewBox="0 0 120 120" className="h-full w-full" aria-hidden="true">
      <circle cx="60" cy="60" r="24" fill="#FFD36F" />
      <circle
        cx="60"
        cy="60"
        r="35"
        fill="none"
        stroke="rgba(255, 214, 143, 0.6)"
        strokeWidth="8"
      />
      {Array.from({ length: 12 }).map((_, index) => {
        const angle = (index * Math.PI) / 6;
        const x1 = 60 + Math.cos(angle) * 42;
        const y1 = 60 + Math.sin(angle) * 42;
        const x2 = 60 + Math.cos(angle) * 54;
        const y2 = 60 + Math.sin(angle) * 54;

        return (
          <line
            key={index}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#FFD36F"
            strokeWidth="5"
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
}

function CloudIcon() {
  return (
    <svg viewBox="0 0 160 100" className="h-full w-full" aria-hidden="true">
      <path
        d="M45 78h63c22 0 38-12 38-29s-14-29-32-29c-4-15-18-24-35-24-21 0-38 14-41 33C20 31 8 43 8 58c0 11 8 20 18 20h19Z"
        fill="rgba(255,255,255,0.84)"
      />
    </svg>
  );
}

function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 80"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <path
        d="M40 5l8 27 27 8-27 8-8 27-8-27-27-8 27-8 8-27Z"
        fill="#FFF7DD"
        stroke="#F2D082"
        strokeWidth="3"
      />
    </svg>
  );
}

export function InvitationCard({ config, guestName }: InvitationCardProps) {
  const resolvedGuestName = resolveGuestName(guestName);
  const primaryMessage = fillTemplate(config.primaryMessage, resolvedGuestName);
  const secondaryMessage = fillTemplate(
    config.secondaryMessage,
    resolvedGuestName,
  );

  return (
    <article className="invitation-card relative mx-auto w-full max-w-[760px] overflow-hidden rounded-[2.4rem] border border-white/70 bg-[linear-gradient(160deg,rgba(255,255,255,0.98),rgba(255,248,242,0.94),rgba(251,237,241,0.96))] p-5 sm:p-8">
      <div className="ornament-grid pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(241,203,164,0.88),transparent)]" />
      <div className="pointer-events-none absolute -left-7 top-8 h-24 w-24 opacity-90 float-slow sm:h-28 sm:w-28">
        <SunIcon />
      </div>
      <div className="pointer-events-none absolute right-4 top-12 h-16 w-28 opacity-85 float-delayed sm:right-6 sm:h-20 sm:w-32">
        <CloudIcon />
      </div>
      <SparkleIcon className="pointer-events-none absolute left-10 top-28 h-7 w-7 sparkle" />
      <SparkleIcon className="pointer-events-none absolute bottom-20 right-12 h-9 w-9 sparkle" />
      <SparkleIcon className="pointer-events-none absolute bottom-32 left-8 h-5 w-5 sparkle" />

      <div className="relative rounded-[1.9rem] border border-[#f4dfd0] bg-[linear-gradient(180deg,rgba(255,255,255,0.75),rgba(255,249,244,0.78))] px-5 py-8 backdrop-blur-[8px] sm:px-9 sm:py-11">
        <div className="mb-9 text-center">
          <p className="mb-4 text-[0.72rem] font-semibold uppercase tracking-[0.48em] text-[#c38d96] sm:text-xs">
            Lời mời thân thương
          </p>
          <h1 className="font-heading text-[clamp(3rem,7vw,4.5rem)] leading-[1.02] font-semibold tracking-[-0.03em] text-[#805564]">
            <span className="block">{config.eventTitleLineOne}</span>
            <span className="mt-1 block">{config.eventTitleLineTwo}</span>
          </h1>
          <div className="mx-auto my-5 h-px w-32 bg-[linear-gradient(90deg,transparent,#efd399,transparent)]" />
          <p className="font-display text-[clamp(2.6rem,5vw,3.6rem)] font-semibold italic leading-none tracking-[-0.02em] text-[#d68a60]">
            {config.babyName}
          </p>
        </div>

        <div className="mb-9 rounded-[1.75rem] border border-white/80 bg-[linear-gradient(180deg,rgba(255,250,245,0.96),rgba(255,255,255,0.72))] px-5 py-6 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.82)] sm:px-8 sm:py-8">
          <p className="text-[0.74rem] font-semibold uppercase tracking-[0.34em] text-[#d1a46d] sm:text-sm">
            Trân trọng kính mời
          </p>
          <p className="guest-name font-display mx-auto mt-4 max-w-[15ch] text-balance break-words text-[clamp(2.3rem,5vw,3.55rem)] font-semibold italic leading-[1.08] tracking-[-0.025em] text-[#7a5161] sm:max-w-[16ch]">
            {resolvedGuestName}
          </p>
        </div>

        <div className="space-y-5 px-1 text-center text-[1.02rem] leading-8 text-[#725766] sm:px-8 sm:text-[1.08rem] sm:leading-9">
          <p className="text-balance font-medium">{primaryMessage}</p>
          <p className="text-balance text-[#8a6b79]">{secondaryMessage}</p>
        </div>

        <div className="my-9 grid gap-4 sm:grid-cols-2">
          <div className="rounded-[1.5rem] border border-[#f3ddd0] bg-white/76 p-5 text-center shadow-[0_16px_30px_rgba(238,215,204,0.18)]">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-[#c49384]">
              Ngày tiệc
            </p>
            <p className="mt-3 font-heading text-[2rem] leading-none text-[#7d5565]">
              {config.eventDate}
            </p>
            <p className="mt-3 text-base font-medium text-[#9d7b87]">
              {config.eventTime}
            </p>
          </div>
          <div className="rounded-[1.5rem] border border-[#f3ddd0] bg-white/76 p-5 text-center shadow-[0_16px_30px_rgba(238,215,204,0.18)]">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-[#c49384]">
              Địa điểm
            </p>
            <p className="mt-3 text-[1.1rem] font-semibold text-[#7b5464]">
              {config.venueLabel}
            </p>
            <p className="mt-3 text-[0.98rem] leading-8 text-[#9d7b87]">
              {config.venueAddress}
            </p>
          </div>
        </div>

        <div className="rounded-[1.7rem] border border-dashed border-[#efcfb8] bg-[linear-gradient(180deg,rgba(255,250,244,0.92),rgba(255,255,255,0.76))] px-6 py-7 text-center">
          <p className="text-balance text-[1rem] italic leading-8 text-[#906f79]">
            {config.note}
          </p>
          <p className="mt-6 text-[0.78rem] font-semibold uppercase tracking-[0.38em] text-[#d4a16d]">
            {config.closing}
          </p>
          <p className="mt-3 font-heading text-[2rem] leading-none text-[#7d5361]">
            {config.hostLine}
          </p>
        </div>
      </div>
    </article>
  );
}
