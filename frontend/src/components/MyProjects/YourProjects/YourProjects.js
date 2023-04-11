// LIKED

import styles from "./YourProjects.module.scss";

const LikedProject = () => {
  return (
    <div className={styles.ProjectsList}>
        <div>
          <p>Cloud computing service development <div style={{color: 'var(--dell-berry)', 'border-color': 'var(--dell-berry)'}}>In progress</div> </p>
          <div>
            <span>AWS</span>
            <span>Nest.js</span>
            <span>TypeScript</span>
            <p style={{color: 'var(--blue)'}}>Approved</p>
          </div>
          <span><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet a lacus eget hendrerit. Cras non convallis quam, sit amet congue risus. Pellentesque quis accumsan dolor. Donec volutpat libero dui, vel accumsan nunc volutpat ut. Morbi id feugiat est, sed aliquet ante.</p></span>
        </div>
        <div>
          <p>Logic for prediction with artificial intelligence <div style={{color: 'var(--dell-purple)', 'border-color': 'var(--dell-purple)'}}>Recruitment</div> </p>
          <div>
            <span>Python</span>
            <span>Jupyter</span>
            <p style={{color: 'var(--orange)'}}>Owner</p>
          </div>
          <span><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet a lacus eget hendrerit. Cras non convallis quam, sit amet congue risus. Pellentesque quis accumsan dolor. Donec volutpat libero dui, vel accumsan nunc volutpat ut. Morbi id feugiat est, sed aliquet ante.</p></span>
        </div>
        <div>
          <p>IoT solution prototyping <div style={{color: 'var(--dell-berry)', 'border-color': 'var(--dell-berry)'}}>In progress</div> </p>
          <div>
            <span>C++</span>
            <span>Arduino IDE</span>
            <span>MongoDB</span>
            <p style={{color: 'var(--red)'}}>Rejected</p>
          </div>
          <span><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet a lacus eget hendrerit. Cras non convallis quam, sit amet congue risus. Pellentesque quis accumsan dolor. Donec volutpat libero dui, vel accumsan nunc volutpat ut. Morbi id feugiat est, sed aliquet ante.</p></span>
        </div>
      </div>
  );
};

export default LikedProject;
