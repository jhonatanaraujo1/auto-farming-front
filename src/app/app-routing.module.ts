import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./components/login/login.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {ResetPasswordComponent} from "./components/login/reset-password/reset-password.component";
import {SignupComponent} from "./components/login/sign-up/signup.component";


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LoginComponent,

  },
  {
    path: 'login',
    component: LoginComponent,

  },
  {
    path: 'reset',
    component: ResetPasswordComponent,

  },
  {
    path: 'signup',
    component: SignupComponent,

  },
  {
    path: 'profile',
    component: ProfileComponent,

  },

  { path: '**', redirectTo: 'login' }
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
