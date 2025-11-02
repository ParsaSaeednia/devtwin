import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "Parsa Saeednia – Frontend Engineer",
  description:
    "Frontend engineer crafting high-performance, visually polished interfaces with Vue, React, and modern tooling.",
};

export default function ParsaPage() {
  return (
    <div className={styles.wrapper}>
      <main className={`container ${styles.profile}`}>
        <h1 className="visually-hidden">Parsa Saeednia – Frontend Engineer</h1>
        <section>
          <Link href="/">
            <span>&lt;&lt; Back Home</span>
          </Link>
          <p>
            Results-driven Frontend Engineer with a passion for crafting seamless user interfaces for <b>+4 years</b>.
            Proficient in modern web technologies such as <b>Vue.js</b> &amp; <b>React.js</b> to obtain the best looking platforms
            while maintaining the fastest performance.
          </p>
          <h3>Technologies:</h3>
          <h6>Vue.js</h6>
          <h6>Next.js</h6>
          <h6>TypeScript</h6>
          <h6>Tailwind CSS</h6>
          <h6>Git</h6>
          <h3>Full CV:</h3>
          <a href="/ParsaSaeednia.pdf" className={styles.button} target="_blank" rel="noopener noreferrer">
            Download
          </a>
        </section>
      </main>
      <footer className={styles.footer}>
        <ul className={styles.footerList}>
          <li className={styles.footerItem}>
            <a href="https://github.com/parsasaeednia" target="_blank" rel="noopener noreferrer">
              Github
            </a>
          </li>
          <li className={styles.footerItem}>
            <a
              href="https://www.linkedin.com/in/parsa-saeednia-5a11a6174/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
          </li>
          <li className={styles.footerItem}>
            <a href="mailto:p.parsa31@gmail.com" target="_blank" rel="noopener">
              Mail
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
