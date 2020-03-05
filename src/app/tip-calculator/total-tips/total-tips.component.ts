import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-total-tips',
  templateUrl: './total-tips.component.html',
  styleUrls: ['./total-tips.component.scss']
})
export class TotalTipsComponent implements OnInit {
@Output() tips = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

}
