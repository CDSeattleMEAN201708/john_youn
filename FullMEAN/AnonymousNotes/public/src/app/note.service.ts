import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs";

@Injectable()
export class NoteService {

  constructor(private _http: Http) { }
  
  addNote(note) {
    console.log(note)
    return this._http.post(`/add`, note)
      .map(data => data.json())
      .toPromise();
  }

  get(){
    return this._http.get("/get")
            .map(data => data.json())
            .toPromise()
  }

}
