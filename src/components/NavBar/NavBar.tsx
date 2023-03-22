import styles from "./NavBar.module.scss";
import { ImSearch } from "react-icons/im";
import { CgProfile } from "react-icons/cg";
import { ReactComponent as LogoIcon } from "../../img/logo.svg";
const NavBar = () => {
  return (
    <div className={styles.nav}>
      <div className="container">
        <nav className={styles.menu}>
          <div className={styles.logo}>
            <LogoIcon /> <span>Quiz.</span>
          </div>
          <ul>
            <li>Поиск игры</li>
            <li>Друзья</li>
            <li>Инвентарь</li>
            <li>Маркет</li>
          </ul>
          <div className={styles.profile}>
            <ImSearch color="white" size={24} />
            <CgProfile color="white" size={28} />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
