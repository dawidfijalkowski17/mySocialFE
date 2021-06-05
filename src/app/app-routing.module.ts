import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateAccountComponent } from './auth/components/create-account/create-account.component';

const routes: Routes = [

  { path: '', loadChildren: () => import('./auth/auth/auth.module').then((m) => m.AuthModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
