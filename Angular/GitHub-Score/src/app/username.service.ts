import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UsernameService {

  constructor(private _http: Http) { }
  getScore(name: string) {
    return this._http.get(`https://api.github.com/users/${ name }`)
      .map(data => data.json())
      .toPromise();
  }
}
