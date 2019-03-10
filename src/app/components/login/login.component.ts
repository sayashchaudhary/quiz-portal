import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { UserUtils } from "../../utils/user.utils";
import { UserService } from "../../utils/user.service";
import { QuizSet } from "../../utils/conatus-enums";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private userService: UserService,
              private router: Router,
              private snackbar: MatSnackBar) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      "email": new FormControl(null, [Validators.required, Validators.email]),
      "password": new FormControl(null, [Validators.required])
    });
  }

  login() {
    const currentSet: QuizSet = UserUtils.getSetNumber(this.form.value);
    console.log("[Set] ", currentSet);
    if (!currentSet) {
      this.snackbar.open("It seems that your details are in correct!", null, { duration: 3000 })
      return;
    }
    this.userService.setIsLoggedIn(true);
    this.userService.setCurrentSet(currentSet);
    this.router.navigate(["quiz"]);
  }

}
