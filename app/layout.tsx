import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Taha Property | Private Seller Enquiries",
  description: "A simple, private way to share your property details and receive a clear response.",
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
