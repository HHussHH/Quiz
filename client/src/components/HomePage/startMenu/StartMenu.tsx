import { useNavigate } from "react-router-dom";
import { setStartStatus } from "../../../features/modalWindow/modalWindow-slice";
import { useAppDispatch } from "../../../store";
import styles from "./startMenu.module.scss";
import GameFilter from "./GameFilter";
import { loadQuests } from "../../../features/question/quest-slice";
import { useEffect } from "react";

const StartMenu = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleStart = (path: string) => {
    dispatch(setStartStatus(false));
    dispatch(loadQuests({ cat: "фильмы", lim: 10 }));
    navigate(`/${path}`);
  };
  const handleOpen = () => dispatch(setStartStatus(false));
  return (
    <>
      <div className={styles.panelBG} onClick={handleOpen} />
      <div className={styles.panel}>
        <div className={styles.close} onClick={handleOpen}>
          close
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
