import {
  selectQuest,
  setNewTime,
} from "../../../features/question/quest-slice";
import { useAppDispatch, useAppSelector } from "../../../store";
import styles from "./timer.module.scss";
import { useEffect } from "react";

const Timer = () => {
  const dispatch = useAppDispatch();
  const { list, currentQuest } = useAppSelector(selectQuest);

  //находим время для нужного нам квеста по его id
  const questTime = list.find((el) => el.id === currentQuest);
  //Берем данные о том, сколько времени осталось
  const newTime = questTime?.currentTime;
  //Берем данные о том, сколько времени было дано
  const timeForQuest = questTime?.timeForQuest;

  //Интервальное отнятие времени (каждую секунду -1)
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (newTime) {
        if (newTime > 0) {
          dispatch(setNewTime(currentQuest));
        } else {
          clearInterval(intervalId);
        }
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [currentQuest, newTime, dispatch]);

  //формула для высчита длины полосы в % соотношении ко времени
  const width = (number: number, base: number) => {
    return (number / base) * 100;
  };

  return (
    <div className={styles.timer}>
      <span className={styles.time}>{newTime}</span>
      <div className={styles.timelineRed}>
        <div
          className={styles.timeline}
          style={{ width: `${width(newTime || 0, timeForQuest || 30)}%` }}
        />
      </div>
    </div>
  );
};

export default Timer;
