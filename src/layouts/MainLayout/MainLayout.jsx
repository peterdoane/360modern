import React from 'react';
import styles from './MainLayout.css';
import Header from '../../components/Header';
const MainLayout = ({ children }) => (
  <div>
    <Header />
    <div>{children}</div>
    <div className={styles.footer}></div>
  </div>
);


export default MainLayout;
