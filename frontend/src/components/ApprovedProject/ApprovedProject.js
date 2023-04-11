import { useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { GrClose } from "react-icons/gr";
import { MdArrowForwardIos } from "react-icons/md";

import PeopleApply from '../../assets/firstProfile.jfif';
import PeopleOwner from '../../assets/thirdProfile.jfif';

import ApprovedModalCtx from "../../context/approved-modal-ctx";

import styles from "./ApprovedProject.module.scss";


const ApprovedProject = () => {
  const modalCtx = useContext(ApprovedModalCtx);

  return (
    <AnimatePresence>
      {modalCtx.showModal && (
        <>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.3,
              },
            }}
            exit={{
              opacity: 0,
              transition: {
                delay: 0.3,
              },
            }}
            onClick={() => modalCtx.showModalHandler()}
            className={styles.modalBackdrop}
          ></motion.div>
          <motion.div
            initial={{
              scale: 0,
            }}
            animate={{
              scale: 1,
              transition: {
                duration: 0.3,
              },
            }}
            exit={{
              scale: 0,
              transition: {
                delay: 0.3,
              },
            }}
            className={styles.modalContentWrapper}
          >
            <motion.div
              initial={{
                x: 100,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
                transition: {
                  delay: 0.3,
                  duration: 0.3,
                },
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.3,
                },
              }}
              className={styles.modalContent}
            >
              <div className={styles.TopContent}>
                <p>You got the job!</p>
                <GrClose className={styles.CloseIcon} onClick={modalCtx.showModalHandler} size={30} />
              </div>
              <div className={styles.AcceptTeam}>
                <div>
                  <span className={styles.SpaceImg}><img src={PeopleOwner} alt="Logo" /></span>
                  <MdArrowForwardIos className={styles.iconHeader} size={30} />
                  <span className={styles.SpaceImg}><img src={PeopleApply} alt="Logo" /></span>
                </div>
                <span>Joyce Batista accepted you in the team</span>
              </div>
              <div className={styles.Tittle}>
                <div className={styles.Vector}></div>
                <span>You got the job! 🎉</span>
              </div>
              <div className={styles.VectorTriangle}></div>
              <div className={styles.AcceptedMessage}>
                <h2>Logic for prediction with artificial intelligence</h2>
                <p>Thanks for you efforts in being a member for the delta team to participate in the project. We really liked what you presented to us and we were satisfied with your delivery, congratulations! In this way, I would like to inform you that you have been accepted to participate in the project, I am very happy to have you on the team.</p>
                
              </div>
              <div className={styles.DellPointsInfo}>
                  <p>Project award:</p>
                  <span>1345 Dell Points</span>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ApprovedProject;
