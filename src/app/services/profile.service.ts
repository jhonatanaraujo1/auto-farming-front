import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Profile} from "../shared/models/profile.model";
import {environment} from "../../environments/environment";
import {TokenStorageService} from "./TokenStorageService";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private readonly PATH: string = 'profile';

  constructor(
    private http: HttpClient, private httpToken: TokenStorageService) {
  }

  create(profile: Profile): Observable<any> {
    return this.http.post(
      environment.baseApiUrl + this.PATH,
      profile
    );
  }

  getList(): Observable<any> {
    return this.http.get(
      environment.baseApiUrl + this.PATH
    );
  }

  get(id: any): Observable<any> {
    return this.http.get(
      environment.baseApiUrl + this.PATH + "/" + id
    );
  }


}
