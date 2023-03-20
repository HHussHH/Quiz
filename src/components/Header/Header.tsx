import NavBar from "../NavBar/NavBar";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <NavBar />
    </div>
  );
};

export default Header;
