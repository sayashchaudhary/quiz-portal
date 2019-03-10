import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { TimerService } from "./utils/timer.service";
import { Subscription } from "rxjs";
import { BlockUI, NgBlockUI } from "ng-block-ui";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  hours = 0;
  minutes = 0;
  seconds = 0;

  private hourSubscription: Subscription;
  private minuteSubscription: Subscription;
  private secondSubscription: Subscription;

  constructor(private router: Router, private timerService: TimerService) {

  }

  ngOnInit() {
    this.router.navigate(["/login"]);
    this.hourSubscription = this.timerService.getHours()
      .subscribe(hour => this.hours = hour);
    this.minuteSubscription = this.timerService.getMinutes()
      .subscribe(minutes => this.minutes = minutes);
    this.secondSubscription = this.timerService.getSeconds()
      .subscribe(seconds => this.seconds = seconds);
    this.timerService.getDumpEvent().subscribe(dump => {
      if (dump) {
        this.hourSubscription.unsubscribe();
        this.minuteSubscription.unsubscribe();
        this.secondSubscription.unsubscribe();
      }
    });
  }

}
