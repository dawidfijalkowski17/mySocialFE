import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { BrowserModule } from '@angular/platform-browser';
import { CreateAccountComponent } from '../components/create-account/create-account.component';
import { NgxHideOnScrollModule } from 'ngx-hide-on-scroll';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AuthComponent,
    CreateAccountComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    NgxHideOnScrollModule,
    ReactiveFormsModule
  ],
  providers: []
})
export class AuthModule { }
