import { useContext, useEffect, useState } from "react";
import { AiOutlineHeart, AiFillHeart, AiOutlineEdit } from "react-icons/ai";
import ApplyModalCtx from "../../../context/apply-modal-ctx";
import InfoModalCtx from "../../../context/info-modal-ctx";
import useHttp from "../../../hooks/use-http";

import styles from "./Card.module.scss";
import EditModalCtx from "../../../context/edit-modal-ctx";

const Card = (props) => {
  const [liked, setLiked] = useState(false);
  const [userData, setUserData] = useState("");
  const moreInfoModalCtx = useContext(InfoModalCtx);
  const editModalCtx = useContext(EditModalCtx);
  const applyModalCtx = useContext(ApplyModalCtx);
  const { sendRequest: fetchProject } = useHttp();
  const { sendRequest: deleteProject } = useHttp();

  const projectData = props.projectData;

  const likeHandler = () => {
    setLiked((prevState) => !prevState);
  };

  const editHandler = () => {
    editModalCtx.showModalHandler(projectData.id)
  }

  const getProject = (projectObject) => {
    const loadedProject = {
      ...projectObject,
      applicationDeadline: new Date(
        projectObject.applicationDeadline
      ).toLocaleDateString("en", {
        day: "numeric",
        year: "numeric",
        month: "long",
      }),
      startDate: new Date(projectObject.startDate).toLocaleDateString("en", {
        day: "numeric",
        year: "numeric",
        month: "long",
      }),
      endDate: new Date(projectObject.endDate).toLocaleDateString("en", {
        day: "numeric",
        year: "numeric",
        month: "long",
      }),
    };

    moreInfoModalCtx.projectDataHandler(loadedProject);
  };

  const moreInfoHandler = () => {
    moreInfoModalCtx.showModalHandler();

    fetchProject(
      {
        url: `http://dellmatch-prod-alb-1086496184.us-east-1.elb.amazonaws.com/projects/${projectData.id}`,
      },
      getProject
    );
  };

  const deleteProjectHandler = async () => {
    await deleteProject(
      {
        url: `http://dellmatch-prod-alb-1086496184.us-east-1.elb.amazonaws.com/projects/${projectData.id}`,
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Z-Key',
          'Access-Control-Allow-Methods': 'GET, HEAD, POST, PUT, DELETE, OPTIONS'
        },
      },
      () => {}
    );
    props.onDelete((prevState) => prevState + 1);
  };

  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardHeader}>
        <div className={styles.profileInfo}>
          <div className={styles.profilePictureBx}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/666/666201.png"
              alt="Profile-Picture"
            />
          </div>
          <div className={styles.profileInfoContent}>
            <h4>
              {userData.name ? userData.name : "Usuário antes da integração"}
            </h4>
            <p>
              {userData.jobTitle
                ? userData.jobTitle
                : "Usuário antes da integração"}
            </p>
          </div>
        </div>
        <div className={styles.actionContainer}>
          {/* {liked ? (
            <AiFillHeart color={"var(--red)"} onClick={likeHandler} size={20} />
          ) : (
            <AiOutlineHeart
              color={"var(--red)"}
              onClick={likeHandler}
              size={20}
            />
          )} */}

          <AiOutlineEdit onClick={editHandler} size={20}/>

          <button onClick={moreInfoHandler} className={styles.moreInfo}>
            More info
          </button>
          {/* <button
            onClick={applyModalCtx.showModalHandler}
            className={styles.apply}
          >
            Apply
          </button> */}
          <button onClick={deleteProjectHandler} className={styles.apply}>
            Delete
          </button>
        </div>
      </div>
      <h1 className={styles.cardTitle}>{projectData.name}</h1>
      <div className={styles.cardContent}>
        <div className={styles.cardImg}>
          <img
            src="https://images.unsplash.com/photo-1509043759401-136742328bb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
            alt="project-image"
          />
        </div>
        <div className={styles.projectInfos}>
          <ul>
            <li>
              Status: <span>Open</span>
            </li>
            <li>
              Application Deadline:{" "}
              <span>{projectData.applicationDeadline}</span>
            </li>
            <li>
              Project starts: <span>{projectData.startDate}</span>
            </li>
            <li>
              Project ends: <span>{projectData.endDate}</span>
            </li>
            <li>
              Avaliable jobs: <span>{projectData.teamSize}</span>
            </li>
            <li className={styles.keyWords}>
              Key-words:
              <div>
                {projectData.keywords.map((keyword) => (
                  <p key={Math.random()}>{keyword}</p>
                ))}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
