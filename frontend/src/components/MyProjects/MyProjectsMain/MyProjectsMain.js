import LikedProject from "../LikedProjects/LikedProject";
import YourProjects from "../YourProjects/YourProjects";

import styles from "./MyProjectsMain.module.scss";

const MyProjectsMain = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.ProjectsHeader}>
          <div className={styles.btnBx}>
            <button
              className={props.myProjectState.showLikedProjects && styles.active}
              onClick={props.likedProjectsHandler}
            >
              Your Liked Projects
            </button>
            <span>|</span>
            <button
              className={props.myProjectState.showYourProjects && styles.active}
              onClick={props.yourProjectsHandler}
            >
              Your Projects
            </button>
          </div>
        </div>
        <div className={styles.feed}>
          {props.myProjectState.showLikedProjects && <LikedProject />}
          {props.myProjectState.showYourProjects && <YourProjects />}
        </div>
      </div>
    </div>
  );
};

export default MyProjectsMain;
