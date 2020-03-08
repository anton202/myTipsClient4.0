import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shift',
  templateUrl: './shift.component.html',
  styleUrls: ['./shift.component.scss']
})
export class ShiftComponent implements OnInit {
  totalTip: number = 350;
  employerTax: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
