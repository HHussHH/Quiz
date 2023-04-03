import styles from "./form.module.scss";

const RegisterForm = () => {
  return (
    <div className={styles.form}>
      <form>
        <h2>Регистрация</h2>
        <input placeholder="Введите вашу почту" type="email" />
        <input placeholder="Введите логин" type="text" />
        <input placeholder="Введите пароль" type="password" />
        <input type="submit" value="Зарегистрироваться." />
        <p>
          У вас уже есть аккаунт?<span>Авторизироваться </span>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;
