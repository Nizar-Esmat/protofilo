import React from 'react';
import styles from './main.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";

export default function Main() {
  return (
    <section className={styles.main}>
      <div>
        <h2>
          Hello, I'm Nizar Esmat <br /> <span className={styles.span}>Full Stack Using Python</span>
        </h2>
        <h3>ITI Student</h3>
        <a
          href="./Nizar - Resume.pdf"
          className={styles['main-ptn']}
          download="Nizar-Resume.pdf"
        >
          Download My CV
        </a>

        <div className={styles['social-icons']}>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="#code" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faCode} />
          </a>
        </div>
      </div>
    </section>
  );
}
