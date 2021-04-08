import { apiAuthLogin } from "../../api/auth";
import { apiUserCreate } from "../../api/user";
import { browserHistory } from "../../browserHistory";
import { App } from "../../types/app";
import { AppAction } from "./appAction";
import { AppState } from "./types";

const appFetch = (): AppState.Action.Fetch => ({
  type: AppAction.Fetch,
});

const appFetchSuccess = (payload: App.Token): AppState.Action.FetchSuccess => ({
  type: AppAction.FetchSuccess,
  payload,
});

const appFetchError = (payload: string): AppState.Action.FetchError => ({
  type: AppAction.FetchError,
  payload,
});

const appCreateUser = (): AppState.Action.CreateUser => ({
  type: AppAction.CreateUser,
});

const appCreateUserSuccess = (): AppState.Action.CreateUserSuccess => ({
  type: AppAction.CreateUserSuccess,
});

const appCreateUserError = (payload: string): AppState.Action.CreateUserError => ({
  type: AppAction.CreateUserError,
  payload,
});

export const appClearError = (): AppState.Action.ClearError => ({
  type: AppAction.ClearError,
});

export const appLogin: AppState.ThunkActions.AppLogin = (params) => async (dispatch) => {
  dispatch(appFetch());

  try {
    const tokenPair = await apiAuthLogin(params);
    dispatch(appFetchSuccess(tokenPair));
  } catch (err) {
    dispatch(appFetchError("Ошибка авторизации."));
  }
  browserHistory.push("/");
};

export const appSignUp: AppState.ThunkActions.AppSignUp = (params) => async (dispatch) => {
  dispatch(appCreateUser());

  try {
    await apiUserCreate(params);
    dispatch(appCreateUserSuccess());
  } catch (err) {
    dispatch(appCreateUserError("Ошибка регистрации."));
  }
  browserHistory.push("/auth/login");
};
