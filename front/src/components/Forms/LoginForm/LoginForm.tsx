import "./LoginForm.css";
import { AppState } from "../../../store/app/types";
import { Auth } from "../../../types/auth";
import { connect, MapDispatchToProps, MapStateToProps } from "react-redux";
import { FormButton } from "../FormButton/FormButton";
import { FormInput } from "../FormInput/FormInput";
import { InputType } from "../FormInput/InputType";
import { Link } from "react-router-dom";
import { RootState } from "../../../store/types";
import { useFormik } from "formik";
import * as Yup from "yup";
import block from "bem-cn";
import React, { FormEventHandler } from "react";
import { appLogin } from "../../../store/app/actions";

interface StateProps {
  loading: boolean;
  errorText: string;
}

interface DispatchProps {
  appLogin: AppState.ThunkActions.AppLogin;
}

interface OwnProps {}

type Props = OwnProps & StateProps & DispatchProps;

const b = block("login-form");

const schema: Yup.SchemaOf<Auth.Login.Params> = Yup.object().shape({
  login: Yup.string().required(),
  password: Yup.string().required(),
});

const LoginFormPresenter: React.FC<Props> = ({ loading, errorText, appLogin }) => {
  const { errors, values, submitForm, handleChange } = useFormik<Auth.Login.Params>({
    initialValues: {
      login: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: async (fields) => {
      appLogin(fields);
    },
  });

  const onSubmit: FormEventHandler<HTMLFormElement> = (e: React.SyntheticEvent) => {
    e.preventDefault();
    submitForm().catch((err) => console.error(`Login form submit error: ${err}`));
  };

  return (
    <div className={b()}>
      <span className={b("img").mix("material-icons")}>login</span>
      <form onSubmit={onSubmit}>
        <div className={b("inputs-container")}>
          <FormInput
            className={b("login-input")}
            name={"login"}
            htmlType={InputType.Text}
            placeholder={"Имя пользователя"}
            value={values.login}
            onChange={handleChange}
          />
          <FormInput
            className={b("password-input")}
            name={"password"}
            htmlType={InputType.Password}
            placeholder={"Пароль"}
            value={values.password}
            onChange={handleChange}
          />
          <FormButton className={b("login-button")} text={"Войти"} />
        </div>
      </form>
      <span>
        Нет аккаунта? Зарегистрируйся
        <Link className={b("sign-up-link")} to="/auth/sign-up">
          {" "}
          здесь
        </Link>
        .
      </span>
    </div>
  );
};

const mapStateToProps: MapStateToProps<StateProps, OwnProps, RootState.State> = ({ app }) => ({
  loading: app.loading,
  errorText: app.errorText,
});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = { appLogin };

export const LoginForm = connect(mapStateToProps, mapDispatchToProps)(LoginFormPresenter);
