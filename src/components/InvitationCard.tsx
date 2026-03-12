import { fillTemplate, resolveGuestName, type InvitationConfig } from "@/data/invitation";

type InvitationCardProps = {
  config: InvitationConfig;
  guestName: string;
};

function SunIcon() {
  return (
    <svg viewBox="0 0 120 120" className="h-full w-full" aria-hidden="true">
      <circle cx="60" cy="60" r="24" fill="#FFD36F" />
      <circle cx="60" cy="60" r="35" fill="none" stroke="rgba(255, 214, 143, 0.6)" strokeWidth="8" />
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
        fill="rgba(255,255,255,0.82)"
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
    <article className="relative mx-auto w-full max-w-[760px] overflow-hidden rounded-[2.25rem] border border-white/60 bg-[linear-gradient(160deg,rgba(255,255,255,0.96),rgba(255,247,241,0.92),rgba(252,235,239,0.96))] p-5 shadow-[0_35px_90px_rgba(197,145,150,0.2)] sm:p-8">
      <div className="ornament-grid pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(241,203,164,0.85),transparent)]" />
      <div className="pointer-events-none absolute -left-7 top-8 h-24 w-24 opacity-90 float-slow sm:h-28 sm:w-28">
        <SunIcon />
      </div>
      <div className="pointer-events-none absolute right-4 top-12 h-16 w-28 opacity-85 float-delayed sm:right-6 sm:h-20 sm:w-32">
        <CloudIcon />
      </div>
      <SparkleIcon className="pointer-events-none absolute left-10 top-28 h-7 w-7 sparkle" />
      <SparkleIcon className="pointer-events-none absolute bottom-20 right-12 h-9 w-9 sparkle" />
      <SparkleIcon className="pointer-events-none absolute bottom-32 left-8 h-5 w-5 sparkle" />

      <div className="relative rounded-[1.8rem] border border-[#f7dfcf] bg-white/70 px-5 py-8 backdrop-blur-[6px] sm:px-8 sm:py-10">
        <div className="mb-8 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.44em] text-[#c08d90] sm:text-sm">
            Lời mời thân thương
          </p>
          <h1 className="font-heading text-4xl text-[#7d5361] sm:text-[3.4rem]">
            {config.eventTitle}
          </h1>
          <div className="mx-auto my-5 h-px w-28 bg-[linear-gradient(90deg,transparent,#f4cb8f,transparent)]" />
          <p className="font-heading text-3xl text-[#d38a61] sm:text-[2.7rem]">
            {config.babyName}
          </p>
        </div>

        <div className="mb-8 rounded-[1.6rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,250,244,0.95),rgba(255,255,255,0.7))] p-5 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] sm:p-7">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d1a46d]">
            Trân trọng kính mời
          </p>
          <p className="mt-3 font-heading text-3xl text-[#744d5c] sm:text-4xl">
            {resolvedGuestName}
          </p>
        </div>

        <div className="space-y-4 text-center leading-8 text-[#755865] sm:px-6 sm:text-lg">
          <p className="text-balance">{primaryMessage}</p>
          <p className="text-balance text-[#8d6a78]">{secondaryMessage}</p>
        </div>

        <div className="my-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-[1.4rem] border border-[#f5dfd3] bg-white/75 p-4 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#c49384]">
              Ngày tiệc
            </p>
            <p className="mt-2 font-heading text-2xl text-[#7b5464]">
              {config.eventDate}
            </p>
            <p className="mt-1 text-sm text-[#9d7b87]">{config.eventTime}</p>
          </div>
          <div className="rounded-[1.4rem] border border-[#f5dfd3] bg-white/75 p-4 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#c49384]">
              Địa điểm
            </p>
            <p className="mt-2 font-semibold text-[#7b5464]">{config.venueLabel}</p>
            <p className="mt-1 text-sm leading-6 text-[#9d7b87]">
              {config.venueAddress}
            </p>
          </div>
          <div className="rounded-[1.4rem] border border-[#f5dfd3] bg-white/75 p-4 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#c49384]">
              RSVP
            </p>
            <p className="mt-2 font-heading text-2xl text-[#7b5464]">
              {config.rsvpPhone}
            </p>
            <p className="mt-1 text-sm text-[#9d7b87]">{config.hostLine}</p>
          </div>
        </div>

        <div className="rounded-[1.6rem] border border-dashed border-[#efcfb8] bg-[linear-gradient(180deg,rgba(255,249,242,0.85),rgba(255,255,255,0.72))] px-5 py-6 text-center">
          <p className="text-sm italic leading-7 text-[#906f79]">{config.note}</p>
          <p className="mt-5 text-sm uppercase tracking-[0.35em] text-[#d4a16d]">
            {config.closing}
          </p>
          <p className="mt-2 font-heading text-2xl text-[#7d5361]">
            {config.hostLine}
          </p>
        </div>
      </div>
    </article>
  );
}
