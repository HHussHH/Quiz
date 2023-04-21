import {
  setCat,
  setCount,
  setDiff,
} from "../../../features/gameSettings/setting-slice";
import { useAppDispatch } from "../../../store";
import { categoriec, difficulty, limit } from "../../../types";
import styles from "./startMenu.module.scss";
import React from "react";

const GameFilter = () => {
  const dispatch = useAppDispatch();
  const handleChangeCat = (
    e: React.ChangeEvent<HTMLSelectElement & { value: categoriec }>
  ) => {
    dispatch(setCat(e.target.value));
  };

  const handleChangeDiff = (
    e: React.ChangeEvent<HTMLSelectElement & { value: difficulty }>
  ) => {
    dispatch(setDiff(e.currentTarget.value));
  };

  const handleChangeLim = (
    e: React.ChangeEvent<HTMLSelectElement & { value: limit }>
  ) => {
    dispatch(setCount(e.target.value));
    // console.log(e.target.value);
  };
  return (
    <>
      <h2 className={styles.panelTitle}>Настройте игру под себя:</h2>

      <div className={styles.options}>
        <div className={styles.difficulty}>
          <h3 className={styles.title}>Выберите сложность:</h3>
          <select
            className={styles.select}
            onChange={handleChangeDiff}
            defaultValue="all"
          >
            <option value="all">Все</option>
            <option value="easy">Легкая</option>
            <option value="normal">Нормальная</option>
            <option value="hard">Сложная</option>
          </select>
        </div>

        <div className={styles.theme}>
          <h3 className={styles.title}>Выберите темы:</h3>
          <select
            className={styles.select}
            onChange={handleChangeCat}
            defaultValue="все"
          >
            <option value="все">Все</option>
            <option value="математика">Математика</option>
            <option value="программирование">Программирование</option>
            <option value="фильмы">Фильмы</option>
          </select>
        </div>

        <div className={styles.count}>
          <h3 className={styles.title}>Выберите количество вопросов</h3>
          <select
            className={styles.select}
            onChange={handleChangeLim}
            defaultValue="10"
          >
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
