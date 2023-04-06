import { registerUser } from "../../../features/User/user-slice";
import { useAppDispatch } from "../../../store";

type RegisterForm = {
  setHaveAcc: React.Dispatch<React.SetStateAction<boolean>>;
};

const RegisterForm = ({ setHaveAcc }: RegisterForm) => {
  const dispatch = useAppDispatch();
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

  return (
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
  );
};

export default RegisterForm;
