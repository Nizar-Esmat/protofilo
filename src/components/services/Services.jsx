import React from 'react';
import styles from './services.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDev } from '@fortawesome/free-brands-svg-icons';
import { faLightbulb } from '@fortawesome/free-regular-svg-icons';
import { faChalkboard } from '@fortawesome/free-solid-svg-icons';

export default function Services() {
  return (
    <section className={styles.cards} id="services">
      <h2 className={styles.title}>Services</h2>
      <div className={styles.content}>
        <div className={styles.card}>
          <div className={styles.icon}>
            <FontAwesomeIcon icon={faDev} />
          </div>
          <div className={styles.info}>
            <h3>Full-Stack Web Development</h3>
            <p>
              Building responsive, dynamic, and user-friendly websites and web applications.
              Expertise in front-end technologies (HTML, CSS, JavaScript, React) and back-end frameworks
              (Node.js, Django). Database design and integration with MySQL, PostgreSQL, or MongoDB.
            </p>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.icon}>
            <FontAwesomeIcon icon={faLightbulb} />
          </div>
          <div className={styles.info}>
            <h3>Problem-Solving Consulting</h3>
            <p>
              Providing creative and efficient solutions to technical challenges.
              Algorithm optimization and code refactoring.
              Competitive programming training or debugging complex projects.
            </p>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.icon}>
            <FontAwesomeIcon icon={faChalkboard} />
          </div>
          <div className={styles.info}>
            <h3>Technical Training & Teaching</h3>
            <p>
              Conducting workshops and tutorials on web development and programming.
              Helping students improve problem-solving skills and learn programming fundamentals.
              Personalized guidance for beginners and advanced learners.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
