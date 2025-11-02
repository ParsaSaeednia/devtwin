"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

const links = [
  { href: "/parham", label: "Parham", hoverLine: styles.parhamHoverLine, container: styles.parhamContainer },
  { href: "/parsa", label: "Parsa", hoverLine: styles.parsaHoverLine, container: styles.parsaContainer },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className={styles.siteNav}>
      <div className={`container ${styles.navInner}`}>
        {links.map(({ href, label, hoverLine, container }) => {
          const isActive = pathname === href;

          return (
            <Link key={href} href={href} className={`${container} ${isActive ? styles.active : ""}`}>
              <div>
                <span className={styles.navTitle}>{label}</span>
                <span className={`${styles.navSub} ${hoverLine}`}>Go through</span>
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
