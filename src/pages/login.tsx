import { useNavigate } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { CiUser } from "react-icons/ci";
import "./login.css";
import ButtonSimple from "../components/ButtonSimple";
import InputIcon from "../components/InputIcon";
import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider";

export interface LoginProps {
  token?: string;
  error?: boolean;
}

const Login: React.FunctionComponent<LoginProps> = ({ error }: LoginProps) => {
  const [token, setToken] = React.useState<string>("");
  const [errors, setErrors] = React.useState<boolean>(false);

  const { onLogin } = useContext(AuthContext);

  const navigate = useNavigate();

  function onChanceInput(e: React.ChangeEvent<HTMLInputElement>) {
    setToken(e.target.value);
  }

  async function onSubmitLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const header = new Headers();
    header.append("x-rapidapi-key", token);
    header.append("x-rapidapi-host", "v3.football.api-sports.io");

    const response = await fetch(
      "https://v3.football.api-sports.io".concat("/status"),
      {
        method: "GET",
        headers: header,
        redirect: "follow",
      }
    );

    const json = await response.json();

    if (json.errors.token === undefined) {
      console.log("autenticado");
      onLogin();
      navigate("/meu-time", { replace: true });
    } else {
      setErrors(true);
    }
  }

  return (
    <>
      <div id="login" className="flex f-jc-c f-ai-c">
        <div className="login__container">
          <div className="login__perfil">
            <CiUser />
          </div>
          <h4 className="login__titulo titulo">LOGIN</h4>
          <form
            className="login__formulario flex fd-c f-jc-c"
            method="POST"
            onSubmit={onSubmitLogin}
          >
            <div>
              <p className="login__error">
                {errors ? <span>Login invalido!</span> : null}
              </p>
              <InputIcon
                Icon={BiUser}
                placeHolder="digite o login..."
                name="token"
                value={token}
                onChancgeValue={onChanceInput}
              />
            </div>
            <ButtonSimple classes="login__btn" value="LOGIN" type="submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
