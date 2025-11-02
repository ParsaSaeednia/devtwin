import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "Parham Saeednia – Backend Engineer",
  description:
    "Seasoned backend engineer experienced in scalable server architectures, Node.js, and API development.",
};

export default function ParhamPage() {
  return (
    <div className={styles.wrapper}>
      <main className={`container ${styles.profile}`}>
        <h1 className="visually-hidden">Parham Saeednia – Backend Engineer</h1>
        <section>
          <Link href="/">
            <span>&lt;&lt; Back Home</span>
          </Link>
          <p>
            Seasoned Backend Engineer adept at designing and implementing <b>scalable</b> server <b>architectures</b>.
            Skilled in <b>Node.js</b>, database management, and <b>API development</b> to ensure optimal <b>performance</b> and
            reliability. A results-oriented professional committed to delivering efficient backend solutions for complex
            applications.
          </p>
          <h3>Technologies:</h3>
          <h6>Nest.js</h6>
          <h6>Docker</h6>
          <h6>Git</h6>
          <h6>Microservices</h6>
          <h3>Full CV:</h3>
          <a href="/ParhamSaeednia.pdf" className={styles.button} target="_blank" rel="noopener noreferrer">
            Download
          </a>
        </section>
      </main>
      <footer className={styles.footer}>
        <ul className={styles.footerList}>
          <li className={styles.footerItem}>
            <a href="https://github.com/parhamsaeednia" target="_blank" rel="noopener noreferrer">
              Github
            </a>
          </li>
          <li className={styles.footerItem}>
            <a
              href="https://www.linkedin.com/in/parham-saeednia-a88a30196/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
          </li>
          <li className={styles.footerItem}>
            <a href="mailto:saeedniaparham@gmail.com" target="_blank" rel="noopener">
              Mail
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
