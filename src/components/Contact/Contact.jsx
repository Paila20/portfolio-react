import React from "react";
import emailIcon from '../../assets/contact/emailIcon.png';
import linkedinIcon from '../../assets/contact/linkedinIcon.png';
import githubIcon from '../../assets/contact/githubIcon.png';
import styles from "./Contact.module.css";
// import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={emailIcon}
          //  src={getImageUrl("contact/emailIcon.png")} 
           alt="Email icon" />
          {/* <a href="mailto:myemail@email.com">myemail@email.com</a> */}
          <a href="mailto:rajarajeswari169@gmail.com">rajarajeswari169@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src={linkedinIcon}
            // src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/raja-rajeswari-paila/">linkedin.com/raja-rajeswari-paila</a>
        </li>
        <li className={styles.link}>
          <img src={githubIcon}
          //  src={getImageUrl("contact/githubIcon.png")} 
           alt="Github icon" />
          <a href="https://github.com/Paila20">github.com/Paila20</a>
        </li>
      </ul>
    </footer>
  );
};
