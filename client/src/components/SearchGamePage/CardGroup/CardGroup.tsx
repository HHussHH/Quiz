import styles from "./group.module.scss";
import {
  selectSettings,
  setCat,
  setCount,
  setDiff,
} from "../../../features/gameSettings/setting-slice";
import { useAppDispatch, useAppSelector } from "../../../store";
import { categoriec, difficulty, limit } from "../../../types";
import { setStartStatus } from "../../../features/modalWindow/modalWindow-slice";
import { loadQuests } from "../../../features/question/quest-slice";
import { useNavigate } from "react-router-dom";

import { selectUser } from "../../../features/User/user-slice";
import { selectStatistics } from "../../../features/statistics/statistics-slice";
const CardGroup = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector(selectUser);
  const statisticsInfo = useAppSelector(selectStatistics);

  const coins = userInfo.list.coins;
  const matchesPlayed = statisticsInfo.list.matchesPlayed;
  const completedQuests = statisticsInfo.list.completedQuests;

  //отправляем данные на сервер
  const handleChangeCat = (
    e: React.ChangeEvent<HTMLSelectElement & { value: categoriec }>
  ) => {
    dispatch(setCat(e.target.value));
  };
  //отправляем данные на сервер
  const handleChangeDiff = (
    e: React.ChangeEvent<HTMLSelectElement & { value: difficulty }>
  ) => {
    dispatch(setDiff(e.currentTarget.value));
  };
  //отправляем данные на сервер
  const handleChangeLim = (
    e: React.ChangeEvent<HTMLSelectElement & { value: limit }>
  ) => {
    dispatch(setCount(e.target.value));
    // console.log(e.target.value);
  };
  //отправляем данные в redux
  const { difficulty, category, limit } = useAppSelector(selectSettings);
  //отправляем данные d redux для старта игры
  const handleStart = (path: string) => {
    dispatch(setStartStatus(false));
    dispatch(loadQuests({ cat: category, lim: limit, diff: difficulty }));
    navigate(`/${path}`);
  };
  return (
    <div className={styles.group}>
      <div>
        <h2>Статистика</h2>
        <div>
          <p>
            Ваше количетсво сыгранных матчей:<span>{matchesPlayed}</span>
          </p>
          <p>
            Ваше количетсво выполненых вопросов:<span>{completedQuests}</span>
          </p>
          <p>
            Ваше количетсво монет:<span>{coins}</span>
          </p>
        </div>
      </div>
      <div>
        <h2>Подбор игры</h2>
        <div>
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
          <button className={styles.btn} onClick={() => handleStart("game")}>
            Запуск
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardGroup;
