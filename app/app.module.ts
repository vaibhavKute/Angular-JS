import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LeftComponent } from './left/left.component';
import { RightComponent } from './right/right.component';
import { SliderComponent } from './slider/slider.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PasswordComponent } from './password/password.component';
import { CartComponent } from './cart/cart.component';


////////////////////////
import {RouterModule} from '@angular/router';
import { Guard1Guard } from './guard1.guard';
import { Guard2Guard } from './guard2.guard';
import { from } from 'rxjs';

//genrate your custom routes

const myRoute = [
  {path:'',component:HomeComponent},
  {path:'cartPage',component:CartComponent},
  {path:'loginPage',component:LoginComponent,canActivate:[Guard1Guard]},
  {path:'passwordPage',component:PasswordComponent,canActivate:[Guard2Guard]},
  
];
///////////////////////////

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LeftComponent,
    RightComponent,
    SliderComponent,
    HomeComponent,
    LoginComponent,
    PasswordComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(myRoute),HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
