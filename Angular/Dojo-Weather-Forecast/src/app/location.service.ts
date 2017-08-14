import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LocationService {

  constructor(private _http: Http) {}
  getLocation(name: string) {
    return this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=%7Bcity:${ name }%7D&appid=6f853aa6cc0dc97e3d3c01c901ab540d`)
      .map(data => data.json())
      .toPromise();
  }
}
