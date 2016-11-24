import React from "react";
import styles from "./SubHeader.css";

const LogoHeader = () => {
  return <div className={styles.logoHeader}>
    <div>
      {/* TODO: Make it IndexLink */}
      <a href="/" className={styles.logoImage}/>
    </div>
    <div>
      <a>Join Modmail</a>
      <a>Register</a>
      <a>Login</a>
      <input placeholder="nadf"></input>
      <button>?</button>
    </div>
  </div>
}

export default LogoHeader;
