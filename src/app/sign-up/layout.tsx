import type { Metadata } from "next";
import { ToastContainer } from 'react-toastify';
import "./signupglobals.css";

export const metadata: Metadata = {
  title: "Clickly - Sign Up",
  description: "Sign up to start tracking URLs",
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
