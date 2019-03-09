import { ILogin } from "../models/login.model";
import { QuizSet } from "./conatus-enums";

export class LoginDetails {
  private static email_pass: ILogin[] =
    [
      {
        email: "doc1@teamconatus.com",
        password: "doc1",
        set: QuizSet.SET_ONE
      },
      {
        email: "doc2@teamconatus.com",
        password: "doc2",
        set: QuizSet.SET_ONE
      },
      {
        email: "doc3@teamconatus.com",
        password: "doc3",
        set: QuizSet.SET_TWO
      },
      {
        email: "doc4@teamconatus.com",
        password: "doc4",
        set: QuizSet.SET_TWO
      },
      {
        email: "doc5@teamconatus.com",
        password: "doc5",
        set: QuizSet.SET_THREE
      },
      {
        email: "doc6@teamconatus.com",
        password: "doc6",
        set: QuizSet.SET_THREE
      },
      {
        email: "doc7@teamconatus.com",
        password: "doc7",
        set: QuizSet.SET_ONE
      },
      {
        email: "doc8@teamconatus.com",
        password: "doc8",
        set: QuizSet.SET_ONE
      },
      {
        email: "doc9@teamconatus.com",
        password: "doc9",
        set: QuizSet.SET_TWO
      },
      {
        email: "doc10@teamconatus.com",
        password: "doc10",
        set: QuizSet.SET_TWO
      },
      {
        email: "doc11@teamconatus.com",
        password: "doc11",
        set: QuizSet.SET_THREE
      },
      {
        email: "doc12@teamconatus.com",
        password: "doc12",
        set: QuizSet.SET_THREE
      },
      {
        email: "doc13@teamconatus.com",
        password: "doc13",
        set: QuizSet.SET_ONE
      },
      {
        email: "doc14@teamconatus.com",
        password: "doc14",
        set: QuizSet.SET_ONE
      },
      {
        email: "doc15@teamconatus.com",
        password: "doc15",
        set: QuizSet.SET_TWO
      },
      {
        email: "doc16@teamconatus.com",
        password: "doc16",
        set: QuizSet.SET_TWO
      },
    ];

  static getSetNumber(loginData: ILogin): QuizSet {
    this.email_pass.forEach(data => {
      if (data.email === loginData.email && data.password === loginData.password) {
        return data.set;
      }
    });
    return null;
  }

}
