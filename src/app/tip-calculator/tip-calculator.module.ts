import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";

import { TipCalculatorComponent } from "./tip-calculator.component";
import { TotalTipsComponent } from "./total-tips/total-tips.component";
import { ShiftComponent } from './shift/shift.component';

@NgModule({
  declarations: [TipCalculatorComponent, TotalTipsComponent, ShiftComponent],
  imports: [CommonModule, SharedModule, FormsModule],
  exports: [TipCalculatorComponent]
})
export class TipCalculatorModule {}
