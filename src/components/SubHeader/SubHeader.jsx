import React from 'react';
import styles from './SubHeader.css';

const LogoHeader = () => {
  return <div className={styles.logoHeader}>
    <div>
      <img className={styles.logoImage} src='http://r.ddmcdn.com/s_f/o_1/cx_633/cy_0/cw_1725/ch_1725/w_720/APL/uploads/2014/11/too-cute-doggone-it-video-playlist.jpg' />
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
