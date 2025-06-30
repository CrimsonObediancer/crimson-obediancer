import Link from 'next/link';
import styles from './Layout.module.css';
import { useState } from 'react';

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>🩸 Crimson Obediancer</div>

        <button
          className={styles.menuToggle}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <div className={`${styles.links} ${menuOpen ? styles.show : ''}`}>
          <Link href="/" className={styles.navlink}>Home</Link>
          <Link href="/about" className={styles.navlink}>About</Link>
          <Link href="/application" className={styles.navlink}>Application</Link>
          <Link href="/subscribe" className={styles.navlink}>Subscribe</Link>
        </div>
      </nav>

      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
}
