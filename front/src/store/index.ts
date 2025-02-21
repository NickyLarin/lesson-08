import { applyMiddleware, compose, createStore } from "redux";
import { PersistConfig } from "redux-persist/es/types";
import { persistStore } from "redux-persist";
import { rootReducer } from "./reducer";
import { RootState } from "./types";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/es/storage";
import thunk from "redux-thunk";
import { appClearError } from "./app/actions";

const config: PersistConfig<RootState.State> = {
  key: "catalog",
  storage,
};

const persistedReducer = persistReducer(config, rootReducer);

export const store = createStore(
  persistedReducer,
  compose(
    applyMiddleware(thunk),
    window?.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (arg: any) => arg
  )
);

export const persistor = persistStore(store, null, () => {
  const { dispatch } = store;
  dispatch(appClearError());
});
