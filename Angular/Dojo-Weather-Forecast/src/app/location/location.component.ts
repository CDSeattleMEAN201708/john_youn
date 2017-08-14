import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import 'rxjs/add/operator/switchMap'
import { LocationService } from '../location.service'
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  name: string = ""
  location: any = ""
  subscription: Subscription;
  constructor(private _route: ActivatedRoute, private _LocationService: LocationService) {}

  ngOnInit() {
    this.subscription = this._route.paramMap
      .switchMap(params => {
        console.log("LocationComponent loaded and url id given is: ", params.get('location'));
        this.name = params.get('location')
        return this._LocationService.getLocation(params.get('location'));
    }).subscribe(data => this.location = data);
  }

}
