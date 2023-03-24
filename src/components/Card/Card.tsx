import styles from "./card.module.scss";
import { useAppDispatch, useAppSelector } from "../../store";
import { setAnswer } from "../../features/selectAnswer/answer-slice";
import { useState } from "react";

type btn = {
  [key: string]: string;
};

const Card = () => {
  const [questNumber, setQuestNumber] = useState<number>(0);
  const dispatch = useAppDispatch();
  const answer = useAppSelector((state) => state.currentAnswer);
  const quests = useAppSelector((state) => state.quests);

  const handleClick = (id: string) => {
    dispatch(setAnswer(id));
  };

  const nextQuest = () => {
    setQuestNumber((quest) => quest + 1);
  };

  const prevQuest = () => {
    setQuestNumber((quest) => quest - 1);
    if (questNumber === 0) {
      setQuestNumber(0);
    }
  };

  const buttons: btn[] = [
    {
      id: "answer_1",
      text: "Текст номер 1",
    },
    {
      id: "answer_2",
      text: "Текст номер 2",
    },
    {
      id: "answer_3",
      text: "Текст номер 3",
    },
  ];

  return (
    <div className={styles.card}>
      <div className={styles.bg}>
        <h1 className={styles.title}>{quests[questNumber].title}</h1>
        <p className={styles.text}>{quests[questNumber].text}</p>
        <div className={styles.difficult}>
          Difficulty: <span>{quests[questNumber].difficutly}</span>
        </div>
        <div className={styles.variants}>
          {quests[questNumber].answers.map(({ text, id }, key) => (
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
          <button className={styles.btn} onClick={() => nextQuest()}></button>
          <button className={styles.btn} onClick={() => prevQuest()}></button>
        </div>
      </div>
    </div>
  );
};

export default Card;
