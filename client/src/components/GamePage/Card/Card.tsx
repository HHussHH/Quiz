import styles from "./card.module.scss";
import { useAppDispatch, useAppSelector } from "../../../store";
import {
  selectAnswer,
  setAnswer,
  setCurrentAnswer,
} from "../../../features/selectAnswer/answer-slice";
import { useEffect } from "react";
import { setFinish } from "../../../features/endGame/finishSlice";
import {
  selectQuest,
  setNewCurrentQuest,
} from "../../../features/question/quest-slice";
import {
  getStat,
  selectStatistics,
  updateStat,
} from "../../../features/statistics/statistics-slice";

const Card = () => {
  const dispatch = useAppDispatch();
  const answer = useAppSelector(selectAnswer);
  const { list, currentQuest } = useAppSelector(selectQuest);
  const stat = useAppSelector(selectStatistics);
  const quest = list.find((el) => el.id === currentQuest);
  const index = list.findIndex((quest) => quest.id === currentQuest);
  const answers = [
    {
      id: "answer_1",
      text: quest?.answer_1,
    },
    {
      id: "answer_2",
      text: quest?.answer_2,
    },
    {
      id: "answer_3",
      text: quest?.answer_3,
    },
  ];

  //Задаем базовый вопрос(первый)
  useEffect(() => {
    if (list.length > 0) {
      if (quest) dispatch(setNewCurrentQuest(quest.id));
      else {
        dispatch(setNewCurrentQuest(list[index].id));
      }
    }
  }, []);

  useEffect(() => {
    if (quest?.currentTime === 0) {
      if (list.length > index) {
        const next = index + 1 === list.length ? index : index + 1;
        dispatch(setAnswer(""));
        dispatch(setNewCurrentQuest(list[next].id));
        if (list.length === index + 1) {
          dispatch(setFinish(true));
          dispatch(
            updateStat({
              id: stat.list.userId,
              completed: stat.list.completedQuests + 1,
              matches: stat.list.matchesPlayed + 1,
            })
          );
        }
      }
    } // eslint-disable-next-line
  }, [quest?.currentTime]);

  // Вносим в одно состояние id следующего вопроса,во второе состояение номер в массиве.
  const answerBtn = () => {
    if (list.length > index) {
      const next = index + 1 === list.length ? index : index + 1;
      dispatch(setAnswer(""));
      dispatch(setNewCurrentQuest(list[next].id));
      if (list.length === index + 1) {
        dispatch(setFinish(true));
        dispatch(
          updateStat({
            id: stat.list.userId,
            completed: stat.list.completedQuests + 1,
            matches: stat.list.matchesPlayed + 1,
          })
        );
      }
    }

    if (quest?.currentAnswer === answer) {
      dispatch(setCurrentAnswer());
    }
  };
  // обработка выбраного ответа
  const handleClick = (id: string) => {
    dispatch(setAnswer(id));
  };

  return (
    <div className={styles.card}>
      {list.length === 0 ? (
        "loading..."
      ) : (
        <div className={styles.bg}>
          <h1 className={styles.title}>{quest?.title}</h1>
          <p className={styles.text}>{quest?.text}</p>
          <div className={styles.difficult}>
            Difficulty: <span>{quest?.difficulty}</span>
          </div>
          <div className={styles.variants}>
            {answers.map(({ text, id }) => (
              <button
                className={`${styles.variant} ${
                  answer === id ? styles.active : ""
                }`}
                onClick={() => handleClick(id)}
                key={id}
              >
                {text}
              </button>
            ))}
          </div>
          <div className={styles.optionalBtn}>
            <button className={styles.btn} onClick={answerBtn}>
              Ответить
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
