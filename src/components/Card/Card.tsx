import styles from "./card.module.scss";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  selectAnswer,
  setAnswer,
  setCurrentAnswer,
} from "../../features/selectAnswer/answer-slice";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { selectQuest } from "../../features/question/quest-slice";
import { setFinish } from "../../features/endGame/finishSlice";

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
  const quests = useAppSelector(selectQuest);

  const [questIdNumber, setQuestIdNumber] = useState<number>(0);

  //поиск нужного вопроса
  const quest = quests.find((el) => el.id === questIdNumber);
  //Задаем базовый вопрос(первый)
  useEffect(() => {
    setQuestIdNumber(quests[0].id);
  }, []);

  //Вносим в одно состояние id следующего вопроса,во второе состояение номер в массиве.
  const nextQuest = () => {
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
  //обработка выбраного ответа
  const handleClick = (id: string) => {
    dispatch(setAnswer(id));
  };

  //обновление данных для текущего вопроса
  useEffect(() => {
    if (quest) {
      setCurrentQuestId(quest.id);
    }
  }, [quest]);

  return (
    <div className={styles.card}>
      <div className={styles.bg}>
        <h1 className={styles.title}>{quest?.title}</h1>
        <p className={styles.text}>{quest?.text}</p>
        <div className={styles.difficult}>
          Difficulty: <span>{quest?.difficutly}</span>
        </div>
        <div className={styles.variants}>
          {quest?.answers.map(({ text, id }, key) => (
            <button
              className={`${styles.variant} ${
                answer === id ? styles.active : ""
              }`}
              onClick={() => handleClick(id)}
              key={key}
            >
              {text}
            </button>
          ))}
        </div>
        <div className={styles.optionalBtn}>
          <button className={styles.btn} onClick={() => nextQuest()}>
            Ответить
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
