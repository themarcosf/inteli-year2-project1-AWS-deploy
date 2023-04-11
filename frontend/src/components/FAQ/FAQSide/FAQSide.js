import styles from "./FAQSide.module.scss";

import SearchBox from '../../SearchBox/SearchBox';
import Footer from '../../Footer/Footer';

const FAQSide = () => {
  return (
    <div className={styles.SideContent}>
      <SearchBox />
      <div className={styles.IntKeyWords}>
        <p>Key-words you may be interested</p>
        <div className={styles.AllKeyWords}>
          <div className={styles.SugKeyWords}>Post</div>
          <div className={styles.SugKeyWords}>Add</div>
          <div className={styles.SugKeyWords}>Permissions</div>
          <div className={styles.SugKeyWords}>Project</div>
          <div className={styles.SugKeyWords}>Login</div>
          <div className={styles.SugKeyWords}>Password</div>
          <div className={styles.SugKeyWords}>Profile</div>
          <div className={styles.SugKeyWords}>Techs</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default FAQSide;