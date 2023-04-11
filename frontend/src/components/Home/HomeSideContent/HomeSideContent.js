import styles from "./HomeSideContent.module.scss";

import SearchBox from '../../SearchBox/SearchBox';
import Footer from '../../Footer/Footer';

import { BsInfoCircleFill } from "react-icons/bs";
import { VscCircleFilled } from "react-icons/vsc";
import { FiMoreHorizontal } from "react-icons/fi";
import { RiSubtractLine } from "react-icons/ri";


import FirstPlace from '../../../assets/firstPlace.png';
import SecondPlace from '../../../assets/secondPlace.png';
import ThirdPlace from '../../../assets/thirdPlace.png';

import FirstProfile from '../../../assets/firstProfile.jfif';
import SecondProfile from '../../../assets/secondProfile.jfif';
import ThirdProfile from '../../../assets/thirdProfile.jfif';
import YouProfile from '../../../assets/youProfile.jfif';

const HomeSideContent = () => {
  return (
    <div className={styles.SideContent}>
      <SearchBox />
      <div className={styles.IntKeyWords}>
        <p>Key-words you may be interested</p>
        <div className={styles.AllKeyWords}>
          <div className={styles.SugKeyWords}>Python</div>
          <div className={styles.SugKeyWords}>JavaScript</div>
          <div className={styles.SugKeyWords}>C++</div>
          <div className={styles.SugKeyWords}>Back-end</div>
          <div className={styles.SugKeyWords}>Front-end</div>
          <div className={styles.SugKeyWords}>NextJS</div>
          <div className={styles.SugKeyWords}>NestJS</div>
          <div className={styles.SugKeyWords}>React</div>
          <div className={styles.SugKeyWords}>React Native</div>
          <div className={styles.SugKeyWords}>CSS</div>
          <div className={styles.SugKeyWords}>C#</div>
          <div className={styles.SugKeyWords}>TypeScript</div>
        </div>
      </div>
      <div className={styles.Ranking}>
        <div className={styles.RankingIntro}>
          <span className={styles.RankingTittle}>Ranking 
          <VscCircleFilled className={styles.CircleIcon} size={6} />
          <span className={styles.timeRanking}>10m ago</span>
          <BsInfoCircleFill className={styles.InfoIcon} size={15} />
          </span>
          <span className={styles.RankingSubTittle}>Ranking based on user dell points</span>
        </div>
        <div className={styles.RankingContent}>
          <div className={styles.RankingPlace}>
            <div className={styles.SpanPlaceImg}><img src={FirstPlace}></img></div>
            <div className={styles.SpanProfileImg}><img src={FirstProfile}></img></div>
            <div className={styles.InfoProfile}>
              <span className={styles.ProfileName}>João Silva <span className={styles.ProfilePoints}>1000 Dell Points</span></span>
              <span className={styles.DoneProjects}>12 done projects</span>
            </div>
          </div>
          <div className={styles.RankingPlace}>
            <div className={styles.SpanPlaceImg}><img src={SecondPlace}></img></div>
            <div className={styles.SpanProfileImg}><img src={SecondProfile}></img></div>
            <div className={styles.InfoProfile}>
              <span className={styles.ProfileName}>Joana Low <span className={styles.ProfilePoints}>900 Dell Points</span></span>
              <span className={styles.DoneProjects}>14 done projects</span>
            </div>
          </div>
          <div className={styles.RankingPlace}>
            <div className={styles.SpanPlaceImg}><img src={ThirdPlace}></img></div>
            <div className={styles.SpanProfileImg}><img src={ThirdProfile}></img></div>
            <div className={styles.InfoProfile}>
              <span className={styles.ProfileName}>Amanda Souza <span className={styles.ProfilePoints}>800 Dell Points</span></span>
              <span className={styles.DoneProjects}>10 done projects</span>
            </div>
          </div>
          <FiMoreHorizontal className={styles.MoreRanking} size={19} />
          <div className={styles.RankingPlace}>
            <div className={styles.SpanPlaceImg}><RiSubtractLine className={styles.NoRanking} size={15} /></div>
            <div className={styles.SpanProfileImg}><img src={YouProfile}></img></div>
            <div className={styles.InfoProfile}>
              <span className={styles.ProfileName}>Você <span className={styles.ProfilePoints}>678 Dell Points</span></span>
              <span className={styles.DoneProjects}>04 done projects</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomeSideContent;