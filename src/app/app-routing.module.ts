import { ReverseAuthGuard } from './shared/reverse-auth.guard';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './shared/auth.guard';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./components/login/login.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {ListProfileComponent} from "./components/profile/list-profile/list-profile.component";
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      { path: 'dashboard', component: DashboardComponent},
      { path: 'listprofile', component: ListProfileComponent},
      { path: 'profile', component: ProfileComponent},
    ],
    canActivate: [ AuthGuard ]
  },
  {
    path: '',
    component: AuthenticationComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full'},
      { path: 'login', component: LoginComponent},
      { path: '**', redirectTo: 'login' }
    ],
    canActivate: [ ReverseAuthGuard ]
  },

  // {
  //   path: '',
  //   pathMatch: 'full',
  //   component: LoginComponent,

  // },
  // {
  //   path: 'login',
  //   component: LoginComponent,

  // },
  // {
  //   path: 'reset',
  //   component: ResetPasswordComponent,

  // },
  // {
  //   path: 'signup',
  //   component: SignupComponent,

  // },
  // {
  //   path: 'profile',
  //   component: ProfileComponent,
  // },
  // {
  //   path: 'listprofile',
  //   component: ListProfileComponent,
  //   canActivate: [ AuthGuard ]
  // },
  // { path: '**', redirectTo: 'login' }
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
