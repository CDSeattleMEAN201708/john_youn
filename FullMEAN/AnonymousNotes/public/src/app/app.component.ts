import { Component, OnInit } from '@angular/core';
import { NoteService } from './note.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'app';
  note = {content: ""}
  added_note

  constructor(private _NoteService: NoteService) {}
  on_submit() {
    console.log("in on_submit")
    console.log(this.note.content)
    this._NoteService.addNote(this.note)
      .then(data => this.added_note = data)
      .catch(err => console.log(err));
  }
  
}
