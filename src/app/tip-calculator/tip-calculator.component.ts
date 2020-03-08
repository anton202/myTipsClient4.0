import { Component, OnInit } from '@angular/core';
import { ConstantPool } from '@angular/compiler';

@Component({
  selector: 'app-tip-calculator',
  templateUrl: './tip-calculator.component.html',
  styleUrls: ['./tip-calculator.component.scss']
})
export class TipCalculatorComponent implements OnInit {
  date:Date = new Date();
  days:Array<string> = ['ראשון','שני','שלישי','רביעי','חמישי','שישי','שבת'];
  totalTips: number;
  constructor() { }

  ngOnInit(): void {
  }

  getDay(){
    return this.days[this.date.getDay()];
  }

  onTipEnter(tips){
    this.totalTips = tips
  }

}
