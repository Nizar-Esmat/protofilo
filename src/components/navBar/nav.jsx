import React from 'react';
import styles from './nav.module.css';

export default function Nav() {
  return (
    <header>
      <a href="#" className={styles.logo}>Nizar</a>
      <nav className={styles.navigation}>
        <a href="#services" className={styles.navLink}>Services</a>
        <a href="#projects" className={styles.navLink}>Projects</a>
        <a href="#contact" className={styles.navLink}>Contact</a>
        <a href="#skills" className={styles.navLink}>Skills</a>
      </nav>
    </header>
  );
}
