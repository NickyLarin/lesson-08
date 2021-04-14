import { ObjectWithID } from "./base";

export declare namespace Genre {
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
