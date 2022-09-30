import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

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

  constructor() { }

  ngOnInit(): void {
  }
  toppings = new FormControl('');
  socialList: string[] = ['PROFILE.INSTAGRAM', 'PROFILE.FACEBOOK', 'PROFILE.TIKTOK'];

  statusList: string[] = ['STATUS.IN_PROGRESS', 'STATUS.STOPPED', 'STATUS.FINISHED'];
}
