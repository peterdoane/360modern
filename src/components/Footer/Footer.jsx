import React from "react";
import styles from "./Footer.css";
import logo1 from "./footer-logo.jpg";
import logo2 from "./footer-icon.jpg";

const Footer = () => {
  return (
      <div className={styles.footer}>
        <img className={styles.logo1} src={logo1} alt="Windermere logo"/>
        <img className={styles.houseIcon} src={logo2} alt="house icon"/>
        <p className={styles.copyright}>
          ©2016 360° Modern
          Some content is the copyright of Windermere Services Company, and used with permission. "Windermere Real Estate" and the Windermere logo are trademarks of Windermere
          Services Company.
        </p>
        <div className={styles.contacts}>
          <div className={styles.top}>
            <a href="tel:2062006626"><span>(206)&nbsp;200-6626</span></a>
          </div>
          <div className={styles.bottom}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
          </div>
        </div>
      </div>
  );
};

export default Footer;
