import { Component, OnInit } from "@angular/core";
import { UserService } from "../../utils/user.service";
import { QuizSet } from "../../utils/conatus-enums";
import { TimerService } from "../../utils/timer.service";
import { BlockUI, NgBlockUI } from "ng-block-ui";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "app-quiz",
  templateUrl: "./quiz.component.html",
  styleUrls: ["./quiz.component.scss"]
})
export class QuizComponent implements OnInit {

  @BlockUI() blockUI: NgBlockUI;
  imageUrl: string;
  hintImageUrl: string;
  showImage: boolean;
  currentSet: QuizSet;
  count = 0;
  win = false;
  score = 0;
  attempts = 0;
  complete = false;

  setOneA = ["stamp", "four", "telephone", "limestone"];
  setOneB = ["handshake", "candle", "half-hearted", "frozen"];
  setTwoA = ["stamp", "growing-economy", "cloud", "illegal"];
  setTwoB = ["carpet", "coal", "male", "memories"];
  setThreeA = ["shoe", "checkbook", "steps", "potluck"];
  setThreeB = ["pillow", "layoff", "standing-ovation", "skin"];

  constructor(private userService: UserService, private timerService: TimerService,private snackbar: MatSnackBar) {

  }

  ngOnInit() {
    this.timerService.initializeTimer();
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

  finish() {
    this.win = true;
    this.timerService.dumpTimer();
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
        this.hintImageUrl = null;
        this.imageUrl = "assets/set1/A12.jpg";
        this.count++;
        if (this.attempts == 0) {
          this.score = this.score + 4;
        }
        else if (this.attempts == 1) {
          this.score = this.score + 2;
          this.attempts = 0;
        }
      } else {
        if (this.attempts === 0) {
          this.hintImageUrl = "assets/set1/H1B11.jpg";
          this.attempts++;
        }
        else if (this.attempts === 1) {
          this.hintImageUrl = null;
          this.attempts = 0;
          this.blockUI.start();
          setTimeout(() => {
            this.blockUI.stop();
            this.showImage = true;
            this.imageUrl = "assets/set1/A12.jpg";
            this.count++;
          }, 120000);
        }
      }
    }
    else if (this.count == 1) {
      if (answer.toLowerCase() == this.setOneA[this.count]) {
        this.showImage = true;
        this.hintImageUrl = null;
        this.imageUrl = "assets/set1/A03.jpg";
        this.count++;
        if (this.attempts == 0) {
          this.score = this.score + 4;
        }
        else if (this.attempts == 1) {
          this.score = this.score + 2;
          this.attempts = 0;
        }
      } else {
        if (this.attempts === 0) {
          // this.hintImageUrl = "assets/set1/H1B11.jpg"; //Todo: Hint image not present
          this.snackbar.open("Opps, your interpretation is incorrect. You have got one more attempt.", null, { duration: 4000 })

          this.attempts++;
        }
        else if (this.attempts === 1) {
          this.hintImageUrl = null;
          this.attempts = 0;
          this.blockUI.start();
          setTimeout(() => {
            this.blockUI.stop();
            this.showImage = true;
            this.imageUrl = "assets/set1/A03.jpg";
            this.count++;
          }, 120000);
        }
      }
    }
    else if (this.count == 2) {
      if (answer.toLowerCase() == this.setOneA[this.count]) {
        this.showImage = true;
        this.hintImageUrl = null;
        this.imageUrl = "assets/set1/A14.jpg";
        this.count++;
        if (this.attempts == 0) {
          this.score = this.score + 4;
        }
        else if (this.attempts == 1) {
          this.score = this.score + 2;
          this.attempts = 0;
        }
      } else {
        if (this.attempts === 0) {
          this.hintImageUrl = "assets/set1/H1B13.jpg";
          this.attempts++;
        }
        else if (this.attempts === 1) {
          this.hintImageUrl = null;
          this.attempts = 0;
          this.blockUI.start();
          setTimeout(() => {
            this.blockUI.stop();
            this.showImage = true;
            this.imageUrl = "assets/set1/A14.jpg";
            this.count++;
          }, 120000);
        }
      }
    }
    else if (this.count == 3) {
      if (answer.toLowerCase() == this.setOneA[this.count]) {
        this.showImage = false;
        this.hintImageUrl = null;
        this.finish();
        this.count++;
        if (this.attempts == 0) {
          this.score = this.score + 4;
        }
        else if (this.attempts == 1) {
          this.score = this.score + 2;
          this.attempts = 0;
        }
      } else {
        if (this.attempts === 0) {
          this.hintImageUrl = "assets/set1/H1B04.jpg";
          this.attempts++;
        }
        else if (this.attempts === 1) {
          this.hintImageUrl = null;
          this.attempts = 0;
          this.blockUI.start();
          setTimeout(() => {
            this.blockUI.stop();
            this.showImage = false;
            this.finish();
            this.count++;
          }, 120000);
        }
      }
    }
  }

  continueSet1B(answer: string) {
    if (this.count == 0) {
      if (answer.toLowerCase() == this.setOneB[this.count]) {
        this.showImage = true;
        this.hintImageUrl = null;
        this.imageUrl = "assets/set1/B11.jpg";
        this.count++;
        if (this.attempts == 0) {
          this.score = this.score + 4;
        }
        else if (this.attempts == 1) {
          this.score = this.score + 2;
          this.attempts = 0;
        }
      } else {
        if (this.attempts === 0) {
          this.hintImageUrl = "assets/set1/H1A01.jpg";
          this.attempts++;
        }
        else if (this.attempts === 1) {
          this.hintImageUrl = null;
          this.attempts = 0;
          this.blockUI.start();
          setTimeout(() => {
            this.blockUI.stop();
            this.showImage = true;
            this.imageUrl = "assets/set1/B11.jpg";
            this.count++;
          }, 120000);
        }
      }
    }
    else if (this.count == 1) {
      if (answer.toLowerCase() == this.setOneB[this.count]) {
        this.showImage = true;
        this.hintImageUrl = null;
        this.imageUrl = "assets/set1/B02.jpg";
        this.count++;
        if (this.attempts == 0) {
          this.score = this.score + 4;
        }
        else if (this.attempts == 1) {
          this.score = this.score + 2;
          this.attempts = 0;
        }
      } else {
        if (this.attempts === 0) {
          this.hintImageUrl = "assets/set1/H1A12.jpg";
          this.attempts++;
        }
        else if (this.attempts === 1) {
          this.hintImageUrl = null;
          this.attempts = 0;
          this.blockUI.start();
          setTimeout(() => {
            this.blockUI.stop();
            this.showImage = true;
            this.imageUrl = "assets/set1/B02.jpg";
            this.count++;
          }, 120000);
        }
      }
    }
    else if (this.count == 2) {
      if (answer.toLowerCase() == this.setOneB[this.count]) {
        this.showImage = true;
        this.hintImageUrl = null;
        this.imageUrl = "assets/set1/B13.jpg";
        this.count++;
        if (this.attempts == 0) {
          this.score = this.score + 4;
        }
        else if (this.attempts == 1) {
          this.score = this.score + 2;
          this.attempts = 0;
        }
      } else {
        if (this.attempts === 0) {
          this.hintImageUrl = "assets/set1/H1A03.jpg";
          this.attempts++;
        }
        else if (this.attempts === 1) {
          this.hintImageUrl = null;
          this.attempts = 0;
          this.blockUI.start();
          setTimeout(() => {
            this.blockUI.stop();
            this.showImage = true;
            this.imageUrl = "assets/set1/B13.jpg";
            this.count++;
          }, 120000);
        }
      }
    }
    else if (this.count == 3) {
      if (answer.toLowerCase() == this.setOneB[this.count]) {
        this.showImage = true;
        this.complete = true;
        this.hintImageUrl = null;
        this.imageUrl = "assets/set1/B04.jpg";
        this.count++;
        if (this.attempts == 0) {
          this.score = this.score + 4;
        }
        else if (this.attempts == 1) {
          this.score = this.score + 2;
          this.attempts = 0;
        }
      } else {
        if (this.attempts === 0) {
          this.hintImageUrl = "assets/set1/H1A14.jpg";
          this.attempts++;
        }
        else if (this.attempts === 1) {
          this.hintImageUrl = null;
          this.attempts = 0;
          this.blockUI.start();
          setTimeout(() => {
            this.blockUI.stop();
            this.showImage = true;
            this.imageUrl = "assets/set1/B04.jpg";
            this.complete = true;
            this.count++;
          }, 120000);
        }
      }
    }
  }

  continueSet2A(answer: string) {
    if (this.count == 0) {
      if (answer.toLowerCase() == this.setTwoA[this.count]) {
        this.showImage = true;
        this.hintImageUrl = null;
        this.imageUrl = "assets/set2/A12.jpg";
        this.count++;
        if (this.attempts == 0) {
          this.score = this.score + 4;
        }
        else if (this.attempts == 1) {
          this.score = this.score + 2;
          this.attempts = 0;
        }
      } else {
        if (this.attempts === 0) {
          this.hintImageUrl = "assets/set2/H2B11.jpg";
          this.attempts++;
        }
        else if (this.attempts === 1) {
          this.hintImageUrl = null;
          this.attempts = 0;
          this.blockUI.start();
          setTimeout(() => {
            this.blockUI.stop();
            this.showImage = true;
            this.imageUrl = "assets/set2/A12.jpg";
            this.count++;
          }, 120000);
        }
      }
    }
    else if (this.count == 1) {
      if (answer.toLowerCase() == this.setTwoA[this.count]) {
        this.showImage = true;
        this.hintImageUrl = null;
        this.imageUrl = "assets/set2/A03.jpg";
        this.count++;
        if (this.attempts == 0) {
          this.score = this.score + 4;
        }
        else if (this.attempts == 1) {
          this.score = this.score + 2;
          this.attempts = 0;
        }
      } else {
        if (this.attempts === 0) {
          this.hintImageUrl = "assets/set2/H2B02.jpg";
          this.attempts++;
        }
        else if (this.attempts === 1) {
          this.hintImageUrl = null;
          this.attempts = 0;
          this.blockUI.start();
          setTimeout(() => {
            this.blockUI.stop();
            this.showImage = true;
            this.imageUrl = "assets/set2/A03.jpg";
            this.count++;
          }, 120000);
        }
      }
    }
    else if (this.count == 2) {
      if (answer.toLowerCase() == this.setTwoA[this.count]) {
        this.showImage = true;
        this.hintImageUrl = null;
        this.imageUrl = "assets/set2/A14.jpg";
        this.count++;
        if (this.attempts == 0) {
          this.score = this.score + 4;
        }
        else if (this.attempts == 1) {
          this.score = this.score + 2;
          this.attempts = 0;
        }
      } else {
        if (this.attempts === 0) {
          this.hintImageUrl = "assets/set2/H2B13.jpg";
          this.attempts++;
        }
        else if (this.attempts === 1) {
          this.hintImageUrl = null;
          this.attempts = 0;
          this.blockUI.start();
          setTimeout(() => {
            this.blockUI.stop();
            this.showImage = true;
            this.imageUrl = "assets/set2/A14.jpg";
            this.count++;
          }, 120000);
        }
      }
    }
    else if (this.count == 3) {
      if (answer.toLowerCase() == this.setTwoA[this.count]) {
        this.showImage = false;
        this.hintImageUrl = null;
        this.finish();
        this.count++;
        if (this.attempts == 0) {
          this.score = this.score + 4;
        }
        else if (this.attempts == 1) {
          this.score = this.score + 2;
          this.attempts = 0;
        }
      } else {
        if (this.attempts === 0) {
          this.hintImageUrl = "assets/set2/H2B04.jpg";
          this.attempts++;
        }
        else if (this.attempts === 1) {
          this.hintImageUrl = null;
          this.attempts = 0;
          this.blockUI.start();
          setTimeout(() => {
            this.blockUI.stop();
            this.showImage = false;
            this.finish();
            this.count++;
          }, 120000);
        }
      }
    }
  }

  continueSet2B(answer: string) {
    if (this.count == 0) {
      if (answer.toLowerCase() == this.setTwoB[this.count]) {
        this.showImage = true;
        this.hintImageUrl = null;
        this.imageUrl = "assets/set2/B11.jpg";
        this.count++;
        if (this.attempts == 0) {
          this.score = this.score + 4;
        }
        else if (this.attempts == 1) {
          this.score = this.score + 2;
          this.attempts = 0;
        }
      } else {
        if (this.attempts === 0) {
          this.hintImageUrl = "assets/set2/H2A01.jpg";
          this.attempts++;
        }
        else if (this.attempts === 1) {
          this.hintImageUrl = null;
          this.attempts = 0;
          this.blockUI.start();
          setTimeout(() => {
            this.blockUI.stop();
            this.showImage = true;
            this.imageUrl = "assets/set2/B11.jpg";
            this.count++;
          }, 120000);
        }
      }
    }
    else if (this.count == 1) {
      if (answer.toLowerCase() == this.setTwoB[this.count]) {
        this.showImage = true;
        this.hintImageUrl = null;
        this.imageUrl = "assets/set2/B02.jpg";
        this.count++;
        if (this.attempts == 0) {
          this.score = this.score + 4;
        }
        else if (this.attempts == 1) {
          this.score = this.score + 2;
          this.attempts = 0;
        }
      } else {
        if (this.attempts === 0) {
          this.hintImageUrl = "assets/set2/H2A12.jpg";
          this.attempts++;
        }
        else if (this.attempts === 1) {
          this.hintImageUrl = null;
          this.attempts = 0;
          this.blockUI.start();
          setTimeout(() => {
            this.blockUI.stop();
            this.showImage = true;
            this.imageUrl = "assets/set2/B02.jpg";
            this.count++;
          }, 120000);
        }
      }
    }
    else if (this.count == 2) {
      if (answer.toLowerCase() == this.setTwoB[this.count]) {
        this.showImage = true;
        this.hintImageUrl = null;
        this.imageUrl = "assets/set2/B13.jpg";
        this.count++;
        if (this.attempts == 0) {
          this.score = this.score + 4;
        }
        else if (this.attempts == 1) {
          this.score = this.score + 2;
          this.attempts = 0;
        }
      } else {
        if (this.attempts === 0) {
          // this.hintImageUrl = "assets/set2/H2A14.jpg"; // Todo image not available
          this.snackbar.open("Opps, your interpretation is incorrect. You have got one more attempt.", null, { duration: 4000 })
          this.attempts++;
        }
        else if (this.attempts === 1) {
          this.hintImageUrl = null;
          this.attempts = 0;
          this.blockUI.start();
          setTimeout(() => {
            this.blockUI.stop();
            this.showImage = true;
            this.imageUrl = "assets/set2/B13.jpg";
            this.count++;
          }, 120000);
        }
      }
    }
    else if (this.count == 3) {
      if (answer.toLowerCase() == this.setTwoB[this.count]) {
        this.showImage = true;
        this.complete = true;
        this.hintImageUrl = null;
        this.imageUrl = "assets/set2/B04.jpg";
        this.count++;
        if (this.attempts == 0) {
          this.score = this.score + 4;
        }
        else if (this.attempts == 1) {
          this.score = this.score + 2;
          this.attempts = 0;
        }
      } else {
        if (this.attempts === 0) {
          this.hintImageUrl = "assets/set2/H2A14.jpg";
          this.attempts++;
        }
        else if (this.attempts === 1) {
          this.hintImageUrl = null;
          this.attempts = 0;
          this.blockUI.start();
          setTimeout(() => {
            this.blockUI.stop();
            this.showImage = true;
            this.complete = true;
            this.imageUrl = "assets/set2/B04.jpg";
            this.count++;
          }, 120000);
        }
      }
    }
  }

  continueSet3A(answer: string) {
    if (this.count == 0) {
      if (answer.toLowerCase() == this.setThreeA[this.count]) {
        this.showImage = true;
        this.hintImageUrl = null;
        this.imageUrl = "assets/set3/A12.jpg";
        this.count++;
        if (this.attempts == 0) {
          this.score = this.score + 4;
        }
        else if (this.attempts == 1) {
          this.score = this.score + 2;
          this.attempts = 0;
        }
      } else {
        if (this.attempts === 0) {
          this.hintImageUrl = "assets/set3/H3B11.jpg";
          this.attempts++;
        }
        else if (this.attempts === 1) {
          this.hintImageUrl = null;
          this.attempts = 0;
          this.blockUI.start();
          setTimeout(() => {
            this.blockUI.stop();
            this.showImage = true;
            this.imageUrl = "assets/set3/A12.jpg";
            this.count++;
          }, 120000);
        }
      }
    }
    else if (this.count == 1) {
      if (answer.toLowerCase() == this.setThreeA[this.count]) {
        this.showImage = true;
        this.hintImageUrl = null;
        this.imageUrl = "assets/set3/A03.jpg";
        this.count++;
        if (this.attempts == 0) {
          this.score = this.score + 4;
        }
        else if (this.attempts == 1) {
          this.score = this.score + 2;
          this.attempts = 0;
        }
      } else {
        if (this.attempts === 0) {
          this.hintImageUrl = "assets/set3/H3B02.jpg";
          this.attempts++;
        }
        else if (this.attempts === 1) {
          this.hintImageUrl = null;
          this.attempts = 0;
          this.blockUI.start();
          setTimeout(() => {
            this.blockUI.stop();
            this.showImage = true;
            this.imageUrl = "assets/set3/A03.jpg";
            this.count++;
          }, 120000);
        }
      }
    }
    else if (this.count == 2) {
      if (answer.toLowerCase() == this.setThreeA[this.count]) {
        this.showImage = true;
        this.hintImageUrl = null;
        this.imageUrl = "assets/set3/A14.jpg";
        this.count++;
        if (this.attempts == 0) {
          this.score = this.score + 4;
        }
        else if (this.attempts == 1) {
          this.score = this.score + 2;
          this.attempts = 0;
        }
      } else {
        if (this.attempts === 0) {
          this.hintImageUrl = "assets/set3/H3B13.jpg";
          this.attempts++;
        }
        else if (this.attempts === 1) {
          this.hintImageUrl = null;
          this.attempts = 0;
          this.blockUI.start();
          setTimeout(() => {
            this.blockUI.stop();
            this.showImage = true;
            this.imageUrl = "assets/set3/A14.jpg";
            this.count++;
          }, 120000);
        }
      }
    }
    else if (this.count == 3) {
      if (answer.toLowerCase() == this.setThreeA[this.count]) {
        this.showImage = false;
        this.hintImageUrl = null;
        this.finish();
        this.count++;
        if (this.attempts == 0) {
          this.score = this.score + 4;
        }
        else if (this.attempts == 1) {
          this.score = this.score + 2;
          this.attempts = 0;
        }
      } else {
        if (this.attempts === 0) {
          this.hintImageUrl = "assets/set3/H3B04.jpg";
          this.attempts++;
        }
        else if (this.attempts === 1) {
          this.hintImageUrl = null;
          this.attempts = 0;
          this.blockUI.start();
          setTimeout(() => {
            this.blockUI.stop();
            this.showImage = false;
            this.finish();
            this.count++;
          }, 120000);
        }
      }
    }
  }

  continueSet3B(answer: string) {
    if (this.count == 0) {
      if (answer.toLowerCase() == this.setThreeB[this.count]) {
        this.showImage = true;
        this.hintImageUrl = null;
        this.imageUrl = "assets/set3/B11.jpg";
        this.count++;
        if (this.attempts == 0) {
          this.score = this.score + 4;
        }
        else if (this.attempts == 1) {
          this.score = this.score + 2;
          this.attempts = 0;
        }
      } else {
        if (this.attempts === 0) {
          this.hintImageUrl = "assets/set3/H3A12.jpg";
          this.attempts++;
        }
        else if (this.attempts === 1) {
          this.hintImageUrl = null;
          this.attempts = 0;
          this.blockUI.start();
          setTimeout(() => {
            this.blockUI.stop();
            this.showImage = true;
            this.imageUrl = "assets/set3/B11.jpg";
            this.count++;
          }, 120000);
        }
      }
    }
    else if (this.count == 1) {
      if (answer.toLowerCase() == this.setThreeB[this.count]) {
        this.showImage = true;
        this.hintImageUrl = null;
        this.imageUrl = "assets/set3/B02.jpg";
        this.count++;
        if (this.attempts == 0) {
          this.score = this.score + 4;
        }
        else if (this.attempts == 1) {
          this.score = this.score + 2;
          this.attempts = 0;
        }
      } else {
        if (this.attempts === 0) {
          this.hintImageUrl = "assets/set3/H3A01.jpg";
          this.attempts++;
        }
        else if (this.attempts === 1) {
          this.hintImageUrl = null;
          this.attempts = 0;
          this.blockUI.start();
          setTimeout(() => {
            this.blockUI.stop();
            this.showImage = true;
            this.imageUrl = "assets/set3/B02.jpg";
            this.count++;
          }, 120000);
        }
      }
    }
    else if (this.count == 2) {
      if (answer.toLowerCase() == this.setThreeB[this.count]) {
        this.showImage = true;
        this.hintImageUrl = null;
        this.imageUrl = "assets/set3/B13.jpg";
        this.count++;
        if (this.attempts == 0) {
          this.score = this.score + 4;
        }
        else if (this.attempts == 1) {
          this.score = this.score + 2;
          this.attempts = 0;
        }
      } else {
        if (this.attempts === 0) {
          this.hintImageUrl = "assets/set3/H3A03.jpg";
          this.attempts++;
        }
        else if (this.attempts === 1) {
          this.hintImageUrl = null;
          this.attempts = 0;
          this.blockUI.start();
          setTimeout(() => {
            this.blockUI.stop();
            this.showImage = true;
            this.imageUrl = "assets/set3/B13.jpg";
            this.count++;
          }, 120000);
        }
      }
    }
    else if (this.count == 3) {
      if (answer.toLowerCase() == this.setThreeB[this.count]) {
        this.showImage = true;
        this.complete = true;
        this.hintImageUrl = null;
        this.imageUrl = "assets/set3/B04.jpg";
        this.count++;
        if (this.attempts == 0) {
          this.score = this.score + 4;
        }
        else if (this.attempts == 1) {
          this.score = this.score + 2;
          this.attempts = 0;
        }
      } else {
        if (this.attempts === 0) {
          this.hintImageUrl = "assets/set3/H3A14.jpg";
          this.attempts++;
        }
        else if (this.attempts === 1) {
          this.hintImageUrl = null;
          this.attempts = 0;
          this.blockUI.start();
          setTimeout(() => {
            this.blockUI.stop();
            this.showImage = true;
            this.complete = true;
            this.imageUrl = "assets/set3/B04.jpg";
            this.count++;
          }, 120000);
        }
      }
    }
  }

}
