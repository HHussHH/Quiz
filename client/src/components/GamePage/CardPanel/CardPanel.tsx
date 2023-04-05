import { useNavigate } from "react-router-dom";
import { useCounter } from "../QuestCounter/useCounter";
import styles from "./CardPanel.module.scss";
import { selectQuest } from "../../../features/question/quest-slice";
import { useAppSelector } from "../../../store";
type panelType = {
  questPosition: number;
};
const CardPanel = () => {
  const navigate = useNavigate();
  const [countQuestions] = useCounter();

  const { list, currentQuest } = useAppSelector(selectQuest);
  const index = list.findIndex((quest) => quest.id === currentQuest);
  const position = index + 1;
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
          Вы на <span>{position}</span> вопросе
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
