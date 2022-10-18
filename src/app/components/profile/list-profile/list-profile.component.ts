import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {CreateProfileComponent} from "../create-profile/create-profile.component";
import {MatDialog} from "@angular/material/dialog";

interface Animal {
  name: string;
  sound: string;
}
@Component({
  selector: 'app-list-profile',
  templateUrl: './list-profile.component.html',
  styleUrls: ['./list-profile.component.css']
})
export class ListProfileComponent implements OnInit {
  toppings = new FormControl('');
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(CreateProfileComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  socialList: string[] = ['PROFILE.INSTAGRAM', 'PROFILE.FACEBOOK', 'PROFILE.TIKTOK'];
  statusList: string[] = ['STATUS.IN_PROGRESS', 'STATUS.STOPPED', 'STATUS.FINISHED'];
}
