import styles from '../style.module.scss'

const FAQCard = ({ title, body, tags}) => {
    return (
      <div className={styles.cardfaq}>
        <p>{title}</p>
        <div>
        {tags.map(tag => (
          <span>{tag}</span>
        ))}
        </div>
        <span><p>{body}</p></span>
      </div>
    );
  };
export default FAQCard;