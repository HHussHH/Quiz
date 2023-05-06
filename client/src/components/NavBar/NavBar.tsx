import styles from "./NavBar.module.scss";

import { CgProfile } from "react-icons/cg";
import { ReactComponent as LogoIcon } from "../../img/logo.svg";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useAppSelector } from "../../store";
import { selectUser } from "../../features/User/user-slice";
import RegisterProfile from "./UserInfo/RegisterProfile";
import Profile from "./UserInfo/Profile";
const NavBar = () => {
  const [windowOpen, setWindowOpen] = useState<boolean>(false);
  const { list } = useAppSelector(selectUser);

  const handleClick = () => {
    setWindowOpen(!windowOpen);
  };
  const registerWindow = windowOpen ? <RegisterProfile /> : "";
  const profileWindow = windowOpen ? <Profile /> : "";

  return (
    <div className={styles.nav}>
      <div className="container">
        <nav className={styles.menu}>
          <NavLink to="/" className={styles.logo}>
            <LogoIcon /> <span>Quiz.</span>
          </NavLink>
          <ul>
            <NavLink to="/search-game">Поиск игры</NavLink>
            <NavLink to="/top">Рейтинг</NavLink>
            <NavLink to="/help">Обратная связь</NavLink>
          </ul>
          <div className={styles.profile}>
            <CgProfile color="white" size={28} onClick={handleClick} />
            <span>{list.username}</span>
          </div>
        </nav>
        {list.userId === 0 ? registerWindow : profileWindow}
      </div>
    </div>
  );
};

export default NavBar;
