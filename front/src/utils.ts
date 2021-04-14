import { Utils } from "./types/utils";

export const emptyFunction: Utils.EmptyFunction = () => {};
export const checkAccessToken = (token: string): boolean => {
  return token !== "";
};
