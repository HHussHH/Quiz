import Intro from "../Intro/Intro";
import NavBar from "../NavBar/NavBar";
import Panel from "../Panel/Panel";
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

export default Header;
