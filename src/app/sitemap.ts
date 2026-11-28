import type { MetadataRoute } from "next";
import { profiles } from "@/lib/profiles";
import { siteUrl } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteUrl}/` },
    ...Object.keys(profiles).map((slug) => ({ url: `${siteUrl}/${slug}` })),
  ];
}
