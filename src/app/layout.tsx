import type { Metadata } from "next";
import { ToastContainer } from 'react-toastify';
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
        <ToastContainer />
      </body>
    </html>
  );
}
