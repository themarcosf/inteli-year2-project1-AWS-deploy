import React from 'react';
import styles from "./FAQLayout.module.scss";

import FAQMain from './FAQMain/FAQMain';
import FAQSide from './FAQSide/FAQSide';

const FAQLayout = () => {
  return (
    <div className={styles.container}>
      <FAQMain />
      <FAQSide />
    </div>
  );
}

export default FAQLayout;