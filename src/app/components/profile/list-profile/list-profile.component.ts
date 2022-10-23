import {Component,  OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {CreateProfileComponent} from "../create-profile/create-profile.component";
import {MatDialog} from "@angular/material/dialog";
import {TokenStorageService} from "../../../services/TokenStorageService";
import {Router} from "@angular/router";
import {ProfileService} from "../../../services/profile.service";

const projetoIds: any = null;


@Component({
  selector: 'app-list-profile',
  templateUrl: './list-profile.component.html',
  styleUrls: ['./list-profile.component.css']
})
export class ListProfileComponent implements OnInit {
  dataSource = projetoIds;
  toppings = new FormControl('');
  resultado = [{
    "profile_id": "1238954390",
    "profile_name": "Perfil Facebook 1",
    "profile_status": "EM ANDAMENTO",
    "profile_icon": "facebook",
    "profile_days": "10",
    "profile_percent_done": "25",
    "profile_plan_day": "30",
  },
    {
      "profile_id": "12389546787390",
      "profile_name": "Perfil 1",
      "profile_status": "EM ANDAMENTO",
      "profile_icon": "facebook",
      "profile_days": "28",
      "profile_percent_done": "98",
      "profile_plan_day": "30",
    },
    {
      "profile_id": "123895439045642341",
      "profile_name": "Fan page 1",
      "profile_status": "EM ANDAMENTO",
      "profile_icon": "facebook",
      "profile_days": "35",
      "profile_percent_done": "65",
      "profile_plan_day": "60",
    },
    {
      "profile_id": "123895439045645645",
      "profile_name": "BM 1",
      "profile_status": "EM ANDAMENTO",
      "profile_icon": "facebook",
      "profile_days": "30",
      "profile_percent_done": "89",
      "profile_plan_day": "45",
    },
    {
      "profile_id": "12456654645",
      "profile_name": "Conta de anuncio 1",
      "profile_status": "EM ANDAMENTO",
      "profile_icon": "facebook",
      "profile_days": "65",
      "profile_percent_done": "65",
      "profile_plan_day": "150",
    }

  ]
  errorMessage = '';
  socialList: string[] = ['PROFILE.INSTAGRAM', 'PROFILE.FACEBOOK', 'PROFILE.TIKTOK'];
  statusList: string[] = ['STATUS.IN_PROGRESS', 'STATUS.STOPPED', 'STATUS.FINISHED'];

  constructor(public dialog: MatDialog, private tokenStorage: TokenStorageService, private profileService: ProfileService, private router: Router) {
  }

  ngOnInit(): void {
    this.getList()
  }

  getList() {
    this.profileService.getList().subscribe({
      next: data => {
        this.resultado = data;
      },
      error: err => {
        console.log(err)
        this.errorMessage = err.error.message;
      }
    });
  }

  profile(id: any) {
    this.router.navigate(['/profile', {id: id}]);
  }

  openDialog() {
    const dialogRef = this.dialog.open(CreateProfileComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
