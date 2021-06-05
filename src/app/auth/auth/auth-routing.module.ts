import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from '../components/create-account/create-account.component';
import { AuthComponent } from './auth.component';

const routes: Routes = [
  {
    path: '', component: AuthComponent, children: [
      { path: 'account', component: CreateAccountComponent }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
