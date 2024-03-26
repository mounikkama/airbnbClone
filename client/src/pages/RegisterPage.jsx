import { Link } from "react-router-dom";
import {
  LOGIN_EMAIL_PLACEHOLDER,
  LOGIN_NAME_PLACEHOLDER,
  LOGIN_PASSWORD_PLACEHOLDER,
  REGISTER,
  REGISTER_BUTTON,
  REGISTER_FAIl_MESSAGE,
  REGISTER_LOGIN,
  REGISTER_QUESTION,
  REGISTER_SUCCESS_MESSAGE,
} from "../components/constants";
import { useState } from "react";
import axios from "axios";

const RegisterPage = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const registerSubmitHandler =async (e) => {
    e.preventDefault();
try{
  await axios.post("/register", {
    name,
    email,
    password,
  });
  alert(REGISTER_SUCCESS_MESSAGE)
}
catch{
  alert(REGISTER_FAIl_MESSAGE)

}
  };

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-32">
        <h1 className="text-4xl text-center mt-8">{REGISTER}</h1>
        <form className="max-w-md mx-auto " onSubmit={registerSubmitHandler}>
          <input
            type="text"
            placeholder={LOGIN_NAME_PLACEHOLDER}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300"
          />
          <input
            type="text"
            placeholder={LOGIN_EMAIL_PLACEHOLDER}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300"
          />
          <input
            type="password"
            placeholder={LOGIN_PASSWORD_PLACEHOLDER}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300"
          />
          <button className="primary">{REGISTER_BUTTON}</button>
        </form>
        <div className="text-center text-gray-500 py-2">
          {REGISTER_QUESTION}
          <Link className="underline text-black" to={"/Login"}>
            {REGISTER_LOGIN}
          </Link>{" "}
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
