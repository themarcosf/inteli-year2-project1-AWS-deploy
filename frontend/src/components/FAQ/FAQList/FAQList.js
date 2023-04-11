import FAQCard from "../FAQCard/FAQCard";
import styles from '../style.module.scss'

const FAQCardList = ({ cards }) => {
    return (
      <div className={styles.cardlist}>
        {cards.map(card => (
          <FAQCard key={card.id} title={card.title} body={card.body} tags={card.tags}/>
        ))}
      </div>
    );
  };
  

export default FAQCardList;