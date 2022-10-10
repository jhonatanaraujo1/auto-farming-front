import { TokenStorageService } from 'src/app/services/TokenStorageService';
import { AuthService } from './components/login/service/login.service';
import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {TranslateService} from "@ngx-translate/core";
import {MatDialog} from "@angular/material/dialog";
import {SupportComponent} from "./components/support/support.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Social Farming';
  userLogged=true;

  constructor(private router: Router, public translate: TranslateService,
              public dialog:MatDialog,public authService: AuthService,
              public token: TokenStorageService) {

    translate.addLangs(['pt', 'br']);
    translate.setDefaultLang('pt');
    translate.use('pt');
  }

  ngOnInit() {
  }


  public logout() {
    this.token.signOut();

    window.location.reload()
  }

  public changeLanguage(lng: string) {
    this.translate.addLangs([lng, lng]);
    this.translate.setDefaultLang(lng);
    this.translate.use(lng);

  }

  openDialog() {
    this.dialog.open(SupportComponent);
  }

}
