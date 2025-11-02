import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import TransitionProvider from "@/components/TransitionProvider";

export const metadata: Metadata = {
  title: "DevTw.in – Parham & Parsa Saeednia",
  description:
    "Portfolio hub for Parham and Parsa Saeednia showcasing backend and frontend engineering expertise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
