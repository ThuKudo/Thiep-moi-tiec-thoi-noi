export type InvitationConfig = {
  eventTitle: string;
  eventTitleLineOne: string;
  eventTitleLineTwo: string;
  babyName: string;
  eventDate: string;
  eventTime: string;
  venueLabel: string;
  venueAddress: string;
  hostLine: string;
  primaryMessage: string;
  secondaryMessage: string;
  note: string;
  closing: string;
};

export const invitationConfig: InvitationConfig = {
  eventTitle: "Thiệp Mời Tiệc Thôi Nôi",
  eventTitleLineOne: "Thiệp Mời",
  eventTitleLineTwo: "Tiệc Thôi Nôi",
  babyName: "Bé Ánh Dương",
  eventDate: "29/03/2026",
  eventTime: "vào lúc 10h30",
  venueLabel: "Tư gia gia đình",
  venueAddress:
    "25/5 Đường Nguyễn Văn Tuôi, Ấp Bến Lức 6, xã Bến Lức, Tây Ninh",
  hostLine: "Ba Mẹ Bé Ánh Dương",
  primaryMessage:
    "Ba Mẹ bé thân mời {guest} đến chung vui trong buổi tiệc thôi nôi của Bé Ánh Dương.",
  secondaryMessage:
    "Sự hiện diện của {guest} là niềm vui và hạnh phúc của gia đình.",
  note: "Mong được đón tiếp gia đình và người thương trong một buổi tiệc ấm áp, ngọt ngào và đầy tiếng cười.",
  closing: "Thương mến kính mời",
};

export const DEFAULT_GUEST_NAME = "Quý Khách";

export function resolveGuestName(guest: string) {
  const cleaned = guest.trim();
  return cleaned.length > 0 ? cleaned : DEFAULT_GUEST_NAME;
}

export function fillTemplate(template: string, guest: string) {
  return template.replaceAll("{guest}", resolveGuestName(guest));
}
