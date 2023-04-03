import styles from "./NavBar.module.scss";
import { ImSearch } from "react-icons/im";
import { CgProfile } from "react-icons/cg";
import { ReactComponent as LogoIcon } from "../../img/logo.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import RegisterForm from "./Register/RegisterForm";
const NavBar = () => {
  const [windowOpen, setWindowOpen] = useState<boolean>(false);
  return (
    <div className={styles.nav}>
      <div className="container">
        <nav className={styles.menu}>
          <NavLink to="/" className={styles.logo}>
            <LogoIcon /> <span>Quiz.</span>
          </NavLink>
          <ul>
            <NavLink to="/search-game">Поиск игры</NavLink>
            <NavLink to="/friends">Друзья</NavLink>
            <NavLink to="/invetnory">Инвентарь</NavLink>
            <NavLink to="/market">Маркет</NavLink>
          </ul>
          <div className={styles.profile}>
            <ImSearch color="white" size={24} />
            <CgProfile
              color="white"
              size={28}
              onClick={() => setWindowOpen(!windowOpen)}
            />
            <span>Гость</span>
            {windowOpen ? <RegisterForm /> : ""}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
