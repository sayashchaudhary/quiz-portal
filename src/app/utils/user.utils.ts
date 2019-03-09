import { ILogin } from "../models/login.model";
import { QuizSet } from "./conatus-enums";

export class UserUtils {
  private static EMAIL_PASS: ILogin[] =
    [
      {
        email: "doc1@teamconatus.com",
        password: "doc1",
        set: QuizSet.SET_ONE_A
      },
      {
        email: "doc2@teamconatus.com",
        password: "doc2",
        set: QuizSet.SET_ONE_B
      },
      {
        email: "doc3@teamconatus.com",
        password: "doc3",
        set: QuizSet.SET_TWO_A
      },
      {
        email: "doc4@teamconatus.com",
        password: "doc4",
        set: QuizSet.SET_TWO_B
      },
      {
        email: "doc5@teamconatus.com",
        password: "doc5",
        set: QuizSet.SET_THREE_A
      },
      {
        email: "doc6@teamconatus.com",
        password: "doc6",
        set: QuizSet.SET_THREE_B
      },
      {
        email: "doc7@teamconatus.com",
        password: "doc7",
        set: QuizSet.SET_ONE_A
      },
      {
        email: "doc8@teamconatus.com",
        password: "doc8",
        set: QuizSet.SET_ONE_B
      },
      {
        email: "doc9@teamconatus.com",
        password: "doc9",
        set: QuizSet.SET_TWO_A
      },
      {
        email: "doc10@teamconatus.com",
        password: "doc10",
        set: QuizSet.SET_TWO_B
      },
      {
        email: "doc11@teamconatus.com",
        password: "doc11",
        set: QuizSet.SET_THREE_A
      },
      {
        email: "doc12@teamconatus.com",
        password: "doc12",
        set: QuizSet.SET_THREE_B
      },
      {
        email: "doc13@teamconatus.com",
        password: "doc13",
        set: QuizSet.SET_ONE_A
      },
      {
        email: "doc14@teamconatus.com",
        password: "doc14",
        set: QuizSet.SET_ONE_B
      },
      {
        email: "doc15@teamconatus.com",
        password: "doc15",
        set: QuizSet.SET_TWO_A
      },
      {
        email: "doc16@teamconatus.com",
        password: "doc16",
        set: QuizSet.SET_TWO_B
      },
    ];

  static getSetNumber(loginData: ILogin): QuizSet {
    let set: QuizSet;
    this.EMAIL_PASS.forEach(data => {
      if (data.email === loginData.email && data.password === loginData.password) {
        set = data.set;
      }
    });
    return set;
  }

}
