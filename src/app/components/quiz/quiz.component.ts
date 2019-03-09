import { Component, OnInit } from "@angular/core";
import { UserService } from "../../utils/user.service";
import { QuizSet } from "../../utils/conatus-enums";

@Component({
  selector: "app-quiz",
  templateUrl: "./quiz.component.html",
  styleUrls: ["./quiz.component.scss"]
})
export class QuizComponent implements OnInit {

  imageUrl: string;
  showImage: boolean;
  currentSet: QuizSet;
  count = 0;
  win = false;

  setOneA = ["stamp", "four", "telephone", "limestone"];
  setOneB = ["handshake", "candle", "half-hearted", "frozen"];
  setTwoA = ["stamp", "growing-economy", "cloud", "illegal"];
  setTwoB = ["carpet", "charcoal", "male", "memories"];
  setThreeA = ["shoe", "checkbook", "steps", "potluck"];
  setThreeB = ["layoff", "pillow", "standing-ovation", "skin"];

  constructor(private userService: UserService) {

  }

  ngOnInit() {
    this.currentSet = this.userService.getCurrentSet();
    if (this.currentSet == QuizSet.SET_ONE_A) {
      this.showImage = true;
      this.imageUrl = "assets/set1/A01.jpg"
    }
    else if (this.currentSet == QuizSet.SET_ONE_B) {
      this.showImage = false;
    }
    else if (this.currentSet == QuizSet.SET_TWO_A) {
      this.showImage = true;
      this.imageUrl = "assets/set2/A01.jpg"
    }
    else if (this.currentSet == QuizSet.SET_TWO_B) {
      this.showImage = false;
    }
    else if (this.currentSet == QuizSet.SET_THREE_A) {
      this.showImage = true;
      this.imageUrl = "assets/set3/A01.jpg"
    }
    else if (this.currentSet == QuizSet.SET_THREE_B) {
      this.showImage = false;
    }
  }

  next() {
    console.log("Next clicked!");
    this.showImage = !this.showImage;
  }

  submit(event: string) {
    console.log(event);
    if (this.currentSet == QuizSet.SET_ONE_A) {
      this.continueSet1A(event);
    }
    else if (this.currentSet == QuizSet.SET_ONE_B) {
      this.continueSet1B(event);
    }
    else if (this.currentSet == QuizSet.SET_TWO_A) {
      this.continueSet2A(event);
    }
    else if (this.currentSet == QuizSet.SET_TWO_B) {
      this.continueSet2B(event);
    }
    else if (this.currentSet == QuizSet.SET_THREE_A) {
      this.continueSet3A(event);
    }
    else if (this.currentSet == QuizSet.SET_THREE_B) {
      this.continueSet3B(event);
    }
  }

  continueSet1A(answer: string) {
    if (this.count == 0) {
      if (answer.toLowerCase() == this.setOneA[this.count]) {
        this.showImage = true;
        this.imageUrl = "assets/set1/A12.jpg";
        this.count++;
      } else {

      }
    }
    if (this.count == 1) {
      if (answer.toLowerCase() == this.setOneA[this.count]) {
        this.showImage = true;
        this.imageUrl = "assets/set1/A03.jpg";
        this.count++;
      } else {

      }
    }
    if (this.count == 2) {
      if (answer.toLowerCase() == this.setOneA[this.count]) {
        this.showImage = true;
        this.imageUrl = "assets/set1/A14.jpg";
        this.count++;
      } else {

      }
    }
    if (this.count == 3) {
      if (answer.toLowerCase() == this.setOneA[this.count]) {
        this.showImage = false;
        this.win = true;
      } else {

      }
    }

  }

  continueSet1B(answer: string) {
    if (this.count == 0) {
      if (answer.toLowerCase() == this.setOneB[this.count]) {
        this.showImage = true;
        this.imageUrl = "assets/set1/B11.jpg";
        this.count++;
      } else {

      }
    }
    if (this.count == 1) {
      if (answer.toLowerCase() == this.setOneB[this.count]) {
        this.showImage = true;
        this.imageUrl = "assets/set1/B02.jpg";
        this.count++;
      } else {

      }
    }
    if (this.count == 2) {
      if (answer.toLowerCase() == this.setOneB[this.count]) {
        this.showImage = true;
        this.imageUrl = "assets/set1/B13.jpg";
        this.count++;
      } else {

      }
    }
    if (this.count == 3) {
      if (answer.toLowerCase() == this.setOneB[this.count]) {
        this.showImage = true;
        this.imageUrl = "assets/set1/B04.jpg";
      } else {

      }
    }

  }

  continueSet2A(answer: string) {
    if (this.count == 0) {
      if (answer.toLowerCase() == this.setTwoA[this.count]) {
        this.showImage = true;
        this.imageUrl = "assets/set2/A12.jpg";
        this.count++;
      } else {

      }
    }
    if (this.count == 1) {
      if (answer.toLowerCase() == this.setTwoA[this.count]) {
        this.showImage = true;
        this.imageUrl = "assets/set2/A03.jpg";
        this.count++;
      } else {

      }
    }
    if (this.count == 2) {
      if (answer.toLowerCase() == this.setTwoA[this.count]) {
        this.showImage = true;
        this.imageUrl = "assets/set2/A14.jpg";
        this.count++;
      } else {

      }
    }
    if (this.count == 3) {
      if (answer.toLowerCase() == this.setTwoA[this.count]) {
        this.showImage = false;
        this.win = true;
      } else {

      }
    }
  }

  continueSet2B(answer: string) {
    if (this.count == 0) {
      if (answer.toLowerCase() == this.setTwoB[this.count]) {
        this.showImage = true;
        this.imageUrl = "assets/set2/B11.jpg";
        this.count++;
      } else {

      }
    }
    if (this.count == 1) {
      if (answer.toLowerCase() == this.setTwoB[this.count]) {
        this.showImage = true;
        this.imageUrl = "assets/set2/B02.jpg";
        this.count++;
      } else {

      }
    }
    if (this.count == 2) {
      if (answer.toLowerCase() == this.setTwoB[this.count]) {
        this.showImage = true;
        this.imageUrl = "assets/set3/B13.jpg";
        this.count++;
      } else {

      }
    }
    if (this.count == 3) {
      if (answer.toLowerCase() == this.setTwoB[this.count]) {
        this.showImage = true;
        this.imageUrl = "assets/set3/B04.jpg";
      } else {

      }
    }
  }

  continueSet3A(answer: string) {
    if (this.count == 0) {
      if (answer.toLowerCase() == this.setThreeA[this.count]) {
        this.showImage = true;
        this.imageUrl = "assets/set3/A12.jpg";
        this.count++;
      } else {

      }
    }
    if (this.count == 1) {
      if (answer.toLowerCase() == this.setThreeA[this.count]) {
        this.showImage = true;
        this.imageUrl = "assets/set3/A03.jpg";
        this.count++;
      } else {

      }
    }
    if (this.count == 2) {
      if (answer.toLowerCase() == this.setThreeA[this.count]) {
        this.showImage = true;
        this.imageUrl = "assets/set3/A14.jpg";
        this.count++;
      } else {

      }
    }
    if (this.count == 3) {
      if (answer.toLowerCase() == this.setThreeA[this.count]) {
        this.showImage = false;
        this.win = true;
      } else {

      }
    }
  }

  continueSet3B(answer: string) {
    if (this.count == 0) {
      if (answer.toLowerCase() == this.setThreeB[this.count]) {
        this.showImage = true;
        this.imageUrl = "assets/set3/B11.jpg";
        this.count++;
      } else {

      }
    }
    if (this.count == 1) {
      if (answer.toLowerCase() == this.setThreeB[this.count]) {
        this.showImage = true;
        this.imageUrl = "assets/set3/B02.jpg";
        this.count++;
      } else {

      }
    }
    if (this.count == 2) {
      if (answer.toLowerCase() == this.setThreeB[this.count]) {
        this.showImage = true;
        this.imageUrl = "assets/set3/B13.jpg";
        this.count++;
      } else {

      }
    }
    if (this.count == 3) {
      if (answer.toLowerCase() == this.setThreeB[this.count]) {
        this.showImage = true;
        this.imageUrl = "assets/set3/B04.jpg";
      } else {

      }
    }
  }


}
