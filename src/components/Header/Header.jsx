import React from 'react';
import styles from './Header.css';
import { Link } from 'react-router';

const Header = () => (
  <div className={styles.header}>
    <Link to={{ pathname: 'featured-homes' }} className={styles.headerItem}>Featured homes</Link>
  </div>
);
export default Header;
