import styles from "./card.module.scss";
const SearchGameCard = () => {
  return (
    <div className={styles.card}>
      <h2 className={styles.author}>Создатель игры: Оля</h2>
      <div className={styles.profile}></div>
      <h3 className={styles.gameTheme}>
        Темы для вопросов:
        <br /> Кино, Программирование, биология
      </h3>
      <div className={styles.questCount}>
        Количество вопросов:<span>10</span>
      </div>
      <div className={styles.difficulty}>
        Сложность карточки:<span>Любая</span>
      </div>

      <button className={styles.btn}>Присоединиться</button>
    </div>
  );
};

export default SearchGameCard;
