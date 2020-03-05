import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { TipCalculatorComponent } from './tip-calculator.component';



@NgModule({
  declarations: [TipCalculatorComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [TipCalculatorComponent]
})
export class TipCalculatorModule { }
