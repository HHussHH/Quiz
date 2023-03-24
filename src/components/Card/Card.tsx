import { useState } from "react";
import styles from "./card.module.scss";

const Card = () => {
  type btn = {
    [key: string]: string;
  };
  const [active, setActive] = useState<string>("");

  const handleClick = (id: string) => {
    setActive(id);
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
                active === id ? styles.active : ""
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
