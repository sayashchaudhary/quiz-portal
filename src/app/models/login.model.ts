import { QuizSet } from "../utils/conatus-enums";

export interface ILogin {
  email: string;
  password: string;
  set?: QuizSet
}
