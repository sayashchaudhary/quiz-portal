import { Injectable } from "@angular/core";
import { QuizSet } from "./conatus-enums";

@Injectable({
  providedIn: "root"
})
export class UserService {

  private currentSet: QuizSet = QuizSet.SET_ONE_A;
  private isLoggedIn = false;

  constructor() {
  }

  getCurrentSet(): QuizSet {
    return this.currentSet
  }

  setCurrentSet(set: QuizSet) {
    if (!set) {
      return;
    }
    this.currentSet = set;
  }

  setIsLoggedIn(isLoggedIn: boolean) {
    this.isLoggedIn = isLoggedIn;
  }

  getIsLoggedIn() {
    return this.isLoggedIn;
  }
}
