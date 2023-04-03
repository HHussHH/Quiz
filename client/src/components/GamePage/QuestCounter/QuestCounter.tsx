import styles from "./questConter.module.scss";
import { useCounter } from "./useCounter";

const QuestCounter = () => {
  // eslint-disable-next-line
  const [_, countCurrentAnswers] = useCounter();

  return (
    <h2 className={styles.counter}>правильных ответов:{countCurrentAnswers}</h2>
  );
};

export default QuestCounter;