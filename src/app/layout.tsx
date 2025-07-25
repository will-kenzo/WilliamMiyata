import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const DM_Sans = localFont({
  src: [
    {
      path: "../../public/dmsans.woff2",
      weight: "100 900",
    },
  ],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "William Miyata",
  description: "William Miyata Store. Generated by create next app",
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${DM_Sans.variable} antialiased`}>{children}</body>
    </html>
  );
}
