import NavBar from "../NavBar/NavBar";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <NavBar />
      <Intro />
      <Panel />
    </div>
  );
};

const Intro = () => (
  <header className={styles.intro}>
    <h1 className={styles.title}>Начни играть прямо сейчас!</h1>
    <p className={styles.text}>
      Регистрируйся и <span>играй</span> совершенно бесплатно!
    </p>
    <p className={styles.text}>
      Интеллектуальная игру "Quiz" покажи всем свой уровень знаний!
    </p>
    <button className={styles.btn}>Старт</button>
  </header>
);
const Panel = () => <div className={styles.panel} />;
export default Header;
