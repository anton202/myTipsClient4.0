import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import {IncomeSummaryModule } from './income-summary/income-summary.module';

import { TipCalculatorModule } from './tip-calculator/tip-calculator.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    TipCalculatorModule,
    IncomeSummaryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
