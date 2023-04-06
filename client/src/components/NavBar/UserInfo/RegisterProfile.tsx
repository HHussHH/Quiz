import { useState } from "react";
import styles from "../Register/form.module.scss";
import LoginForm from "../Register/LoginForm";
import RegisterForm from "../Register/RegisterForm";

const RegisterProfile = () => {
  const [haveAcc, setHaveAcc] = useState(false);
  return (
    <div className={styles.form}>
      {haveAcc ? (
        <LoginForm setHaveAcc={setHaveAcc} />
      ) : (
        <RegisterForm setHaveAcc={setHaveAcc} />
      )}
    </div>
  );
};

export default RegisterProfile;
