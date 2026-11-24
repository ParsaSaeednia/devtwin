import { ViewTransition } from "react";
import { JsonLd, pageMetadata } from "@/lib/seo";
import styles from "./page.module.css";

export const metadata = pageMetadata(
  "/",
  "DevTw.in – Home",
  "Parham & Parsa Saeednia – Backend and Frontend developers building performant web platforms.",
);

export default function Home() {
  return (
    <>
      <JsonLd path="/" />
      <ViewTransition name="page">
        <main className={`container ${styles.home}`}>
          <h1 className="visually-hidden">DevTw.in – Parham & Parsa Saeednia</h1>
          <p className={styles.animateIn}>
            We are <span className={`${styles.highlight} ${styles.backend}`}>Backend</span> &
            <span className={`${styles.highlight} ${styles.frontend}`}>&nbsp;Frontend</span> Developers with
            Experience developing web-based platforms
          </p>
        </main>
      </ViewTransition>
    </>
  );
}
