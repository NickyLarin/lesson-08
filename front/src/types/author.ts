import { ObjectWithID } from "./base";

export declare namespace Author {
  interface Data extends ObjectWithID {
    id: number;
    name: string;
  }

  namespace All {
    interface Params {
      search?: string;
    }
  }
}
