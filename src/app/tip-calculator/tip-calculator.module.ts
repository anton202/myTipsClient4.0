import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { TipCalculatorComponent } from "./tip-calculator.component";
import { TotalTipsComponent } from "./total-tips/total-tips.component";
import { ShiftComponent } from './shift/shift.component';

@NgModule({
  declarations: [TipCalculatorComponent, TotalTipsComponent, ShiftComponent],
  imports: [CommonModule, FormsModule],
  exports: [TipCalculatorComponent]
})
export class TipCalculatorModule {}
