import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'US Time Zones';
  time: any = Date.now()
  zone: string = ""

  getTime(zone) {
    if (zone == "pst") {
      this.time = Date.now()
      this.zone = "pst"
    } else if(zone == "mst") {
      this.time = Date.now() + 1200000 * 3
      this.zone = "mst"
    } else if(zone == "cst") {
      this.time = Date.now() + 2400000 * 3
      this.zone = "cst"
    } else {
      this.time = Date.now() + 3600000 * 3
      this.zone = "est"
    }
  }

  clear() {
    this.time = ""
    this.zone = ""
  }
}
