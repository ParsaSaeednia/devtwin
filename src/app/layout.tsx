import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Navbar } from "@/components/Navbar";
import { siteUrl } from "@/lib/seo";
import "../style.css";

const montserrat = localFont({
  src: "../assets/fonts/montserrat-latin.woff2",
  weight: "100 900",
  display: "swap",
  adjustFontFallback: "Arial",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  icons: { icon: { url: "/favicon.png", type: "image/png", sizes: "48x48" } },
};

export const viewport: Viewport = {
  themeColor: "#fafafa",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
