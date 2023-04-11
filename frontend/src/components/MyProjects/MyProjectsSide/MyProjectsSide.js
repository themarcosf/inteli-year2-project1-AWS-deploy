import styles from "./MyProjectsSide.module.scss";

import SearchBox from "../../SearchBox/SearchBox";
import Footer from "../../Footer/Footer";

import { BsFillCircleFill } from "react-icons/bs";

const MyProjectsSide = (props) => {
  return (
    <div className={styles.SideContent}>
      <SearchBox />
      {props.myProjectState.showYourProjects && (
        <>
          <div className={styles.IntKeyWords}>
            <p>Filters that can help you</p>
            <div className={styles.AllKeyWords}>
              <div
                style={{
                  color: "var(--dell-aqua)",
                  "border-color": "var(--dell-aqua)",
                }}
                className={styles.SugKeyWords}
              >
                All Projects
              </div>
              <div
                style={{
                  color: "var(--dell-green)",
                  "border-color": "var(--dell-green)",
                }}
                className={styles.SugKeyWords}
              >
                Done
              </div>
              <div
                style={{
                  color: "var(--dell-purple)",
                  "border-color": "var(--dell-purple)",
                }}
                className={styles.SugKeyWords}
              >
                Recruitment
              </div>
              <div
                style={{
                  color: "var(--dell-yellow)",
                  "border-color": "var(--dell-yellow)",
                }}
                className={styles.SugKeyWords}
              >
                To be done
              </div>
              <div
                style={{
                  color: "var(--dell-berry)",
                  "border-color": "var(--dell-berry)",
                }}
                className={styles.SugKeyWords}
              >
                In progress
              </div>
              <div
                style={{
                  color: "var(--dell-red)",
                  "border-color": "var(--dell-red)",
                }}
                className={styles.SugKeyWords}
              >
                Closed
              </div>
            </div>
          </div>
          <div className={styles.MostLanguages}>
            <div className={styles.LanguagesIntro}>
              <span className={styles.LanguagesTittle}>
                Your most used languages
              </span>
              <span className={styles.LanguagesSubTittle}>
                Data based on your projects
              </span>
            </div>
            <div className={styles.LanguagesContent}>
              <div className={styles.NumberLanguage}>
                <div className={styles.InfoLanguage}>
                  <span className={styles.LanguageName}>
                    JavaScript
                    <span className={styles.LangPercentage}>
                      <BsFillCircleFill
                        className={styles.IconPercentage}
                        size={11}
                      />
                      45%
                    </span>
                  </span>
                  <span className={styles.DoneProjects}>12 done projects</span>
                </div>
              </div>
              <div className={styles.NumberLanguage}>
                <div className={styles.InfoLanguage}>
                  <span className={styles.LanguageName}>
                    TypesScript
                    <span className={styles.LangPercentage}>
                      <BsFillCircleFill
                        className={styles.IconPercentage}
                        size={11}
                      />
                      26%
                    </span>
                  </span>
                  <span className={styles.DoneProjects}>08 done projects</span>
                </div>
              </div>
              <div className={styles.NumberLanguage}>
                <div className={styles.InfoLanguage}>
                  <span className={styles.LanguageName}>
                    Python
                    <span className={styles.LangPercentage}>
                      <BsFillCircleFill
                        className={styles.IconPercentage}
                        size={11}
                      />
                      21%
                    </span>
                  </span>
                  <span className={styles.DoneProjects}>06 done projects</span>
                </div>
              </div>
              <div className={styles.NumberLanguage}>
                <div className={styles.InfoLanguage}>
                  <span className={styles.LanguageName}>
                    React Native
                    <span className={styles.LangPercentage}>
                      <BsFillCircleFill
                        className={styles.IconPercentage}
                        size={11}
                      />
                      08%
                    </span>
                  </span>
                  <span className={styles.DoneProjects}>02 done projects</span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
};

export default MyProjectsSide;
