import type { Metadata } from "next";

export const siteUrl = new URL(process.env.SITE_URL || "https://devtw.in").origin;
export const siteName = "DevTw.in";

export function pageMetadata(path: string, title: string, description: string): Metadata {
  const url = siteUrl + path;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName,
      title,
      description,
      images: [{ url: "/logo.jpg", width: 142, height: 141, alt: "DevTw.in logo" }],
      url,
    },
    twitter: {
      card: "summary",
      title,
      description,
      images: [{ url: "/logo.jpg", alt: "DevTw.in logo" }],
    },
  };
}

export function JsonLd({ data }: { data: { "@type": string } & Record<string, unknown> }) {
  const json = JSON.stringify({ "@context": "https://schema.org", ...data }).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
