import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from './app-routing.module';
import {LoginComponent} from "./components/login/login.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {HomeComponent} from "./components/home/home.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import { ResetPasswordComponent } from './components/login/reset-password/reset-password.component';
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {DatePipe} from "@angular/common";
import {LoginService} from "./components/login/service";
import { ListProfileComponent } from './components/profile/list-profile/list-profile.component';
import { SignupComponent } from './components/login/sign-up/signup.component';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatMenuModule} from "@angular/material/menu";
import {MatSelectModule} from "@angular/material/select";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatTabsModule} from "@angular/material/tabs";
import { SupportComponent } from './components/support/support.component';
import {MatDialogModule} from "@angular/material/dialog";
import {NgChartsModule} from "ng2-charts";
import { CreateProfileComponent } from './components/profile/create-profile/create-profile.component';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent,
    ProfileComponent,
    ResetPasswordComponent,
    ListProfileComponent,
    SignupComponent,
    SupportComponent,
    CreateProfileComponent
  ],
    imports: [
        BrowserModule,
        NgbModule,
        AppRoutingModule,
        ReactiveFormsModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule,
        MatCardModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        MatProgressBarModule,
        MatMenuModule,
        MatSelectModule,
        MatExpansionModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatTabsModule,
        MatDialogModule,
        NgChartsModule
    ],
  providers: [MatDatepickerModule,DatePipe,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
