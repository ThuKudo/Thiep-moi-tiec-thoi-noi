import { InvitationCover } from "@/components/InvitationCover";
import { InvitationDetails } from "@/components/InvitationDetails";
import type { InvitationConfig } from "@/data/invitation";

type InvitationCardProps = {
  config: InvitationConfig;
  guestName: string;
};

export function InvitationCard({ config, guestName }: InvitationCardProps) {
  return (
    <article className="invitation-card-shell mx-auto w-full max-w-[1240px]">
      <div className="grid gap-6 lg:items-start lg:grid-cols-[1.55fr_0.8fr] lg:gap-9">
        <InvitationCover config={config} guestName={guestName} />
        <InvitationDetails config={config} />
      </div>
    </article>
  );
}
