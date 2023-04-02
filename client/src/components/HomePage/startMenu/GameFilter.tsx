import { setNewFilters } from "../../../features/question/quest-slice";
import { useAppDispatch } from "../../../store";
import { categoriec } from "../../../types";
import styles from "./startMenu.module.scss";
import React, { FunctionComponent, ChangeEvent } from "react";

const GameFilter = () => {
  const dispatch = useAppDispatch();

  type SectionProps = {
    value: categoriec;
    onChange: (event: ChangeEvent<{ value: categoriec }>) => void;
  };
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
  };
  return (
    <>
      <h2 className={styles.panelTitle}>Настройте игру под себя:</h2>

      <div className={styles.options}>
        <div className={styles.difficulty}>
          <h3 className={styles.title}>Выберите сложность:</h3>
          <select className={styles.select}>
            <option value="all">Все</option>
            <option value="easy">Легкая</option>
            <option value="normal">Нормальная</option>
            <option value="hard">Сложная</option>
          </select>
        </div>

        <div className={styles.theme}>
          <h3 className={styles.title}>Выберите темы:</h3>
          <select className={styles.select} onChange={() => handleChange}>
            <option value="Все">Все</option>
            <option value="Математика">Математика</option>
            <option value="Программирование">Программирование</option>
            <option value="Фильмы">Фильмы/Сериалы</option>
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
    </>
  );
};

export default GameFilter;
