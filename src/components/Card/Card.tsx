import styles from "./card.module.scss";
import { useAppDispatch, useAppSelector } from "../../store";
import { setAnswer } from "../../features/selectAnswer/answer-slice";

type btn = {
  [key: string]: string;
};
const Card = () => {
  const dispatch = useAppDispatch();
  const answer = useAppSelector((state) => state.currentAnswer);

  const handleClick = (id: string) => {
    dispatch(setAnswer(id));
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
        <h1 className={styles.title}>Название вопроса</h1>
        <p className={styles.text}>
          Вообще рандомный текст для некого вопроса, данный текст должен быть
          внушительных размеров, чтоб поместиться мог любой текст,но при этом не
          слишком длинный.
        </p>
        <div className={styles.difficult}>
          Difficulty: <span>Easy</span>
        </div>
        <div className={styles.variants}>
          {buttons.map(({ text, id }, key) => (
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
          <button className={styles.btn}></button>
          <button className={styles.btn}></button>
        </div>
      </div>
    </div>
  );
};

export default Card;
