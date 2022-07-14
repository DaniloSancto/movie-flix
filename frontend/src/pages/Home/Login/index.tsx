import { Link } from "react-router-dom";
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
            <Link to="/movies">
              <ButtonIcon text={"Fazer Login"} />
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
