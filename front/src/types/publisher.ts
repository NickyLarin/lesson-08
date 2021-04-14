import { ObjectWithID } from "./base";

export declare namespace Publisher {
  interface Data extends ObjectWithID {
    id: number;
    name: string;
  }

  namespace New {
    interface Data {
      name: string;
    }
  }

  namespace All {
    interface Params {
      search?: string;
    }
  }
}
