import styles from "./startMenu.module.scss";
import { Dispatch } from "react";
type startProps = {
  setOpen: Dispatch<React.SetStateAction<boolean>>;
};
const StartMenu = ({ setOpen }: startProps) => {
  const handleOpen = () => setOpen(false);
  return (
    <>
      <div className={styles.panelBG} onClick={handleOpen} />
      <div className={styles.panel}>
        <div className={styles.close} onClick={handleOpen}>
          close
        </div>
        <h2 className={styles.panelTitle}>Настройте игру под себя:</h2>

        <div className={styles.options}>
          <div className={styles.difficulty}>
            <h3 className={styles.title}>Выберите сложность:</h3>
            <select className={styles.select} name="difficulty" id="difficulty">
              <option value="all">Все</option>
              <option value="easy">Легкая</option>
              <option value="normal">Нормальная</option>
              <option value="hard">Сложная</option>
            </select>
          </div>

          <div className={styles.theme}>
            <h3 className={styles.title}>Выберите темы:</h3>
            <select className={styles.select} name="theme" id="theme">
              <option value="all">Все</option>
              <option value="math">Математика</option>
              <option value="program">Программирование</option>
              <option value="cinema">Фильмы/Сериалы</option>
            </select>
          </div>

          <div className={styles.count}>
            <h3 className={styles.title}>Выберите количество вопросов</h3>
            <select className={styles.select} name="theme" id="theme">
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
            </select>
          </div>
        </div>

        <button className={styles.btn}>Запуск</button>
      </div>
    </>
  );
};

export default StartMenu;
