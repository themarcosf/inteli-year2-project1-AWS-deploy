import styles from "./FAQMain.module.scss";
import FAQList from "../FAQList/FAQList.js"

const FAQMain = () => {
  const cards = [
    {
      id: 1,
      title: "  How to post a project?",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet a lacus eget hendrerit. Cras non convallis quam, sit amet congue risus. Pellentesque quis accumsan dolor. Donec volutpat libero dui, vel accumsan nunc volutpat ut. Morbi id feugiat est, sed aliquet ante.",
      tags: ["project", "Add"],
    },
    {
      id: 2,
      title: "Can anyone post a project?",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet a lacus eget hendrerit. Cras non convallis quam, sit amet congue risus. Pellentesque quis accumsan dolor. Donec volutpat libero dui, vel accumsan nunc volutpat ut. Morbi id feugiat est, sed aliquet ante.  ",
      tags: ["project", "Add"],
    },
    {
      id: 3,
      title: "How to post a project?",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet a lacus eget hendrerit. Cras non convallis quam, sit amet congue risus. Pellentesque quis accumsan dolor. Donec volutpat libero dui, vel accumsan nunc volutpat ut. Morbi id feugiat est, sed aliquet ante. ",
      tags: ["project", "Add"],
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.contentHeader}>
          <h1>FAQ - Frequently Asked Question</h1>
          <button>Ask a question</button>
        </div>
        <div className={styles.feed}>
          <FAQList cards={cards}/>
        </div>
      </div>
    </div>
  );
};

export default FAQMain;
