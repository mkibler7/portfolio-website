import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FixedPlugin from "@/components/fixed-plugin";

import dynamic from "next/dynamic";

const ClientThemeProvider = dynamic(
  () => import("@/components/theme-provider"),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "Michael's Portfolio",
  description: "Debug",
  icons: { icon: "/image/kibler.png" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClientThemeProvider>{children}</ClientThemeProvider>
      </body>
    </html>
  );
}
