import { App } from "../../types/app";
import { Auth } from "../../types/auth";
import { Thunk } from "../../types/base";
import { AppAction } from "./appAction";
import { Action as ActionRedux } from "redux";
import { User } from "../../types/user";

export declare namespace AppState {
  interface State {
    readonly loading: boolean;
    readonly accessToken: string;
    readonly refreshToken: string;
    readonly errorText: string;
  }

  namespace Action {
    type Fetch = ActionRedux<AppAction.Fetch> & { payload?: undefined };
    type FetchSuccess = ActionRedux<AppAction.FetchSuccess> & { payload: App.Token };
    type FetchError = ActionRedux<AppAction.FetchError> & { payload: string };
    type CreateUser = ActionRedux<AppAction.CreateUser> & { payload?: undefined };
    type CreateUserSuccess = ActionRedux<AppAction.CreateUserSuccess> & { payload?: undefined };
    type CreateUserError = ActionRedux<AppAction.CreateUserError> & { payload: string };

    type All = Fetch | FetchSuccess | FetchError | CreateUser | CreateUserSuccess | CreateUserError;
  }

  namespace ThunkActions {
    type AppLogin = Thunk<Auth.Login.Params>;
    type AppSignUp = Thunk<User.Create.Params>;
  }
}
