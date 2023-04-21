import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import styles from "./top.module.scss";
import { getTopCompleted, getTopPlayed } from "./selectTopInfo";

const Top = () => {
  interface ItopCompleted {
    username: string;
    completedQuests: number;
  }
  interface ItopPlayed {
    username: string;
    matchesPlayed: number;
  }

  const [topCompleted, setCompletedTop] = useState<ItopCompleted[]>([]);
  const [topPlayed, setTopPlayed] = useState<ItopPlayed[]>([]);

  useEffect(() => {
    getTopCompleted().then((res) => {
      setCompletedTop(res);
    });
    getTopPlayed().then((res) => {
      setTopPlayed(res);
    });
  }, []);

  const showTopCompleted = topCompleted.map((item, idx) => (
    <ul key={idx}>
      <span>{idx + 1}.</span>
      <p>{item.username}</p>
      <p>Количество верных ответов:{item.completedQuests}</p>
    </ul>
  ));

  const showTopPlayed = topPlayed.map((item, idx) => (
    <ul key={idx}>
      <span>{idx + 1}.</span>
      <p>{item.username}</p>
      <p>Количество матчей: {item.matchesPlayed}</p>
    </ul>
  ));

  return (
    <>
      <NavBar />
      <div className={styles.top}>
        <div className={styles.table}>
          <h2 className={styles.title}>
            Топ 5 игроков по количеству <b>Сыгранных игр</b>
          </h2>
          <li className={styles.positions}>{showTopPlayed}</li>
        </div>

        <div className={styles.table}>
          <h2 className={styles.title}>
            Топ 5 игроков по количеству <b>верных ответов</b>
          </h2>
          <li className={styles.positions}>{showTopCompleted}</li>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Top;
