import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ngOnInit() {
    this.shuffle()
  }
  title = 'app';
  colors = ["AliceBlue", "Beige", "Coral", "DeePink", "DeepSkyBlue", "LemonChiffon", "Lime", "Peru", "RoyalBlue", "Tomato"]
  shuffle() {
    var currentIndex = this.colors.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = this.colors[currentIndex];
    this.colors[currentIndex] = this.colors[randomIndex];
    this.colors[randomIndex] = temporaryValue;
  }

  return this.colors;
  }
}
