'use client';

import { useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <a href="#" className={styles.logo}>
          <span className={styles.logoIcon}>✦</span>
          <span>NexaFlow</span>
        </a>
        <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          <li><a href="#features" onClick={() => setMenuOpen(false)}>Features</a></li>
          <li><a href="#testimonials" onClick={() => setMenuOpen(false)}>Testimonials</a></li>
          <li><a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a></li>
        </ul>
        <div className={styles.actions}>
          <a href="#" className={styles.loginBtn}>Log in</a>
          <a href="#" className={styles.ctaBtn}>Get Started</a>
        </div>
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={menuOpen ? styles.barOpen : styles.bar}></span>
          <span className={menuOpen ? styles.barOpen : styles.bar}></span>
          <span className={menuOpen ? styles.barOpen : styles.bar}></span>
        </button>
      </div>
    </nav>
  );
}
