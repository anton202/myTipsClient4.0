import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { TipCalculatorModule } from './tip-calculator/tip-calculator.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {IncomeSummaryModule } from './income-summary/income-summary.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    SharedModule,
    TipCalculatorModule,
    IncomeSummaryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
