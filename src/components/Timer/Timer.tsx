import styles from "./timer.module.scss";
import { useAppDispatch, useAppSelector } from "../../store";
import { selectQuest, setNewTime } from "../../features/question/quest-slice";
import { useEffect } from "react";

type timerProps = {
  currentQuestId: number;
};

const Timer = ({ currentQuestId }: timerProps) => {
  const dispatch = useAppDispatch();
  const timeLines = useAppSelector(selectQuest);

  //находим время для нужного нам квеста по его id
  const questTime = timeLines.find((el) => el.id === currentQuestId);
  //Берем данные о том, сколько времени осталось
  const newTime = questTime?.currentTime;
  //Берем данные о том, сколько времени было дано
  const timeForQuest = questTime?.timeForQuest;

  //Интервальное отнятие времени (каждую секунду -1)
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (newTime) {
        if (newTime > 0) {
          dispatch(setNewTime(currentQuestId));
        } else {
          clearInterval(intervalId);
        }
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [currentQuestId, newTime, dispatch]);

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
