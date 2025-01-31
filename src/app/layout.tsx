import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clickly",
  description: "Track URLs easily",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
