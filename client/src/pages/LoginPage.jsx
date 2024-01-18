import { Link } from "react-router-dom";
import { LOGIN, LOGIN_BUTTON, LOGIN_EMAIL_PLACEHOLDER, LOGIN_PASSWORD_PLACEHOLDER, LOGIN_QUESTION, LOGIN_REGISTER } from "../components/constants";

const LoginPage = () => {
  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-32">
        <h1 className="text-4xl text-center mt-8">{LOGIN}</h1>
        <form className="max-w-md mx-auto ">
          <input
            type="text"
            placeholder={LOGIN_EMAIL_PLACEHOLDER}
            className="border border-gray-300"
          />
          <input
            type="password"
            placeholder={LOGIN_PASSWORD_PLACEHOLDER}
            className="border border-gray-300"
          />
          <button className="primary">{LOGIN_BUTTON}</button>
        </form>
        <div className="text-center text-gray-500 py-2">{LOGIN_QUESTION}<Link className="underline text-black" to={'/Register'}>{LOGIN_REGISTER}</Link> </div>
      </div>
      
    </div>
  );
};

export default LoginPage;
