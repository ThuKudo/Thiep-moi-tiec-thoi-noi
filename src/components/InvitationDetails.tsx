import type { InvitationConfig } from "@/data/invitation";

type InvitationDetailsProps = {
  config: InvitationConfig;
};

function BowIcon() {
  return (
    <svg viewBox="0 0 170 86" className="h-full w-full" aria-hidden="true" fill="none">
      <defs>
        <linearGradient id="softBow" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f8bdca" />
          <stop offset="100%" stopColor="#ef9ab3" />
        </linearGradient>
      </defs>
      <path d="M85 40C56 12 19 13 9 30c-8 14 6 31 25 31 20 0 34-11 51-21Z" fill="url(#softBow)" />
      <path d="M85 40c29-28 66-27 76-10 8 14-6 31-25 31-20 0-34-11-51-21Z" fill="url(#softBow)" />
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

export function InvitationDetails({ config }: InvitationDetailsProps) {
  return (
    <section className="relative rounded-none border border-[#2a2a2a] bg-white px-4 py-6 sm:px-5 sm:py-7">
      <div className="mx-auto max-w-[25rem]">
        <div className="relative rounded-[3rem] border-2 border-[#ff4d85] px-6 pb-8 pt-16 sm:px-8 sm:pb-9 sm:pt-[4.8rem]">
          <div className="pointer-events-none absolute inset-[0.45rem] rounded-[2.6rem] border border-dashed border-[#ff7aa7]" />

          <div className="pointer-events-none absolute left-1/2 top-[-0.25rem] h-[5.2rem] w-[9rem] -translate-x-1/2">
            <BowIcon />
          </div>

          <div className="relative text-center text-[#ff3d79]">
            <p className="text-[0.82rem] font-semibold uppercase tracking-[0.18em] sm:text-[0.95rem]">
              {config.inviteHeadline}
            </p>
            <div className="mx-auto mt-5 h-px w-[72%] bg-[#ff6d98]" />

            <p className="mx-auto mt-5 max-w-[15rem] text-[1rem] leading-8 sm:max-w-[16rem] sm:text-[1.06rem]">
              {config.inviteGuestLine}
            </p>
            <p className="mx-auto mt-2 max-w-[16rem] text-[1rem] leading-8 sm:text-[1.06rem]">
              {config.inviteBody}
            </p>

            <p className="details-script-name mx-auto mt-3 max-w-[12ch] text-balance text-[clamp(3rem,7vw,4.5rem)] leading-[0.88]">
              {config.babyName}
            </p>

            <div className="mt-5 grid items-center gap-4 sm:grid-cols-[1fr_auto]">
              <div className="text-left">
                <p className="details-script-label text-[clamp(2rem,5vw,2.8rem)] leading-none text-[#ff5a8a]">
                  {config.timeLabel}
                </p>
                <div className="mt-3 flex items-center gap-3">
                  <div className="sample-time-dot">
                    <span>{config.timeHour}</span>
                  </div>
                  <span className="text-[2.1rem] font-semibold text-[#ff5a8a]">:</span>
                  <div className="sample-time-dot">
                    <span>{config.timeMinute}</span>
                  </div>
                </div>
              </div>

              <div className="rounded-[1rem] border-2 border-[#ff6d98] px-5 py-4 text-center">
                <p className="font-heading text-[1.15rem] font-semibold italic leading-tight text-[#ff5a8a] sm:text-[1.28rem]">
                  {config.weekdayDate}
                </p>
                <p className="mt-1 font-heading text-[1.2rem] font-semibold italic leading-tight text-[#ff5a8a] sm:text-[1.38rem]">
                  {config.solarDate}
                </p>
              </div>
            </div>

            <p className="mt-4 text-[0.94rem] italic leading-7 text-[#f36e98] sm:text-[1rem]">
              {config.lunarDate}
            </p>

            <div className="mt-5">
              <p className="details-script-label text-[clamp(2rem,5vw,2.8rem)] leading-none text-[#ff5a8a]">
                {config.venuePrefix}: <span className="font-semibold">{config.venue}</span>
              </p>
              <p className="mt-4 text-[0.98rem] leading-8 text-[#ff5889] sm:text-[1.02rem]">
                {config.addressLine1}
              </p>
              <p className="text-[0.98rem] leading-8 text-[#ff5889] sm:text-[1.02rem]">
                {config.addressLine2}
              </p>
            </div>

            <div className="mt-5 flex items-end justify-between gap-4">
              <div className="text-left">
                <p className="text-[1rem] leading-7 text-[#ff5a8a] sm:text-[1.04rem]">
                  {config.closingLine}
                </p>
              </div>
              <div className="h-16 w-16 shrink-0 sm:h-[4.5rem] sm:w-[4.5rem]">
                <CupcakeIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
