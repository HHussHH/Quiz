import { ExitIntoAccount, selectUser } from "../../../features/User/user-slice";
import { useAppDispatch, useAppSelector } from "../../../store";
import { user } from "../../../types";
import styles from "./profile.module.scss";
const Profile = () => {
  const dispatch = useAppDispatch();
  const { list } = useAppSelector(selectUser);
  const setGuestAccount: user = {
    userId: 0,
    username: "Гость",
    mail: "",
    password: "",
    role: "user",
    coins: 0,
  };
  const handleExit = () => {
    dispatch(ExitIntoAccount(setGuestAccount));
  };
  return (
    <div className={styles.profle}>
      <h2>Имя:{list.username}</h2>
      <h3>Почта:{list.mail}</h3>
      <h3>Роль:{list.role}</h3>
      <h3>Монет:{list.coins}</h3>
      <button onClick={handleExit}>Выйти</button>
    </div>
  );
};

export default Profile;
