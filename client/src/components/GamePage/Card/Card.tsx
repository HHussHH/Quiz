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
import { useNavigate } from "react-router-dom";
import { useCounter } from "../QuestCounter/useCounter";

const Card = () => {
  const [countQuestions] = useCounter();

  const navigate = useNavigate();
  //получение данных из store
  const dispatch = useAppDispatch();
  const answer = useAppSelector(selectAnswer);

  const { list, currentQuest } = useAppSelector(selectQuest);
  // поиск конкретных данных
  const quest = list.find((el) => el.id === currentQuest);
  const index = list.findIndex((quest) => quest.id === currentQuest);
  const position = index + 1;
  // типизация ответов
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
        "загрузка..."
      ) : (
        <div className={styles.bg}>
          <p className={styles.quest_info}>
            Всего вопросов:<span>{countQuestions}</span>
          </p>
          <p className={styles.quest_current}>
            Вы находитесь на <span>{position}</span> вопросе
          </p>
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
            <button className={styles.btn_red} onClick={() => navigate("/")}>
              Сдаться
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
