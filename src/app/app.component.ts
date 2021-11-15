import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import * as uuid from 'uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('inputTextarea') inputTextarea: ElementRef;
  
  subscription: Subscription;
  timerDisplay: Timer;
  letters: Letter[] = [];

  erroCounter = 0;
  hitCounter = 0;
  time = 0;

  isPrepared = false;
  hasError = false;
  started = false;
  isModalOpen = false;

  generateId = () => uuid.v4();

  ngOnInit() {
    this.fillTimer();
    this.formatText();
  }

  formatText() {
    this.letters = [];
    const letters = `Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos.`.split('');

    letters.forEach(text => {
      this.letters.push({
        id: this.generateId(),
        text: text,
        class: ClassType.default
      })
    })
  }

  prepareToStart(event: Event) {
    event.preventDefault();
    this.isPrepared = true;
    this.setFocusTextarea();
  }

  fillTimer() {
    this.timerDisplay = new Timer(
      { digit1: 0, digit2: 0 },
      { digit1: 0, digit2: 0 },
      { digit1: 0, digit2: 0 },
    )
  }

  startTimer() {
    this.subscription = timer(0, 1000).subscribe(() => {
      this.time++;
      this.timerDisplay = this.getDisplayTimer(this.time);
    });

    this.started = true;
  }

  stopTimer() {
    this.subscription.unsubscribe();
  }

  getDisplayTimer(time: number): Timer {
    const hours = '0' + Math.floor(time / 3600);
    const minutes = '0' + Math.floor(time % 3600 / 60);
    const seconds = '0' + Math.floor(time % 3600 % 60);

    return {
      hours: { digit1: Number(hours.slice(-2, -1)), digit2: Number(hours.slice(-1)) },
      minutes: { digit1: Number(minutes.slice(-2, -1)), digit2: Number(minutes.slice(-1)) },
      seconds: { digit1: Number(seconds.slice(-2, -1)), digit2: Number(seconds.slice(-1)) },
    };
  }

  checkText() {
    if (!this.started) {
      this.startTimer();
    }

    this.letters.forEach((letterText, index) => {
      const letterInput = this.inputTextarea.nativeElement.value[index];

      if (letterInput == null) {
        letterText.class = '';

      } else if (letterInput === letterText.text) {
        this.setCounter(letterText, ClassType.correct);
        letterText.class = ClassType.correct;

      } else {
        this.setCounter(letterText, ClassType.wrong);
        letterText.class = ClassType.wrong;
      }
    }) 

    if (this.finished()) {
      this.stopTimer();
      this.isModalOpen = true;
    }

    this.hasError = this.hasErrors();
  }

  setCounter(letterText: Letter, classType: string) {
    if (letterText.class === ClassType.default) {

      if (classType === ClassType.correct) {
        this.hitCounter++;
          
      } else {
        this.erroCounter++;
      }
    }
  }

  setFocusTextarea() {
    setTimeout(() => this.inputTextarea.nativeElement.focus());
  }

  hasErrors(): boolean {
     return this.letters.some(letter => letter.class === ClassType.wrong);
  }

  wroteEverythingRight(): boolean {
    return this.letters.every(letter => letter.class === ClassType.correct);
  }

  finished(): boolean {
    if (!this.inputTextarea) {
      return false;
    }
    
    const typedEverything = this.letters.length === this.inputTextarea.nativeElement.value.length;
    return typedEverything && this.wroteEverythingRight();
  }

  restart() {
    this.isPrepared = false;
    this.hasError = false;
    this.started = false;
    this.isModalOpen = false;
    this.inputTextarea.nativeElement.value = null;

    this.resetCounters();
    this.fillTimer();
    this.formatText();
  }

  resetCounters() {
    this.erroCounter = 0;
    this.hitCounter = 0;
    this.time = 0;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}

class Timer {
  constructor(public hours: Digit,
              public minutes: Digit,
              public seconds: Digit) {
  }
}

class Digit {
  constructor(public digit1: number,
              public digit2: number) {
  }
}

class Letter {
  text: string;
  id: string;
  class: string;
}

enum ClassType {
  wrong = 'wrong',
  correct = 'correct',
  default = '',
}