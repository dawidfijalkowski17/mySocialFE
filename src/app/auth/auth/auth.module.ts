import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { BrowserModule } from '@angular/platform-browser';
import { CreateAccountComponent } from '../components/create-account/create-account.component';
import { NgxHideOnScrollModule } from 'ngx-hide-on-scroll';


@NgModule({
  declarations: [
    AuthComponent,
    CreateAccountComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    NgxHideOnScrollModule
  ],
  providers: []
})
export class AuthModule { }
