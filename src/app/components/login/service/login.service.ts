import { TokenStorageService } from 'src/app/services/TokenStorageService';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment as env } from '../../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class AuthService {
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();

  private readonly PATH: string = 'auth';

  constructor(private http: HttpClient, private token: TokenStorageService) { 
    const jwt = this.token.getToken();
    this._isLoggedIn$.next(!!jwt);
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(env.baseApiUrl + this.PATH + '/login', { email, password }, httpOptions).pipe(
      tap((response: any) => {
        this._isLoggedIn$.next(true)
      })
    );
  }
}
