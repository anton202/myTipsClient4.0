import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncomeSummaryComponent } from './income-summary.component';
import { ShiftIncomeComponent } from './shift-income/shift-income.component';



@NgModule({
  declarations: [IncomeSummaryComponent, ShiftIncomeComponent],
  imports: [
    CommonModule
  ],
  exports: [IncomeSummaryComponent]
})
export class IncomeSummaryModule { }
