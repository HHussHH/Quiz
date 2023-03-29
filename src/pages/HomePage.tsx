import { useState } from "react";
import Header from "../components/Header/Header";
import Rules from "../components/Rules/Rules";
import Footer from "../components/Footer/Footer";
import styles from "./homepage.module.scss";
import StartMenu from "../components/startMenu/StartMenu";
const HomePage = () => {
  const [open, setOpen] = useState(true);

  return (
    <div
      className={styles.home}
      style={{ position: `${open ? "fixed" : "relative"}` }}
    >
      {open && <StartMenu setOpen={setOpen} />}

      <Header />
      <Rules />
      <Footer />
    </div>
  );
};

export default HomePage;
