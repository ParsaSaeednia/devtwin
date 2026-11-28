import type { Metadata } from "next";
import { ViewTransition } from "react";
import { Profile } from "@/components/Profile";
import { profiles } from "@/lib/profiles";
import { JsonLd, pageMetadata, siteName, siteUrl } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(profiles).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const { name, role, description } = profiles[slug];
  return pageMetadata(`/${slug}`, `${name} – ${role} | ${siteName}`, description);
}

export default async function ProfilePage({ params }: PageProps<"/[slug]">) {
  const { slug } = await params;
  const profile = profiles[slug];
  const url = `${siteUrl}/${slug}`;
  const structuredData = {
    "@type": "ProfilePage",
    url,
    mainEntity: {
      "@type": "Person",
      name: profile.name,
      jobTitle: profile.role,
      description: profile.description,
      url,
      sameAs: [profile.github, profile.linkedin],
    },
  };
  return (
    <>
      <JsonLd data={structuredData} />
      <ViewTransition name="page">
        <Profile {...profile} />
      </ViewTransition>
    </>
  );
}
