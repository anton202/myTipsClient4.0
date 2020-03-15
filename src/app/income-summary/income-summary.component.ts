import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-income-summary',
  templateUrl: './income-summary.component.html',
  styleUrls: ['./income-summary.component.scss']
})
export class IncomeSummaryComponent implements OnInit {
  motnh:Array<string> = ['ינואר','פברואר','מרץ','אפריל','מאי','יוני','יולי','אוגוסט','ספטמבר','נובמבר','דצמבר'];

  constructor() { }

  ngOnInit(): void {
  }

  getMonth(){
    const date = new Date();
    return this.motnh[date.getMonth()]
  }


}
