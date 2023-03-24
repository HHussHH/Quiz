import styles from "./timer.module.scss";
import { useAppDispatch, useAppSelector } from "../../store";
import { setTime } from "../../features/timer/timer-slice";
const Timer = () => {
  const dispatch = useAppDispatch();
  const currentTime = useAppSelector((state) => state.timer.currentTime);

  const timerSys = () => {
    if (currentTime >= 1) {
      dispatch(setTime(1));
    }
    if (currentTime <= 0) {
      return;
    }
  };

  setTimeout(timerSys, 1000);

  const width = (number: number, base: number) => {
    return (number / base) * 100;
  };
  return (
    <div className={styles.timer}>
      <span className={styles.time}>{currentTime}</span>
      <div className={styles.timelineRed}>
        <div
          className={styles.timeline}
          style={{ width: `${width(currentTime, 30)}%` }}
        />
      </div>
    </div>
  );
};

export default Timer;
