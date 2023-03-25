import styles from "./questConter.module.scss";
import { useCounter } from "./useCounter";

type counterType = {
  questPosition: number;
};
const QuestCounter = ({ questPosition }: counterType) => {
  const [countQuestions, countCurrentAnswers] = useCounter();

  return (
    <h2 className={styles.counter}>
      {questPosition} / {countQuestions}
      <br />
      правильных ответов:{countCurrentAnswers}
    </h2>
  );
};

export default QuestCounter;
