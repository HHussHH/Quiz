import { useState } from "react";
import Header from "../components/Header/Header";
import Rules from "../components/Rules/Rules";
import Footer from "../components/Footer/Footer";
import styles from "./homepage.module.scss";
import StartMenu from "../components/startMenu/StartMenu";
import { useAppSelector } from "../store";
import { selectModal } from "../features/modalWindow/modalWindow-slice";
const HomePage = () => {
  const { startWindow } = useAppSelector(selectModal);

  return (
    <div
      className={styles.home}
      style={{ position: `${startWindow ? "fixed" : "relative"}` }}
    >
      {startWindow && <StartMenu />}

      <Header />
      <Rules />
      <Footer />
    </div>
  );
};

export default HomePage;
