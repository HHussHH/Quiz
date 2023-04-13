import React from "react";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import styles from "./top.module.scss";
const Top = () => {
  return (
    <>
      <NavBar />
      <div className={styles.top}>
        <div className={styles.table}>
          <h2 className={styles.title}>
            Топ 5 игроков по количеству <b>Побед</b>
          </h2>
          <li className={styles.positions}>
            <ul>
              <span>1.</span>
              <p>Нариман</p>
            </ul>
            <ul>
              <span>2.</span>
              <p>Денис</p>
            </ul>
            <ul>
              <span>3.</span>
              <p>Наташа</p>
            </ul>
            <ul>
              <span>4.</span>
              <p>Даня</p>
            </ul>
            <ul>
              <span>5.</span>
              <p>Илья</p>
            </ul>
          </li>
        </div>

        <div className={styles.table}>
          <h2 className={styles.title}>
            Топ 5 игроков по количеству <b>игр</b>
          </h2>
          <li className={styles.positions}>
            <ul>
              <span>1.</span>
              <p>Оля</p>
            </ul>
            <ul>
              <span>2.</span>
              <p>Денис</p>
            </ul>
            <ul>
              <span>3.</span>
              <p>Нариман</p>
            </ul>
            <ul>
              <span>4.</span>
              <p>Наташа</p>
            </ul>
            <ul>
              <span>5.</span>
              <p>Илья</p>
            </ul>
          </li>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Top;
