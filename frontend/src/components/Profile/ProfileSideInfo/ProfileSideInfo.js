// import { BsFiletypePdf } from "react-icons/bs";

import styles from "./ProfileSideInfo.module.scss";
import { useState, useEffect } from "react";
import Design from '../../../assets/koko.png';

const ProfileSideInfo = () => {
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
      setJobTitle(userData.jobTitle);
      setCountry(userData.country);
    }
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.infosContainer}>
        <div className={styles.pictureBx}>
          <img
            src={Design}
            alt="profile-picture"
          />
        </div>
        <div className={styles.personalInfos}>
          <h3>{name}</h3>
          <p>{jobTitle}</p>
          <div className={styles.address}>
            <p>
              {city} - {country}{" "}
            </p>
          </div>
        </div>
        <div className={styles.favoriteTags}>
          <h1>Favorite Tags</h1>
          <div className={styles.favoriteTagsBx}>
            <ul>
              <li>Java Script</li>
              <li>Frontend</li>
              <li>UX Design</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.curriculumContainer}>
        <h2>View Dell Curriculum</h2>
        <div>
          {/* <BsFiletypePdf size={20} /> */}
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1_UCDJRZZ0mmDDCLH4o_DbTcucD97OMsm/view?usp=share_link"
          >
            {name} Curriculum
          </a>
        </div>
      </div>
      <div className={styles.achievementsContainer}>
        <h2>Achievements</h2>
        <ul>
          <li>
            <img src="https://www.pngmart.com/files/14/Red-Badge-Transparent-PNG.png" />
            <p>Badge Title</p>
          </li>
          <li>
            <img src="https://www.pngmart.com/files/14/Red-Badge-Transparent-PNG.png" />
            <p>Badge Title</p>
          </li>
          <li>
            <img src="https://www.pngmart.com/files/14/Red-Badge-Transparent-PNG.png" />
            <p>Badge Title</p>
          </li>
          <li>
            <img src="https://www.pngmart.com/files/14/Red-Badge-Transparent-PNG.png" />
            <p>Badge Title</p>
          </li>
          <li>
            <img src="https://www.pngmart.com/files/14/Red-Badge-Transparent-PNG.png" />
            <p>Badge Title</p>
          </li>
          <li>
            <img src="https://www.pngmart.com/files/14/Red-Badge-Transparent-PNG.png" />
            <p>Badge Title</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileSideInfo;
