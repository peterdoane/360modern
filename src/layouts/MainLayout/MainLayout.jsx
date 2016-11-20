import React from 'react';
import styles from './MainLayout.css';
import Header from '../../components/Header';
import SubHeader from '../../components/SubHeader';

const MainLayout = ({ children }) => (
  <div>
    <Header />
    <SubHeader />
    <div>{children}</div>
    <div className={styles.footer}></div>
  </div>
);


export default MainLayout;
