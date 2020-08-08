import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { TipCalculatorComponent } from './tip-calculator/tip-calculator.component'
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';



const routes: Routes = [
  {path: 'main' ,component: HomeComponent},
  {path: 'tip-calculator', component:TipCalculatorComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '', component:HomeComponent},
  {path: '**', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
