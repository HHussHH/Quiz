import styles from "./timer.module.scss";
const Timer = () => {
  return (
    <div className={styles.timer}>
      <span className={styles.time}>27</span>
      <div className={styles.timeline} />
    </div>
  );
};

export default Timer;
