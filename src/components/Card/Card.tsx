import styles from "./card.module.scss";

const Card = () => {
  return (
    <div className={styles.field}>
      <div className={styles.card}>
        <div className={styles.bg}>
          <h1 className={styles.title}>Название вопроса</h1>
          <p className={styles.text}>
            Вообще рандомный текст для некого вопроса, данный текст должен быть
            внушительных размеров, чтоб поместиться мог любой текст,но при этом
            не слишком длинный.
          </p>
          <div className={styles.difficult}>
            Difficult: <span>Easy</span>
          </div>
          <div className={styles.variants}>
            <button className={styles.variant}>Текст номер 1</button>
            <button className={styles.variant}>Текст номер 1</button>
            <button className={styles.variant}>Текст номер 1</button>
          </div>
          <div className={styles.optionalBtn}>
            <button className={styles.btn}></button>
            <button className={styles.btn}></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
