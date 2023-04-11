
import { useEffect, useState } from "react";
import { SiMicrosoftteams } from "react-icons/si";

import tempChart from "../../../assets/tempChart.png";
import exampleImgProject from "../../../assets/exampleImgProject.jpg";

import styles from "./ProfileMain.module.scss";

const ProfileMain = () => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");

  useEffect(() => {
    function fetchData() {
      const userData = JSON.parse(localStorage.getItem("userData"));

      setName(userData.name);
      setCity(userData.city);
      setEmail(userData.email)
      setJobTitle(userData.jobTitle);
      setCountry(userData.country);
    }
    fetchData();
  }, []);

  return (
    <div className={styles.profileMain}>
      <div className={styles.profileInfo}>
        <div className={styles.profileInfoContent}>
          <p>
            Full Name: <span>{name}</span>
          </p>
          <p>
            Email: <span>{email}</span>
          </p>
          <p>
            Current area: <span>{jobTitle}</span>
          </p>
          <p>
            Job type: <span>Remote</span>
          </p>
          <button className={styles.teamsButton}>
            <SiMicrosoftteams size={20} />
            Teams
          </button>
        </div>
        <div className={styles.editBtnBx}>
          <button>Edit</button>
        </div>
      </div>
      <div className={styles.profileStats}>
        <div className={styles.technologies}>
          <div className={styles.header}>
            <h1>Technologies</h1>
            <button>Editar</button>
          </div>
          <div className={styles.contentTech}>
            <div className={styles.graphContainer}>
              <img src={tempChart}></img>
            </div>
            <div className={styles.legendGraphContainer}>
              <ul>
                <li>
                  <div style={{ background: "var(--dell-berry)" }} />
                  <p>Python</p>
                </li>
                <li>
                  <div style={{ background: "var(--dell-purple)" }} />
                  <p>C++</p>
                </li>
                <li>
                  <div style={{ background: "var(--dell-red)" }} />
                  <p>JavaScript</p>
                </li>
                <li>
                  <div style={{ background: "var(--dell-yellow)" }} />
                  <p>PHP</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.dellMatchStats}>
          <div className={styles.header}>
            <h1>Dell Match Stats</h1>
          </div>
          <div className={styles.statsContent}>
            <div className={styles.column}>
              <div>
                <p>10</p>
                <span>Projects</span>
              </div>
              <p>Total Contributions</p>
            </div>
            <div className={styles.column}>
              <div>
                <p>750</p>
                <span>Pts</span>
              </div>
              <p>Total Contributions</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.profileProjects}>
        <div className={styles.header}>
          <h1>Projects</h1>
          <button className={styles.allProjectBtn}>View all projects</button>
        </div>
        <div className={styles.projectContent}>
          <ul>
            <li>
              <div>
                <img src={exampleImgProject} />
              </div>
              <p>Project name</p>
            </li>
            <li>
              <div>
                <img src={exampleImgProject} />
              </div>
              <p>Project name</p>
            </li>
            <li>
              <div>
                <img src={exampleImgProject} />
              </div>
              <p>Project name</p>
            </li>
            <li>
              <div>
                <img src={exampleImgProject} />
              </div>
              <p>Project name</p>
            </li>
            <li>
              <div>
                <img src={exampleImgProject} />
              </div>
              <p>Project name</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileMain;
