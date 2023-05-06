import { registerUser } from "../../../features/User/user-slice";
import styles from "./RegisterForm.module.scss";
import { useAppDispatch } from "../../../store";
//Приписываем типа дааных который  мы получем в объекте props
type RegisterForm = {
  setHaveAcc: React.Dispatch<React.SetStateAction<boolean>>;
};

const RegisterForm = ({ setHaveAcc }: RegisterForm) => {
  //используем кастомный hook для обработки изменений
  const dispatch = useAppDispatch();
  const handleSubmitRegister = (e: React.FormEvent<HTMLFormElement>) => {
    //приводим действия формы к ручной настройке
    e.preventDefault();
    setHaveAcc(true);
    //Отправляем данные в redux
    dispatch(
      registerUser({
        login: e.currentTarget.login.value,
        email: e.currentTarget.email.value,
        password: e.currentTarget.password.value,
      })
    );
  };

  return (
    <form className={styles.form} onSubmit={handleSubmitRegister}>
      <h2 className={styles.form_title}>Регистрация</h2>
      <input
        className={styles.form_input}
        name="email"
        placeholder="Введите вашу почту"
        type="email"
      />
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
        value="Зарегистрироваться"
      />
      <p>
        У вас уже есть аккаунт?
        <span className={styles.form_link} onClick={() => setHaveAcc(true)}>
          Авторизироваться{" "}
        </span>
      </p>
    </form>
  );
};

export default RegisterForm;
