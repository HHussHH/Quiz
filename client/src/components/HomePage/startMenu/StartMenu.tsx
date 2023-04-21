import { useNavigate } from "react-router-dom";
import { setStartStatus } from "../../../features/modalWindow/modalWindow-slice";
import { useAppDispatch, useAppSelector } from "../../../store";
import styles from "./startMenu.module.scss";
import GameFilter from "./GameFilter";
import { loadQuests } from "../../../features/question/quest-slice";
import { selectSettings } from "../../../features/gameSettings/setting-slice";

const StartMenu = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { difficulty, category, limit } = useAppSelector(selectSettings);

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
