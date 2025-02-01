"use client";

import Image from "next/image";

export default function HeaderLogo() {
  return (
    <div className="logo">
      <Image
        src="/clickly-header-logo.png" // Replace with your logo path
        alt="Clickly Logo"
        width={150}
        height={50}
      />
    </div>
  );
}
