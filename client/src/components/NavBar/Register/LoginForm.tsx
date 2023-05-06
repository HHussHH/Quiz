import { loadUser } from "../../../features/User/user-slice";
import { useAppDispatch } from "../../../store";
import styles from "./LoginForm.module.scss";
type LoginForm = {
  setHaveAcc: React.Dispatch<React.SetStateAction<boolean>>;
};
const LoginForm = ({ setHaveAcc }: LoginForm) => {
  const dispatch = useAppDispatch();

  const handleSubmitAuth = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setHaveAcc(true);
    dispatch(
      loadUser({
        login: e.currentTarget.login.value,
        password: e.currentTarget.password.value,
      })
    );
  };

  return (
    <form className={styles.form} onSubmit={handleSubmitAuth}>
      <h2 className={styles.form_title}>Авторизация</h2>
      <input
        className={styles.form_input}
        name="login"
        placeholder="Введите логин"
        type="text"
      />
      <input
        className={styles.form_input}
        name="password"
        placeholder="Введите пароль"
        type="password"
      />
      <input
        className={styles.form_btn}
        type="submit"
        value="Авторизироваться."
      />
      <p>
        У вас нет аккаунт?
        <span className={styles.form_link} onClick={() => setHaveAcc(false)}>
          Зарегистрироваться
        </span>
      </p>
    </form>
  );
};

export default LoginForm;
