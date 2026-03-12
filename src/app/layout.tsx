import type { Metadata } from "next";
import "./globals.css";
import { invitationConfig } from "@/data/invitation";

const pageTitle = `${invitationConfig.eventTitle} | ${invitationConfig.babyName}`;
const pageDescription = `Thiệp mời tiệc thôi nôi ${invitationConfig.babyName} vào ngày ${invitationConfig.eventDate}, chia sẻ nhanh cho khách mời và xuất PNG đẹp mắt.`;

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
      <body className="antialiased">{children}</body>
    </html>
  );
}
