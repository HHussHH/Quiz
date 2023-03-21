import NavBar from "../NavBar/NavBar";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <NavBar />
      <Panel />
    </div>
  );
};
const Panel = () => <div className={styles.panel} />;
export default Header;
