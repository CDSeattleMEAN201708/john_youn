import { Component, OnInit } from '@angular/core';
import { NoteService } from './../note.service';
import { Router } from "@angular/router"
@Component({
  selector: 'app-notes-data',
  templateUrl: './notes-data.component.html',
  styleUrls: ['./notes-data.component.css']
})
export class NotesDataComponent implements OnInit {
  notes: Array<object>
  constructor(private _NoteService: NoteService, private router: Router) { }

  ngOnInit() {
    this._NoteService.get()
      .then(notes => this.notes = notes)
      .catch(err => console.log(err));
  
  }

}
