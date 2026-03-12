import { InvitationExperience } from "@/components/InvitationExperience";
import { invitationConfig } from "@/data/invitation";

type HomePageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function Home({ searchParams }: HomePageProps) {
  const params = await searchParams;
  const rawGuest = params.guest;
  const initialGuest = typeof rawGuest === "string" ? rawGuest : "";

  return (
    <InvitationExperience
      config={invitationConfig}
      initialGuest={initialGuest}
    />
  );
}
