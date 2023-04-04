import { useState } from "react";
import { loadUser, registerUser } from "../../../features/User/user-slice";
import { useAppDispatch } from "../../../store";
import styles from "./form.module.scss";

const RegisterForm = () => {
  const dispatch = useAppDispatch();
  const [haveAcc, setHaveAcc] = useState(false);
  const handleSubmitRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setHaveAcc(true);
    dispatch(
      registerUser({
        login: e.currentTarget.login.value,
        email: e.currentTarget.email.value,
        password: e.currentTarget.password.value,
      })
    );
  };

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
    <div className={styles.form}>
      {haveAcc ? (
        <form onSubmit={handleSubmitAuth}>
          <h2>Авторизация</h2>
          <input name="login" placeholder="Введите логин" type="text" />
          <input name="password" placeholder="Введите пароль" type="password" />
          <input type="submit" value="Авторизироваться." />
          <p>
            У вас нет аккаунт?
            <span onClick={() => setHaveAcc(false)}>Зарегистрироваться</span>
          </p>
        </form>
      ) : (
        <form onSubmit={handleSubmitRegister}>
          <h2>Регистрация</h2>
          <input name="email" placeholder="Введите вашу почту" type="email" />
          <input name="login" placeholder="Введите логин" type="text" />
          <input name="password" placeholder="Введите пароль" type="password" />
          <input type="submit" value="Зарегистрироваться." />
          <p>
            У вас уже есть аккаунт?
            <span onClick={() => setHaveAcc(true)}>Авторизироваться </span>
          </p>
        </form>
      )}
    </div>
  );
};

export default RegisterForm;
