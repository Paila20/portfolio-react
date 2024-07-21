import React from "react";
import about from "../../assets/about/aboutImage.png";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Rajeswari</h1>
        <p className={styles.description}>
        I'm a frontend developer with experience in building responsive
        and optimized sites
        </p>
        <a href="mailto:rajarajeswari169@gmail.com" className={styles.contactBtn}>
          Hire Me
        </a>
      </div>
      <img src={about}
        // src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
