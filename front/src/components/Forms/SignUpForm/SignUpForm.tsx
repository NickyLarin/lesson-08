import "./SignUpForm.css";
import { appSignUp } from "../../../store/app/actions";
import { AppState } from "../../../store/app/types";
import { connect, MapDispatchToProps, MapStateToProps } from "react-redux";
import { FormButton } from "../FormButton/FormButton";
import { Input } from "../../Input/Input";
import { InputType } from "../../Input/InputType";
import { Link } from "react-router-dom";
import { RootState } from "../../../store/types";
import * as Yup from "yup";
import block from "bem-cn";
import React from "react";
import { User } from "../../../types/user";
import { useFormik } from "formik";

interface StateProps {
  loading: boolean;
  errorText: string;
}

interface DispatchProps {
  appSignUp: AppState.ThunkActions.AppSignUp;
}

interface OwnProps {}

type Props = StateProps & DispatchProps & OwnProps;

const b = block("sign-up-form");

const schema: Yup.SchemaOf<User.Create.Params> = Yup.object().shape({
  login: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().required(),
  passwordConfirm: Yup.string()
    .required()
    .test("match", "Пароли не совпадают", (value, context) => value === context.parent.password),
});

const SignUpFormPresenter: React.FC<Props> = ({ loading, errorText, appSignUp }) => {
  const { values, submitForm, handleChange } = useFormik<User.Create.Params>({
    initialValues: {
      login: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
    validationSchema: schema,
    onSubmit: async (fields) => {
      appSignUp(fields);
    },
  });

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    submitForm().catch((err) => console.error(`SignUp form submit error: ${err}`));
  };

  return (
    <div className={b()}>
      <span className={b("img").mix("material-icons")}>app_registration</span>
      <form onSubmit={onSubmit}>
        <div className={b("inputs-container")}>
          <Input
            className={b("login-input")}
            name={"login"}
            htmlType={InputType.Text}
            placeholder={"Имя пользователя"}
            value={values.login}
            onChange={handleChange}
          />
          <Input
            className={b("email-input")}
            name={"email"}
            htmlType={InputType.Email}
            placeholder={"E-Mail"}
            value={values.email}
            onChange={handleChange}
          />
          <Input
            className={b("password-input")}
            name={"password"}
            htmlType={InputType.Password}
            placeholder={"Пароль"}
            value={values.password}
            onChange={handleChange}
          />
          <Input
            className={b("password-confirm-input")}
            name={"passwordConfirm"}
            htmlType={InputType.Password}
            placeholder={"Повторите пароль"}
            value={values.passwordConfirm}
            onChange={handleChange}
          />
          <FormButton className={b("sign-up-button")} text={"Зарегистрироваться"} />
        </div>
      </form>
      <span>
        Уже есть аккаунт? Войди
        <Link className={b("login-link")} to="/auth/login">
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

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = { appSignUp };

export const SignUpForm = connect(mapStateToProps, mapDispatchToProps)(SignUpFormPresenter);
