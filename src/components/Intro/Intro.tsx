import styles from "../Header/header.module.scss";
import { useNavigate } from "react-router-dom";
const Intro = () => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(`/${path}`);
  };
  return (
    <header className={styles.intro}>
      <h1 className={styles.title}>Начни играть прямо сейчас!</h1>
      <p className={styles.text}>
        Регистрируйся и <span>играй</span> совершенно бесплатно!
      </p>
      <p className={styles.text}>
        Интеллектуальная игру "Quiz" покажи всем свой уровень знаний!
      </p>
      <button
        className={styles.btn}
        onClick={() => {
          handleNavigate("game");
        }}
      >
        Старт
      </button>
    </header>
  );
};

export default Intro;
