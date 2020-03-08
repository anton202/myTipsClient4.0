import { Component, OnInit, Output, EventEmitter, AfterViewInit, ViewChild, ElementRef } from "@angular/core";
import { fromEvent } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';


@Component({
  selector: "app-total-tips",
  templateUrl: "./total-tips.component.html",
  styleUrls: ["./total-tips.component.scss"]
})
export class TotalTipsComponent implements OnInit, AfterViewInit {
  @Output() tips = new EventEmitter<number>();
  tipsAmount: number;
  @ViewChild('totalTip', { static: false }) tipsInput: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    fromEvent(this.tipsInput.nativeElement, 'keyup')
      .pipe(map((el: any) => el.target.value), debounceTime(2500))
      .subscribe(tipsAmount => {
        this.tips.emit(tipsAmount)
      })
  }

  // emitTotalTips(){
    
  //  setTimeout(()=>{
  //   console.log(this.tipsAmount)
  //   this.tips.emit(this.tipsAmount)
  //  },5000) 
  // }
}
