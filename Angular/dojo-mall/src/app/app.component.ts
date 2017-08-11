import { Component } from '@angular/core';
interface UserInterface {
  email: string,
  status: boolean,
  subject: string,
  content: string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  users: UserInterface[] = [
    {email: 'bill@gates.com', status: true, subject: 'New Windows', content: 'Windows XI will launch in year 2100'},
    {email: 'ada@lovelace.com', status: true, subject: 'Programming', content: 'ENchanctress of Numbers'},
    {email: 'john@carmac.com', status: false, subject: 'Updated Algo', content: 'New algorithm for shadow volumes'},
    {email: 'gabe@newel.com', status: false, subject: 'HL3!', content: 'Just Kidding'}
  ]
}