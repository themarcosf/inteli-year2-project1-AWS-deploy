import React from 'react';
import styles from "./Footer.module.scss";
import { VscCircleFilled } from "react-icons/vsc";

const Footer = () => {
  return (
    <div className={styles.Footer}>
        <span className={styles.FooterTags}>About <VscCircleFilled size={6} /> FAQ <VscCircleFilled size={6} /> Terms of Service <VscCircleFilled size={6} /> Privacy Policy <VscCircleFilled size={6} /> Cookie Policy <VscCircleFilled size={6} /> Accessibility</span>
        <span className={styles.FooterCopyright}>© 2023 Dell Match from Dell Technologies</span>
      </div>
  );
}

export default Footer;