import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipCalculatorComponent } from './tip-calculator.component';



@NgModule({
  declarations: [TipCalculatorComponent],
  imports: [
    CommonModule
  ],
  exports: [TipCalculatorComponent]
})
export class TipCalculatorModule { }
