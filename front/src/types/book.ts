import { ObjectWithID } from "./base";

export declare namespace Book {
  interface Data extends ObjectWithID {
    id: number;
    title: string;
    year: number;
    isbn: string;
    description: string | null;
    createdAt: string; // Format "2021-04-08T04:22:35.000Z"
    updatedAt: string; // Format "2021-04-08T04:22:35.000Z"
  }
}
