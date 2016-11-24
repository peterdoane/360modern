import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import styles from "./HomePage.css";
import logo from "./img-topmiddle-left.png";
import logoWindermere from "./img-bottom-right.jpg";

const HomePage = (props) => (
    <div className={styles.page}>
      <div className={styles.searchPanel}>
        <ImageGallery
            slideInterval={2000}
            autoPlay
            items={[{
              original: 'http://lorempixel.com/1000/600/nature/2/',
              thumbnail: 'http://lorempixel.com/250/150/nature/2/'
            },
              {
                original: 'http://lorempixel.com/1000/600/nature/3/',
                thumbnail: 'http://lorempixel.com/250/150/nature/3/'
              }]}
        />

      </div>
      <div className={styles.section}>
        <div className={styles.left}>
          <img className={styles.sectionOneLogo} src={logo} alt="company logo"/>
        </div>
        <div className={styles.right}>
          <h2 className={styles.sectionSubHeader}>Who Is 360°modern?</h2>
          <p className={styles.sectionText}>360°modern is your premier real estate partner for buying or selling Modern homes.</p>
          <a className={styles.linkButton} href="#">Learn More</a>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.left}>
          <h2 className={styles.sectionSubHeader}>What makes us unique</h2>
          <p className={styles.sectionText}>We hand-curate modern homes daily from the Multiple Listing Service, saving buyers time and effort while providing unparalleled exposure
            for Modern home sellers.</p>
          <p className={styles.sectionText}>For us, the word ‘modern’ isn’t just a marketing strategy - it’s a lifestyle.
            We live, build, and sell modern.</p>
          <a className={styles.linkButton} href="#">Search Homes</a>
        </div>
        <div className={styles.right}></div>
      </div>
      <div className={styles.section}>
        <div className={styles.left}>
          <h2 className={styles.sectionSubHeader}>A community of Modernists</h2>
          <p className={styles.sectionText}>The 360°modern community is comprised of architects, Modern furniture and art experts, non-profits, state historical organizations,
            county historical groups, and contractors. Join us.</p>
          <a href="#" className={styles.linkButton}>Join Modmail</a>
        </div>
        <div className={styles.right}>
          <img src={logoWindermere} alt="Another logo" className={styles.bottomLogo}/>
        </div>
      </div>
    </div>
);

export default HomePage;
