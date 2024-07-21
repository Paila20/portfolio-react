import React from "react";
// import about from '../assets/about/aboutImage.png';
import about from "../../assets/about/aboutImage.png";
import serverIcon from "../../assets/about/serverIcon.png";
import cursorIcon from "../../assets/about/cursorIcon.png";
import cursor from '../../assets/about/cursorIcon.png';


import styles from "./About.module.css";
// import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={about}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img 
            // src={getImageUrl("about/cursorIcon.png")}
            src={cursor}
             alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          {/* <li className={styles.aboutItem}>
            <img src={serverIcon}
            //  src={getImageUrl("about/serverIcon.png")}
             alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </li> */}
          <li className={styles.aboutItem}>
            <img src={cursorIcon}
            // src={getImageUrl("about/cursorIcon.png")} 
            alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
