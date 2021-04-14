import { ObjectWithID } from "./base";

export declare namespace Language {
  interface Data extends ObjectWithID {
    id: number;
    name: string;
  }

  namespace New {
    interface Data {
      name: string;
    }
  }
}
