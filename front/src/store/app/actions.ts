import { apiAuthLogin } from "../../api/auth";
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

export const appActions: AppState.ActionThunk = {
  appLogin: (params) => async (dispatch) => {
    console.log("app login action start");
    dispatch(appFetch());

    try {
      const tokenPair = await apiAuthLogin(params);
      dispatch(appFetchSuccess(tokenPair));
    } catch (err) {
      dispatch(appFetchError("Ошибка авторизации."));
    }
  },
};
