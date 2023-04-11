import HomeMain from './HomeMain/HomeMain';
import HomeSideContent from './HomeSideContent/HomeSideContent';

import styles from "./HomeLayout.module.scss";

const HomeLayout = () => {
  return (
    <div className={styles.container}>
      <HomeMain />
      <HomeSideContent />
    </div>
  );
}

export default HomeLayout;