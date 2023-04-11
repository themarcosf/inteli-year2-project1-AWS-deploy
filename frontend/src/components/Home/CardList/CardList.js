import { memo, useContext, useEffect, useState } from "react";
import ProjectModalCtx from "../../../context/project-modal-ctx";
import useHttp from "../../../hooks/use-http";
import Card from "../Card/Card";

import styles from "./CardList.module.scss";
import EditModalCtx from "../../../context/edit-modal-ctx";

const CardList = (props) => {
  const [projects, setProjects] = useState([]);
  const offerProjectModalCtx = useContext(ProjectModalCtx);
  const editProjectModalCtx = useContext(EditModalCtx);
  const [updateProjectList, setUpdateProjectList] = useState(0);

  const { isLoading, error, sendRequest: fetchProjects } = useHttp();

  useEffect(() => {
    if (offerProjectModalCtx.showModal == false) {
      const applyProjects = (projectObject) => {
        const loadedProjects = [];

        for (const projectKey in projectObject) {
          loadedProjects.push({
            ...projectObject[projectKey],
            applicationDeadline: new Date(
              projectObject[projectKey].applicationDeadline
            ).toLocaleDateString("en", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }),
            startDate: new Date(
              projectObject[projectKey].startDate
            ).toLocaleDateString("en", {
              day: "numeric",
              year: "numeric",
              month: "long",
            }),
            endDate: new Date(
              projectObject[projectKey].endDate
            ).toLocaleDateString("en", {
              day: "numeric",
              year: "numeric",
              month: "long",
            }),
          });
        }

        loadedProjects.reverse();

        setProjects(loadedProjects);
      };

      fetchProjects(
        {
          url: `http://dellmatch-prod-alb-1086496184.us-east-1.elb.amazonaws.com/projects`,
          headers: {
            "content-type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        },
        applyProjects
      );
    }
  }, [
    fetchProjects,
    offerProjectModalCtx.showModal,
    updateProjectList,
    editProjectModalCtx.showModal,
  ]);

  if (isLoading) {
    return (
      <section className={styles.projectsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className={styles.projectsError}>
        <p>{error}</p>
      </section>
    );
  }

  return (
    <div className={styles.cardlist}>
      {projects.map((project) => {
        return (
          <Card
            onDelete={setUpdateProjectList}
            key={project.id}
            projectData={project}
          />
        );
      })}
    </div>
  );
};

export default memo(CardList);
