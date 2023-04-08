import { selectUser } from "../../../features/User/user-slice";
import { setStartStatus } from "../../../features/modalWindow/modalWindow-slice";
import { getStat } from "../../../features/statistics/statistics-slice";
import { useAppDispatch, useAppSelector } from "../../../store";
import styles from "../Header/header.module.scss";

const Intro = () => {
  const dispatch = useAppDispatch();
  const { list } = useAppSelector(selectUser);
  const handleStart = () => {
    dispatch(setStartStatus(true));
    dispatch(getStat({ id: list.userId }));
  };
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
      <button className={styles.btn} onClick={handleStart}>
        Старт
      </button>
    </header>
  );
};

export default Intro;
