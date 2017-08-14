import { Component, OnInit } from '@angular/core';
import { UsernameService } from './../username.service';
@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
  username: string = ""
  info: {}
  score
  constructor(private _UsernameService: UsernameService) {}
  on_submit() {
    console.log(this.username)
    this._UsernameService.getScore(this.username)
      .then(data => {this.info = data 
                     this.score = data.public_repos + data.followers})
      .catch(err => console.log(err));
    
  }
  ngOnInit() {
    
  }
}