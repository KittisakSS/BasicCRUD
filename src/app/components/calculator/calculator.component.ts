import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
   number1: number = null;
  number2: number = null;
  operator: string = '+';
  result: number = null;

  calculate() {
    switch (this.operator) {
      case '+':
        this.result = this.number1 + this.number2;
        break;
      case '-':
        this.result = this.number1 - this.number2;
        break;
      case '*':
        this.result = this.number1 * this.number2;
        break;
      case '/':
        this.result = this.number2 !== 0 ? this.number1 / this.number2 : NaN;
        break;
      default:
        this.result = NaN;
    }
  }

  clear() {
    this.number1 = null;
    this.number2 = null;
    this.operator = '+';
    this.result = null;
  }
}
