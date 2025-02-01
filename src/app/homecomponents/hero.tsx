"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./hero.css";
import Link from "next/link";
import clicklyHeaderLogo from "./clickly-header-logo.png";

const HeroSection = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    setTheme(systemTheme);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div data-theme={theme} className="hero">
      <div className="header">
        <div className="logo">
          <Image
            src={clicklyHeaderLogo}
            alt="Clickly Logo"
            width={150}
            height={50}
          />
        </div>

        <nav className="nav">
          <a href="/">Home</a>
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Contact</a>
        </nav>

        <button className="clickly-theme-toggle" onClick={toggleTheme}>
          {theme === "light" ? "🌙" : "☀️"}
        </button>

        <div className="auth-links">
          <Link href="./sign-up">Sign Up</Link>
        </div>
        <button
          className="glass-button"
          onClick={() => toast.info("Redirecting to dashboard...")}
        >
          Go to Dashboard
        </button>
      </div>

      <h1 className="main-heading">Clickly</h1>
      <p className="subtitle">
        Manage your URLs seamlessly, effortlessly, and stylishly.
      </p>
    </div>
  );
};

export default HeroSection;
