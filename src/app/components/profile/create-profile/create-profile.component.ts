import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CountryRegion} from "../../../helpers/country-region";
import {Gender} from "../../../helpers/gender";
import {TypeGrow} from "../../../helpers/type-grow";
import {ProfileService} from "../../../services/profile.service";

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent implements OnInit {
  countryRegion: string[] | undefined;
  timesGrow: number [] | undefined;
  typesGrow: string[] | undefined;
  genders: string[] | undefined;
  form!: FormGroup;
  matcher: any;

  constructor(private _formBuilder: FormBuilder, private profileService: ProfileService) {
  }


  generateForm() {
    this.form = this._formBuilder.group({
      nameProfile: ['', [Validators.required]],
      region: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      timeGrow: ['', [Validators.required]],
      typeGrow: ['', [Validators.required, Validators.minLength(15)]]
    });
  }

  ngOnInit(): void {
    this.generateForm()
    this.countryRegion = [
      CountryRegion.SUL,
      CountryRegion.NORTE,
      CountryRegion.CENTROESTE,
      CountryRegion.NORDESTE,
      CountryRegion.SUDESTE,
    ];
    this.genders = [
      Gender.MAN,
      Gender.WOMAN
    ];
    this.typesGrow = [
      TypeGrow.BM,
      TypeGrow.ADACCOUNT,
      TypeGrow.FANPAGE,
      TypeGrow.FACEBOOKACCOUNT,
    ]
    this.timesGrow = [
      15,
      30,
      45,
      60,
      90,
      120,
      150
    ]
  }

  create() {
    const profile = this.form.value;
    this.profileService.create(profile);

  }
}
