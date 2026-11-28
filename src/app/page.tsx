import { ViewTransition } from "react";
import { JsonLd, pageMetadata, siteName, siteUrl } from "@/lib/seo";
import styles from "./page.module.css";

export const metadata = pageMetadata(
  "/",
  `Parham & Parsa Saeednia | ${siteName}`,
  "Meet Parham and Parsa Saeednia, backend and frontend engineers. Explore their profiles, technologies, and CVs.",
);

export default function Home() {
  return (
    <>
      <JsonLd data={{ "@type": "WebSite", name: siteName, url: siteUrl + "/" }} />
      <ViewTransition name="page">
        <main className={`container ${styles.home}`}>
          <h1>
            We are <span className={styles.highlight}>Backend</span> &{" "}
            <span className={styles.highlight}>Frontend</span> Developers with experience developing web-based
            platforms
          </h1>
        </main>
      </ViewTransition>
    </>
  );
}
