"use client";

import localFont from "next/font/local";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [collapse, setCollapse] = useState<boolean>(true);
  const navRef = useRef<HTMLButtonElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const insideNavRef = navRef.current?.contains(e.target as Node);
      const insideSidebarRef = sidebarRef.current?.contains(e.target as Node);

      if (!insideNavRef && !insideSidebarRef) {
        setCollapse(true);
      }
    };

    const mediaQuery = window.matchMedia("(max-width: 639px)");
    if (mediaQuery.matches) {
      window.addEventListener("click", handleClickOutside);
    }

    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  const toggleCollapse = () => {
    setCollapse(!collapse);
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex`}
      >
        <Sidebar collapsed={collapse} ref={sidebarRef} />
        <div className="w-full overflow-y-hidden">
          <Navbar toggleCollapsed={toggleCollapse} ref={navRef} />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
