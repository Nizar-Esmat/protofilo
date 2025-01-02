import React from 'react';
import styles from './contact.module.css'; // Import the CSS module

export default function Contact() {
  return (
    <section className={`${styles.cards} ${styles.contact}`} id="contact">
      <h2 className={styles.title}>Let's Work Together</h2>

      <div className={styles.content}>
        <div className={styles.card}>
          <div className={styles.icon}>
            <i className="fa-solid fa-phone"></i>
          </div>
          <div className={styles.info}>
            <h3>Phone</h3>
            <p>0109589504</p>
          </div>
        </div>


        <div className={styles.card}>
          <div className={styles.icon}>
            <i className="fa-solid fa-envelope"></i>
          </div>
          <div className={styles.info}>
            <h3>Email</h3>
            <p>NizarEsmat2000@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}
