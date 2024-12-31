import React from 'react';
import styles from './project.module.css';  

export default function Projects() {
  return (
    <section className={styles.projects} id="projects">
      <div className={styles.title}>
        <h3>Projects</h3>
      </div>
      <div className={styles.content}>
        <div className={styles.projectCard}>
          <div className={styles.projectImg}>
          </div>
          <div className={styles.projectInfo}>
            <strong className={styles.projectName}>Weather App</strong>
            <a href="https://weather-app-sooty-pi-84.vercel.app/" target="_blank" rel="noopener noreferrer">
              More Details
            </a>
          </div>
        </div>

        <div className={styles.projectCard}>
          <div className={styles.projectImg}>
          </div>
          <div className={styles.projectInfo}>
            <strong className={styles.projectName}>Tic-Tac-Toe</strong>
            <a href="https://tic-tac-toe-gamma-three-43.vercel.app/" target="_blank" rel="noopener noreferrer">
              More Details
            </a>
          </div>
        </div>

        <div className={styles.projectCard}>
          <div className={styles.projectImg}>
          </div>
          <div className={styles.projectInfo}>
            <strong className={styles.projectName}>Trek Landing Page</strong>
            <a href="https://trek-landing-bage.vercel.app" target="_blank" rel="noopener noreferrer">
              More Details
            </a>
          </div>
        </div>

        <div className={styles.projectCard}>
          <div className={styles.projectImg}>
          </div>
          <div className={styles.projectInfo}>
            <strong className={styles.projectName}>Carmelina</strong>
            <a href="https://carmelina.vercel.app/" target="_blank" rel="noopener noreferrer">
              More Details
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
