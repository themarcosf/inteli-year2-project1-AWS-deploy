import { useReducer } from "react";

import MyProjectsSide from "./MyProjectsSide/MyProjectsSide";
import MyProjectsMain from "./MyProjectsMain/MyProjectsMain";

import styles from "./MyProjectsLayout.module.scss";

const defaultState = {
  showLikedProjects: true,
  showYourProjects: false,
};

const projectReducer = (state, action) => {
  if (action.type === "likedProjects") {
    return {
      showLikedProjects: true,
      showYourProjects: false,
    };
  }
  if (action.type === "yourProject") {
    return {
      showLikedProjects: false,
      showYourProjects: true,
    };
  }

  return defaultState;
};

const MyProjectsLayout = () => {
  const [myProjectState, dispatchMyProjectAction] = useReducer(
    projectReducer,
    defaultState
  );

  const likedProjectsHandler = () => {
    dispatchMyProjectAction({ type: "likedProject" });
  };

  const yourProjectsHandler = () => {
    dispatchMyProjectAction({ type: "yourProject" });
  };

  return (
    <div className={styles.container}>
      <MyProjectsMain
        myProjectState={myProjectState}
        likedProjectsHandler={likedProjectsHandler}
        yourProjectsHandler={yourProjectsHandler}
      />
      <MyProjectsSide myProjectState={myProjectState} />
    </div>
  );
};

export default MyProjectsLayout;
