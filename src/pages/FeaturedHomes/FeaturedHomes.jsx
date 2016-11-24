import React from "react";
import styles from './FeaturedHomes.css';
import times from 'lodash/fp/times';

const FeaturedHomes = () => {
  return (
      <div className={styles.gallery}>
        {
          times(() => (
              <img src="http://www.fillmurray.com/400/280" alt="Bill Murray :)"/>
          ), 10)
        }
      </div>
  );
};


export default FeaturedHomes;
