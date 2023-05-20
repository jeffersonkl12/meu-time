import { Form } from "react-router-dom";
import "./login.css";
import InputSimple from "../components/InputSimple";


const Login = () => {
  return <div id="login" className="">
    <div className="login__container">
      <Form className="login__formulario flex fd-c f-jc-c" method="POST">
        <h2 className="login__titulo">Login</h2>
        <div className="login__campos flex f-jc-c">
          <label className="login__label flex f-ai-c" htmlFor="token">Token: 
            <InputSimple type="text" placeHolder="digite token..."/>
          </label>
        </div>
        <input className="login__submmit btn__type1" type="submit" value={"Entrar"}/>
      </Form>
    </div>
  </div>;
};

export default Login;
