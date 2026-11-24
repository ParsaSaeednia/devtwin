import type { CSSProperties } from "react";
import Link from "next/link";
import type { Profile as ProfileData } from "@/lib/profiles";
import styles from "./Profile.module.css";

const delay = (step: number) => ({ "--delay": step }) as CSSProperties;

export function Profile({ name, role, side, bio, technologies, cv, github, linkedin, email }: ProfileData) {
  const fullCvDelay = technologies.length + 3;
  return (
    <div className={styles.profilePage}>
      <main className={`container ${styles.profile}`}>
        <h1 className="visually-hidden">
          {name} – {role}
        </h1>
        <section className={styles[side]}>
          <Link href="/" className={`${styles.backLink} ${styles.animateItem}`} style={delay(0)}>
            <span className={styles.backArrow}>&larr;</span>
            <span className={styles.backText}>Back Home</span>
          </Link>
          <p className={styles.animateItem} style={delay(1)}>
            {bio}
          </p>
          <h2 className={styles.animateItem} style={delay(2)}>
            Technologies:
          </h2>
          <ul className={styles.techList}>
            {technologies.map((technology, index) => (
              <li key={technology} className={`${styles.techItem} ${styles.animateItem}`} style={delay(index + 3)}>
                {technology}
              </li>
            ))}
          </ul>
          <h2 className={styles.animateItem} style={delay(fullCvDelay)}>
            Full CV:
          </h2>
          <a href={`/${cv}`} className={`${styles.button} ${styles.animateItem}`} style={delay(fullCvDelay + 1)} download={cv}>
            Download
          </a>
        </section>
      </main>
      <footer className={`${styles.footer} ${side === "right" ? styles.lateFooter : ""}`}>
        <ul>
          <li>
            <a href={github} target="_blank" rel="noopener noreferrer" data-label="Github">
              Github
            </a>
          </li>
          <li>
            <a href={linkedin} target="_blank" rel="noopener noreferrer" data-label="linkedin">
              linkedin
            </a>
          </li>
          <li>
            <a href={`mailto:${email}`} target="_blank" rel="noopener" data-label="mail">
              mail
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
