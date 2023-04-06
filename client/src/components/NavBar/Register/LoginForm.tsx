import { loadUser } from "../../../features/User/user-slice";
import { useAppDispatch } from "../../../store";

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
  );
};

export default LoginForm;
