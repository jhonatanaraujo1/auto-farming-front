import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./components/login/login.component";
import {HomeComponent} from "./components/home/home.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {CadastrarComponent} from "./components/login/cadastrar/cadastrar.component";


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,

  },
  {
    path: 'login',
    component: LoginComponent,

  },
  {
    path: 'home',
    component: HomeComponent,

  },
  {
    path: 'profile',
    component: ProfileComponent,

  },
  {
    path: 'signup',
    component: CadastrarComponent,

  },
  { path: '**', redirectTo: 'home' }
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
