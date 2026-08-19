import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Taha Property | Texas homes, thoughtfully found",
  description: "Personal guidance for buyers looking for their next home in Texas.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
