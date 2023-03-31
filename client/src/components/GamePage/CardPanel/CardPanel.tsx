import { useNavigate } from "react-router-dom";
import { useCounter } from "../QuestCounter/useCounter";
import styles from "./CardPanel.module.scss";
type panelType = {
  questPosition: number;
};
const CardPanel = ({ questPosition }: panelType) => {
  const navigate = useNavigate();
  const [countQuestions] = useCounter();
  return (
    <div className={styles.panel}>
      <div className={styles.inner}>
        <h2 className={styles.title}>Quiz</h2>
        <h3 className={styles.subtitle}>
          Уровень:<span>Название</span>
        </h3>
        <p className={styles.questions}>
          Всего вопросов:<span> {countQuestions}</span>
        </p>
        <p className={styles.currentQuestion}>
          Вы на <span>{questPosition}</span> вопросе
        </p>

        <div className={styles.btns}>
          <button onClick={() => navigate("/")}>Сдаться</button>
          <button>Пожаловаться</button>
        </div>
      </div>
    </div>
  );
};

export default CardPanel;
