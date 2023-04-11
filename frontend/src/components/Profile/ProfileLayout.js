import ProfileMain from "./ProfileMain/ProfileMain";
import ProfileSideInfo from "./ProfileSideInfo/ProfileSideInfo";

import styles from "./ProfileLayout.module.scss";

const ProfileLayout = () => {
  return (
    <div className={styles.profileContent}>
      <ProfileSideInfo />
      <ProfileMain />
    </div>
  );
}

export default ProfileLayout;