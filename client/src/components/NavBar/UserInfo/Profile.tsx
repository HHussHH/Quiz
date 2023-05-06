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
    <div className={styles.profile}>
      <h2 className={styles.profile_name}>
        Имя:<span>{list.username}</span>
      </h2>
      <h3 className={styles.profile_mail}>Почта:{list.mail}</h3>
      <h3 className={styles.profile_role}>
        Роль:<span>{list.role}</span>
      </h3>
      <h3 className={styles.profile_coins}>
        Монет:<span>{list.coins}</span>
      </h3>
      <button className={styles.profile_btn} onClick={handleExit}>
        Выйти
      </button>
    </div>
  );
};

export default Profile;
