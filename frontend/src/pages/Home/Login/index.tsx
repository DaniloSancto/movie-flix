import ButtonIcon from "../../../components/ButtonIcon";
import "./styles.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="base-card login-card">
        <h1>LOGIN</h1>
        <form className="login-form" action="Submit">
          <input placeholder="Email" type="text" />
          <input placeholder="Senha" type="text" />
          <div className="login-btn">
            <ButtonIcon text={"Fazer Login"} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
