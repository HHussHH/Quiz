import { useNavigate } from "react-router-dom";
import { setClearList } from "../../../features/question/quest-slice";
import { useAppDispatch, useAppSelector } from "../../../store";
import styles from "./questConter.module.scss";
import { useCounter } from "./useCounter";
import { setFinish } from "../../../features/endGame/finishSlice";
import { setClearCurrentAnswer } from "../../../features/selectAnswer/answer-slice";
import {
  getStat,
  selectStatistics,
  updateStat,
} from "../../../features/statistics/statistics-slice";
import axios from "axios";
import { selectUser, updateDataUser } from "../../../features/User/user-slice";

const QuestCounter = () => {
  // eslint-disable-next-line
  const [_, countCurrentAnswers] = useCounter();
  const dispatch = useAppDispatch();
  const stat = useAppSelector(selectStatistics);
  const navigate = useNavigate();
  const user = useAppSelector(selectUser);
  const updateCoins = async (id: number, count: number) => {
    axios.get(
      `http://localhost:5000/users/user/update?count=${count}&id=${id}`
    );
  };

  const handleClick = () => {
    if (stat.list.userId === 0) {
      console.log("Пойман");
      navigate("/");
    } else {
      dispatch(
        updateStat({
          id: stat.list.userId,
          completed: stat.list.completedQuests + countCurrentAnswers,
          matches: stat.list.matchesPlayed + 1,
        })
      );
      dispatch(getStat({ id: stat.list.userId }));
      updateCoins(stat.list.userId, countCurrentAnswers + user.list.coins);
      dispatch(updateDataUser({ id: stat.list.userId }));
      dispatch(setClearList([]));
      dispatch(setFinish(false));
      dispatch(setClearCurrentAnswer());
      navigate("/");
    }
  };
  return (
    <div>
      <h2 className={styles.counter}>
        правильных ответов:{countCurrentAnswers}
      </h2>
      <button className={styles.exitBtn} onClick={handleClick}>
        Сохранить результат
      </button>
    </div>
  );
};

export default QuestCounter;
