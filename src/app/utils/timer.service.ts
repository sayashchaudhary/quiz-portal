import { Injectable } from "@angular/core";
import { Observable, Subject, Subscription, timer } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class TimerService {
  private seconds = 0;
  private minutes = 0;
  private hours = 0;

  private secondsEvent: Subject<number>;
  private minutesEvent: Subject<number>;
  private hoursEvent: Subject<number>;

  dumpEvent: Subject<boolean>;

  constructor() {
    this.secondsEvent = new Subject<number>();
    this.minutesEvent = new Subject<number>();
    this.hoursEvent = new Subject<number>();
    this.dumpEvent = new Subject<boolean>();
  }

  initializeTimer() {
    timer(0, 1000).subscribe(
      (_) => {
        this.seconds++;
        if (this.seconds == 60) {
          this.seconds = 0;
          this.minutes++;
        }
        if (this.minutes == 60) {
          this.minutes = 0;
          this.hours++;
        }
        this.secondsEvent.next(this.seconds);
        this.minutesEvent.next(this.minutes);
        this.hoursEvent.next(this.hours);
      }
    )
  }

  dumpTimer() {
    this.dumpEvent.next(true);
  }

  getSeconds(): Observable<number> {
    return this.secondsEvent.asObservable();
  }

  getMinutes(): Observable<number> {
    return this.minutesEvent.asObservable();
  }

  getHours(): Observable<number> {
    return this.hoursEvent.asObservable();
  }

  getDumpEvent(): Observable<boolean> {
    return this.dumpEvent.asObservable();
  }
}
