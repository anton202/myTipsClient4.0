import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { TipCalculatorComponent } from './tip-calculator.component';
import { TotalTipsComponent } from './total-tips/total-tips.component';



@NgModule({
  declarations: [TipCalculatorComponent, TotalTipsComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [TipCalculatorComponent]
})
export class TipCalculatorModule { }
