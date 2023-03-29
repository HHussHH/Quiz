import { setStartStatus } from "../../features/modalWindow/modalWindow-slice";
import { useAppDispatch } from "../../store";
import styles from "../Header/header.module.scss";

const Intro = () => {
  const dispatch = useAppDispatch();

  return (
    <header className={styles.intro}>
      <h1 className={styles.title}>Начни играть прямо сейчас!</h1>
      <p className={styles.text}>
        Регистрируйся и{" "}
        <span onClick={() => dispatch(setStartStatus(true))}>играй</span>{" "}
        совершенно бесплатно!
      </p>
      <p className={styles.text}>
        Интеллектуальная игру "Quiz" покажи всем свой уровень знаний!
      </p>
      <button
        className={styles.btn}
        onClick={() => dispatch(setStartStatus(true))}
      >
        Старт
      </button>
    </header>
  );
};

export default Intro;
