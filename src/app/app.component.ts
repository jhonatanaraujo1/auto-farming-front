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

  constructor(private router: Router, public translate: TranslateService, public dialog:MatDialog) {
    translate.addLangs(['pt', 'br']);
    translate.setDefaultLang('pt');
    translate.use('pt');
  }

  ngOnInit() {
  }

  public changeLanguage(lng: string) {
    this.translate.addLangs([lng, lng]);
    this.translate.setDefaultLang(lng);
    this.translate.use(lng);

  }
  openDialog() {
    this.dialog.open(SupportComponent);
  }

  logOut() {
    this.router.navigate(['/']);
  }

}
