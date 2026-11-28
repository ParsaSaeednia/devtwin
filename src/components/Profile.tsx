import Link from "next/link";
import type { Profile as ProfileData } from "@/lib/profiles";
import styles from "./Profile.module.css";

export function Profile({ name, role, side, bio, technologies, cv, github, linkedin, email }: ProfileData) {
  return (
    <div className={styles.profilePage}>
      <main className={`container ${styles.profile}`}>
        <h1 className="visually-hidden">
          {name} – {role}
        </h1>
        <section className={styles[side]}>
          <Link href="/" className={styles.backLink} prefetch={false}>
            <span className={styles.backArrow}>&larr;</span>
            <span className={styles.backText}>Back Home</span>
          </Link>
          <p>{bio}</p>
          <h2>Technologies:</h2>
          <ul className={styles.techList}>
            {technologies.map((technology) => (
              <li key={technology} className={styles.techItem}>
                {technology}
              </li>
            ))}
          </ul>
          <h2>Full CV:</h2>
          <a href={`/${cv}`} className={styles.button} download={cv}>
            Download CV
          </a>
        </section>
      </main>
      <footer className={styles.footer}>
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
