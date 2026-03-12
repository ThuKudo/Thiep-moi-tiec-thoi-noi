import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="64" height="64" rx="18" fill="url(#bg)" />
      <circle cx="32" cy="32" r="12" fill="#FFCC66" />
      <circle cx="32" cy="32" r="18" stroke="rgba(255,255,255,0.65)" strokeWidth="4" />
      <path
        d="M32 6V14M32 50V58M58 32H50M14 32H6M50.4 13.6L44.8 19.2M19.2 44.8L13.6 50.4M50.4 50.4L44.8 44.8M19.2 19.2L13.6 13.6"
        stroke="#FFF5D6"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient id="bg" x1="8" y1="6" x2="58" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFF7D1" />
          <stop offset="0.48" stopColor="#FFE0B7" />
          <stop offset="1" stopColor="#F4C6D2" />
        </linearGradient>
      </defs>
    </svg>,
    size,
  );
}
