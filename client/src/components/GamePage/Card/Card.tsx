import styles from "./card.module.scss";
import { useAppDispatch, useAppSelector } from "../../../store";
import {
  selectAnswer,
  setAnswer,
  setCurrentAnswer,
} from "../../../features/selectAnswer/answer-slice";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { setFinish } from "../../../features/endGame/finishSlice";
import { selectQuest } from "../../../features/question/quest-slice";

type CardProps = {
  setCurrentQuestId: Dispatch<SetStateAction<number>>;
  setQuestPosition: Dispatch<SetStateAction<number>>;
  questPosition: number;
};

const Card = ({
  setCurrentQuestId,
  setQuestPosition,
  questPosition,
}: CardProps) => {
  const dispatch = useAppDispatch();
  const answer = useAppSelector(selectAnswer);
  const [questIdNumber, setQuestIdNumber] = useState<number>(0);
  const { list } = useAppSelector(selectQuest);
  const quests = list;

  //поиск нужного вопроса
  const quest = quests.find((el) => el.id === questIdNumber);

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
    if (quests.length > 0) {
      if (quest) setQuestIdNumber(quest.id);
      else {
        setQuestIdNumber(quests[0].id);
      }
    }
    // eslint-disable-next-line
  }, [quests]);

  useEffect(() => {
    if (quest?.currentTime === 0) {
      if (quests.length > questPosition) {
        setQuestPosition((q) => q + 1);
        setQuestIdNumber(quests[questPosition].id);
        dispatch(setAnswer(""));
      }
      if (quests.length === questPosition) {
        dispatch(setFinish(true));
      }
    } // eslint-disable-next-line
  }, [quest?.currentTime]);

  // Вносим в одно состояние id следующего вопроса,во второе состояение номер в массиве.
  const answerBtn = () => {
    if (quests.length > questPosition) {
      setQuestPosition((q) => q + 1);
      setQuestIdNumber(quests[questPosition].id);
      dispatch(setAnswer(""));
    }

    if (quest?.currentAnswer === answer) {
      dispatch(setCurrentAnswer());
    }

    if (quests.length === questPosition) {
      dispatch(setFinish(true));
    }
  };
  // обработка выбраного ответа
  const handleClick = (id: string) => {
    dispatch(setAnswer(id));
  };

  //обновление данных для текущего вопроса
  useEffect(() => {
    if (quest) {
      setCurrentQuestId(quest.id);
    }
  }, [quest, setCurrentQuestId]);

  return (
    <div className={styles.card}>
      {quests.length === 0 ? (
        "loading..."
      ) : (
        <div className={styles.bg}>
          <h1 className={styles.title}>{quest?.title}</h1>
          <p className={styles.text}>{quest?.title}</p>
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
