import { Link, Navigate } from "react-router-dom";
import {
  LOGIN,
  LOGIN_BUTTON,
  LOGIN_EMAIL_PLACEHOLDER,
  LOGIN_FAIL_MESSAGE,
  LOGIN_PASSWORD_PLACEHOLDER,
  LOGIN_QUESTION,
  LOGIN_REGISTER,
} from "../components/constants";
import { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "../UserContext";

const LoginPage = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [reDirectToHome, setReDirectToHome] = useState(false);
  const { setUser } = useContext(UserContext);
  const loginPageHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/login", {
        email,
        password,
      });
      setUser(data);
      alert("Login has been successful");
      setReDirectToHome(true);
    } catch (e) {
      console.log("-->coming in exception", e);
      alert(LOGIN_FAIL_MESSAGE);
    }
  };

  if (reDirectToHome) {
    return <Navigate to={"/"} />;
  }
  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-32">
        <h1 className="text-4xl text-center mt-8">{LOGIN}</h1>
        <form className="max-w-md mx-auto " onSubmit={loginPageHandler}>
          <input
            type="text"
            placeholder={LOGIN_EMAIL_PLACEHOLDER}
            className="border border-gray-300"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder={LOGIN_PASSWORD_PLACEHOLDER}
            className="border border-gray-300"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button className="primary">{LOGIN_BUTTON}</button>
        </form>
        <div className="text-center text-gray-500 py-2">
          {LOGIN_QUESTION}
          <Link className="underline text-black" to={"/Register"}>
            {LOGIN_REGISTER}
          </Link>{" "}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
