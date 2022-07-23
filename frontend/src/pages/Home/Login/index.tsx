import { useState } from "react";
import { useForm } from "react-hook-form";
import { requestBackendLogin } from "util/request";
import ButtonIcon from "../../../components/ButtonIcon";
import "./styles.css";

type FormData = {
  username: string;
  password: string;
};

const Login = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const [hasError, setHasError] = useState(false);

  const onSubmit = (formData: FormData) => {
    setHasError(false);
    requestBackendLogin(formData)
      .then((response) => {
        console.log("SUCESSO", response);
      })
      .catch((e) => {
        setHasError(true);
        console.log("ERRO", e);
      });
  };

  return (
    <div className="base-card login-card">
      <h1>LOGIN</h1>
      {hasError && (
        <div className="alert alert-danger" role="alert">
        Erro ao tentar efetuar o login!
      </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("username")}
          placeholder="Email"
          className="base-input"
          type="text"
          name="username"
        />
        <input
          {...register("password")}
          placeholder="Senha"
          className="base-input"
          type="password"
          name="password"
        />
        <div className="login-submit">
          <ButtonIcon text={"Fazer Login"} />
        </div>
      </form>
    </div>
  );
};

export default Login;
