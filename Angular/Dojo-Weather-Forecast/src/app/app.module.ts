import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationComponent } from './location/location.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LocationService } from './location.service';
@NgModule({
  declarations: [
    AppComponent,
    LocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
  ],
  providers: [LocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
