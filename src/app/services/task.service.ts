import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {TokenStorageService} from "./TokenStorageService";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private readonly PATH: string = 'task';

  constructor(
    private http: HttpClient, private httpToken: TokenStorageService) {
  }

  getListTask(idProfile: number): Observable<any> {
    return this.http.get(
      environment.baseApiUrl + this.PATH + "/" + idProfile
    );
  }

  flagTask(idTask: number) {
    return this.http.get(
      environment.baseApiUrl + this.PATH + "/flaged" + idTask
    );
  }

}
