import { useNavigate } from "react-router-dom";
import { setClearList } from "../../../features/question/quest-slice";
import { useAppDispatch } from "../../../store";
import styles from "./questConter.module.scss";
import { useCounter } from "./useCounter";
import { setFinish } from "../../../features/endGame/finishSlice";
import { setClearCurrentAnswer } from "../../../features/selectAnswer/answer-slice";

const QuestCounter = () => {
  // eslint-disable-next-line
  const [_, countCurrentAnswers] = useCounter();
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(setClearList([]));
    dispatch(setFinish(false));
    dispatch(setClearCurrentAnswer());
    navigate("/");
  };
  return (
    <div>
      <h2 className={styles.counter}>
        правильных ответов:{countCurrentAnswers}
      </h2>
      <button className={styles.exitBtn} onClick={handleClick}>
        Выйти в меню
      </button>
    </div>
  );
};

export default QuestCounter;
