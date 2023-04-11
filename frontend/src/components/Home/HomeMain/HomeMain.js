import { useContext } from "react";
import ProjectModalCtx from "../../../context/project-modal-ctx";
import CardList from "../CardList/CardList";
import styles from "./HomeMain.module.scss";

const HomeMain = () => {
  const modalCtx = useContext(ProjectModalCtx);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.contentHeader}>
          <div>
            <h1>What's happening in Dell Technologies?</h1>
            <span>Checkout the latest oi</span>
          </div>

          <button onClick={modalCtx.showModalHandler}>Offer a project</button>
        </div>
        <div className={styles.feed}>
          <CardList />
        </div>
      </div>
    </div>
  );
};

export default HomeMain;
