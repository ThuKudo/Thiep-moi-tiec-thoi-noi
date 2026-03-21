import type { Metadata } from "next";
import "./globals.css";
import { invitationConfig } from "@/data/invitation";

const pageTitle = `${invitationConfig.eventTitle} | ${invitationConfig.content.childName}`;
const pageDescription = `Thiệp mời tiệc thôi nôi ${invitationConfig.content.childName}, ngày ${invitationConfig.content.dayBox.date}.${invitationConfig.content.dayBox.year}, phong cách dựng theo ảnh tham chiếu.`;

export const metadata: Metadata = {
  metadataBase: new URL("https://anh-duong-birthday-invitation.vercel.app"),
  title: pageTitle,
  description: pageDescription,
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: "website",
    locale: "vi_VN",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
