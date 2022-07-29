import { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { getAuthData, saveAuthData } from "util/auth";
import { requestBackendLogin } from "util/request";
import ButtonIcon from "../../../components/ButtonIcon";
import "./styles.css";

type FormData = {
  username: string;
  password: string;
};

const Login = () => {
  const [hasError, setHasError] = useState(false);

  const {register, handleSubmit, formState: { errors },} = useForm<FormData>();

  const history = useHistory();

  const onSubmit = (formData: FormData) => {
    requestBackendLogin(formData)
      .then((response) => {
        setHasError(false);
        saveAuthData(response.data);
        console.log(getAuthData().access_token);
        history.push('/movies');
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
        <div className="mb-4">
          <input
            {...register("username", {
              required: "Campo obrigatório",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "E-mail inválido",
              },
            })}
            placeholder="Email"
            className={`base-input w-100 form-control ${
              errors.username ? "is-invalid" : ""
            }`}
            type="text"
            name="username"
          />
          <div className="invalid-feedback d-block">
            {errors.username?.message}
          </div>
        </div>
        <div className="mb-4">
          <input
            {...register("password", {
              required: "Campo obrigatório",
            })}
            placeholder="Senha"
            className={`base-input w-100 form-control ${
              errors.password ? "is-invalid" : ""
            }`}
            type="password"
            name="password"
          />
          <div className="invalid-feedback d-block">
            {errors.password?.message}
          </div>
        </div>
        <div className="login-submit">
          <ButtonIcon text={"Fazer Login"} />
        </div>
      </form>
    </div>
  );
};

export default Login;
