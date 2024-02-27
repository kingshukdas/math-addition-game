import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval, timer } from 'rxjs';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent implements OnInit, OnDestroy {

  num1!: number;
  num2!: number;
  sum!: number;
  count : number = 0;
  timer: number = 0;
  average: number = 0;
  subscriptionTimer!: Subscription;
  subscriptionAlertClose!: Subscription;
  timeSummation: number = 0;
  isSummationCorrect! : number;

  constructor() {

  }

  ngOnInit(): void {
    this.resetNumbers();
    this.startTimer();
  }

  resetNumbers() {
    this.num1 = Math.floor(Math.random() * 10);
    this.num2 = Math.floor(Math.random() * 10);
    this.sum = this.num1 + this.num2;
  }

  submit(event: any) {
    const userInput = Number(event.target.value)
    if(userInput === this.sum) {
      event.target.value = null;
      this.isSummationCorrect = 1;
      this.resetNumbers();
      this.calculateAvg();
      
    } else {
      this.isSummationCorrect = 0;
    }
    this.hideAfterThreeSeconds();
  }

  startTimer() {
    this.subscriptionTimer = interval(1000).subscribe(res => {
      this.timer+=1;
    })
  }

  hideAfterThreeSeconds() {
    this.subscriptionAlertClose = timer(3000).subscribe(res => {
      this.isSummationCorrect = 2;
    })
  }

  calculateAvg() {
    this.count+=1;
    this.timeSummation += this.timer;
    this.average = Number((this.timeSummation/this.count).toFixed(2));
    this.timer = 0;
  }

  ngOnDestroy(): void {
    this.subscriptionAlertClose.unsubscribe();
    this.subscriptionTimer.unsubscribe();
  }


}
