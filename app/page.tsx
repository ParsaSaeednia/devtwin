import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={`container ${styles.home}`}>
      <h1 className="visually-hidden">DevTw.in – Parham &amp; Parsa Saeednia</h1>
      <p>
        We are <span>Backend</span>
        {" "}&amp;{" "}
        <span>Frontend</span> Developers with experience developing web-based platforms
      </p>
    </main>
  );
}
