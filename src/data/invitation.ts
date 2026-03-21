export type InvitationConfig = {
  eventTitle: string;
  title: string;
  babyName: string;
  coverOneLabel: string;
  coverTodayLabel: string;
  coverBadgeLabel: string;
  coverInviteLine: string;
  inviteHeadline: string;
  inviteGuestLine: string;
  inviteBody: string;
  timeLabel: string;
  timeHour: string;
  timeMinute: string;
  weekdayDate: string;
  solarDate: string;
  lunarDate: string;
  venuePrefix: string;
  venue: string;
  addressLine1: string;
  addressLine2: string;
  closingLine: string;
  hostLine: string;
};

export const invitationConfig: InvitationConfig = {
  eventTitle: "Thiệp Mời Tiệc Thôi Nôi",
  title: "Tiệc thôi nôi 1 tuổi",
  babyName: "Ánh Dương",
  coverOneLabel: "one",
  coverTodayLabel: "Hôm nay",
  coverBadgeLabel: "TRÒN 1 TUỔI",
  coverInviteLine: "Kính mời: {guest}",
  inviteHeadline: "TRÂN TRỌNG KÍNH MỜI",
  inviteGuestLine: "Đến dự buổi tiệc mừng thôi nôi",
  inviteBody: "tròn 1 tuổi của bé",
  timeLabel: "Vào lúc",
  timeHour: "11",
  timeMinute: "00",
  weekdayDate: "Chủ Nhật",
  solarDate: "29.03.2026",
  lunarDate: "Nhằm ngày 11 tháng 02 năm Bính Ngọ",
  venuePrefix: "Tại",
  venue: "Tư Gia",
  addressLine1: "Đc: Hẻm 5 - KP. 6 - TT. Bến Lức",
  addressLine2: "H. Bến Lức - T. Long An",
  closingLine: "Rất hân hạnh được đón tiếp!",
  hostLine: "Ba Mẹ Bé Ánh Dương",
};

export const DEFAULT_GUEST_NAME = "Quý Khách";

export function resolveGuestName(guest: string) {
  const cleaned = guest.trim();
  return cleaned.length > 0 ? cleaned : DEFAULT_GUEST_NAME;
}

export function fillTemplate(template: string, guest: string) {
  return template.replaceAll("{guest}", resolveGuestName(guest));
}
