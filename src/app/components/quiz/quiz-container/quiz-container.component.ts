import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "app-quiz-container",
  templateUrl: "./quiz-container.component.html",
  styleUrls: ["./quiz-container.component.scss"]
})
export class QuizContainerComponent implements OnInit {
  @Input() hintImage: string;
  @Input() image: string;
  @Input() showImage: boolean;
  @Output() nextClicked = new EventEmitter();
  @Output() submitClicked = new EventEmitter<string>();


  interpretation: FormControl;

  constructor(private snackbar: MatSnackBar) {
  }

  ngOnInit() {
    this.interpretation = new FormControl(null, [Validators.required]);
  }

  next() {
    this.nextClicked.emit();
  }

  submit() {
    if (!this.interpretation.valid) {
      this.snackbar.open("Please enter a valid interpretation!", null, { duration: 3000 })
      return;
    }
    this.submitClicked.next(this.interpretation.value);
    this.interpretation.reset();
  }
}
