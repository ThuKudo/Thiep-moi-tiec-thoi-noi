export type InvitationContent = {
  guestName: string;
  childName: string;
  leftTodayLabel: string;
  leftOneLabel: string;
  occasionText: string;
  leftInviteLabel: string;
  inviteTitle: string;
  inviteLines: [string, string];
  timeLabel: string;
  timeDisplay: {
    hour: string;
    minute: string;
  };
  dayBox: {
    weekday: string;
    date: string;
    year: string;
  };
  lunarDate: string;
  venueTitle: string;
  addressLines: [string, string];
  footerText: string;
};

export type InvitationConfig = {
  eventTitle: string;
  referenceOverlaySrc: string;
  content: InvitationContent;
};

export const SCENE_WIDTH = 1323;
export const SCENE_HEIGHT = 663;

export const invitationConfig: InvitationConfig = {
  eventTitle: "Thiệp Mời Tiệc Thôi Nôi",
  referenceOverlaySrc: "",
  content: {
    guestName: "",
    childName: "Ánh Dương",
    leftTodayLabel: "Hôm nay",
    leftOneLabel: "one",
    occasionText: "TRÒN 1 TUỔI",
    leftInviteLabel: "Kính Mời:",
    inviteTitle: "TRÂN TRỌNG KÍNH MỜI",
    inviteLines: [
      "Đến dự buổi tiệc mừng thôi nôi",
      "tròn 1 tuổi của bé",
    ],
    timeLabel: "Vào lúc",
    timeDisplay: {
      hour: "11",
      minute: "00",
    },
    dayBox: {
      weekday: "Chủ Nhật",
      date: "29.03",
      year: "2026",
    },
    lunarDate: "Nhằm ngày 11 tháng 02 năm Bính Ngọ",
    venueTitle: "Tại: Tư Gia",
    addressLines: [
      "Đc: Hẻm 5 - KP. 6 - TT. Bến Lức",
      "H. Bến Lức - T. Long An (cũ)",
    ],
    footerText: "Rất hân hạnh được đón tiếp!",
  },
};
