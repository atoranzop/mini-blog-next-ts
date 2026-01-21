import Navbar from "@/components/NavBar";
import type { ReactNode } from "react";

import "./globals.css";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <header>
          <Navbar />
        </header>
        <main style={{padding: "20px"}}>{children}</main>
      </body>
    </html>
  );
}