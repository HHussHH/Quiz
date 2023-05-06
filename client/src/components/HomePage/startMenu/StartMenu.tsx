import { useNavigate } from "react-router-dom";
import { setStartStatus } from "../../../features/modalWindow/modalWindow-slice";
import { useAppDispatch, useAppSelector } from "../../../store";
import styles from "./startMenu.module.scss";
import GameFilter from "./GameFilter";
import { loadQuests } from "../../../features/question/quest-slice";
import { selectSettings } from "../../../features/gameSettings/setting-slice";

const StartMenu = () => {
  //используем катосмные хуки
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  //получем данные из хука, который будет использоваться для загрузки данных
  const { difficulty, category, limit } = useAppSelector(selectSettings);

  //отправляем данные в redux
  const handleStart = (path: string) => {
    dispatch(setStartStatus(false));
    dispatch(loadQuests({ cat: category, lim: limit, diff: difficulty }));
    navigate(`/${path}`);
  };

  const handleOpen = () => dispatch(setStartStatus(false));
  return (
    <>
      <div className={styles.panelBG} onClick={handleOpen} />
      <div className={styles.panel}>
        <div className={styles.close} onClick={handleOpen}>
          Закрыть
        </div>
        <GameFilter />
        <button className={styles.btn} onClick={() => handleStart("game")}>
          Запуск
        </button>
      </div>
    </>
  );
};

export default StartMenu;
