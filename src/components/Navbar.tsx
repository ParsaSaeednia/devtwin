"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

const links = [
  { href: "/Parham", label: "Parham", className: styles.parham },
  { href: "/Parsa", label: "Parsa", className: styles.parsa },
];

export function Navbar() {
  const pathname = usePathname();
  return (
    <nav className={styles.siteNav} style={{ viewTransitionName: "site-nav" }}>
      <div className={`container ${styles.navInner}`}>
        {links.map(({ href, label, className }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              prefetch={false}
              className={`${styles.link} ${className} ${isActive ? styles.isActive : ""}`}
              aria-current={isActive ? "page" : undefined}
            >
              <div>
                <span className={styles.navTitle}>{label}</span>
                <span className={`${styles.navSub} ${styles.hoverLine}`}>Go through</span>
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
