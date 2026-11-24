import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Navbar } from "@/components/Navbar";
import { siteUrl } from "@/lib/seo";
import "../style.css";

const montserrat = localFont({
  src: "../assets/fonts/montserrat-latin.woff2",
  weight: "100 900",
  display: "swap",
  adjustFontFallback: false,
  variable: "--font-montserrat",
  declarations: [
    {
      prop: "unicode-range",
      value:
        "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
    },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  icons: { icon: { url: "/logo.jpg", type: "image/jpeg" } },
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
