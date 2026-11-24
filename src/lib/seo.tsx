import type { Metadata } from "next";

export const siteUrl = "https://devtw.in";

const shareTitle = "DevTw.in – Parham & Parsa Saeednia";
const shareDescription = "Backend + Frontend devs crafting fast, clean web experiences.";

export function pageMetadata(path: string, title: string, description: string): Metadata {
  const url = siteUrl + path;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: "DevTw.in",
      title: shareTitle,
      description: shareDescription,
      images: "/logo.jpg",
      url,
    },
    twitter: {
      card: "summary_large_image",
      title: shareTitle,
      description: shareDescription,
      images: "/logo.jpg",
    },
  };
}

export function JsonLd({ path, person }: { path: string; person?: object }) {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "DevTw.in",
    url: siteUrl + path,
    logo: `${siteUrl}/logo.jpg`,
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
      {person && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }} />}
    </>
  );
}
