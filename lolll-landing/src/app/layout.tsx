import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lolll - Be laugh-first",
  description: "Join Lolll and discover the joy of humor-first content that brightens your day.",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
