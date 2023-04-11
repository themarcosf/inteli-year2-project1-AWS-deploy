// LIKED

import styles from "./LikedProject.module.scss";

import { AiFillHeart } from "react-icons/ai";

const LikedProject = () => {
  return (
    <div className={styles.ProjectsList}>
      <div>
        <p>
          Web app development<AiFillHeart size={26} />{" "}
        </p>
        <div>
          <span>JS</span>
          <span>Nodejs</span>
          <span>MYsql</span>
        </div>
        <span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            laoreet a lacus eget hendrerit. Cras non convallis quam, sit amet
            congue risus. Pellentesque quis accumsan dolor. Donec volutpat
            libero dui, vel accumsan nunc volutpat ut. Morbi id feugiat est, sed
            aliquet ante.
          </p>
        </span>
      </div>
      <div>
        <p>
          Cloud computing service development <AiFillHeart size={26} />{" "}
        </p>
        <div>
          <span>AWS</span>
          <span>Nest.js</span>
          <span>TypeScript</span>
        </div>
        <span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            laoreet a lacus eget hendrerit. Cras non convallis quam, sit amet
            congue risus. Pellentesque quis accumsan dolor. Donec volutpat
            libero dui, vel accumsan nunc volutpat ut. Morbi id feugiat est, sed
            aliquet ante.
          </p>
        </span>
      </div>
      <div>
        <p>
          Logic for prediction with artificial intelligence{" "}
          <AiFillHeart size={26} />{" "}
        </p>
        <div>
          <span>Python</span>
          <span>Jupyter</span>
        </div>
        <span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            laoreet a lacus eget hendrerit. Cras non convallis quam, sit amet
            congue risus. Pellentesque quis accumsan dolor. Donec volutpat
            libero dui, vel accumsan nunc volutpat ut. Morbi id feugiat est, sed
            aliquet ante.
          </p>
        </span>
      </div>
      <div>
        <p>
          IoT solution prototyping{" "}
          <AiFillHeart size={26} />{" "}
        </p>
        <div>
          <span>C++</span>
          <span>Arduino IDE</span>
          <span>MongoDB</span>
        </div>
        <span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            laoreet a lacus eget hendrerit. Cras non convallis quam, sit amet
            congue risus. Pellentesque quis accumsan dolor. Donec volutpat
            libero dui, vel accumsan nunc volutpat ut. Morbi id feugiat est, sed
            aliquet ante.
          </p>
        </span>
      </div>
    </div>
  );
};

export default LikedProject;
