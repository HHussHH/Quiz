import { useState } from "react";

import LoginForm from "../Register/LoginForm";
import RegisterForm from "../Register/RegisterForm";

const RegisterProfile = () => {
  const [haveAcc, setHaveAcc] = useState(false);
  return (
    <div>
      {haveAcc ? (
        <LoginForm setHaveAcc={setHaveAcc} />
      ) : (
        <RegisterForm setHaveAcc={setHaveAcc} />
      )}
    </div>
  );
};

export default RegisterProfile;
