import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from '../components/create-account/create-account.component';
import { LoginComponent } from '../components/login/login.component';
import { UserInfoComponent } from '../components/user-info/user-info.component';
import { AuthComponent } from './auth.component';

const routes: Routes = [
  {
    path: '', component: AuthComponent, children: [
      { path: 'createAccount', component: CreateAccountComponent },
      { path: 'userInfo', component: UserInfoComponent },
      { path: 'login', component: LoginComponent }
    ]
  },

  { path: '', loadChildren: () => import('../../home/home/home.module').then((m) => m.HomeModule) }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
