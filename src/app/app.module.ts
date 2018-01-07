import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PicnicComponent } from './picnic/picnic.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { MapComponent } from './map/map.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AgmCoreModule, AgmPolygon, AgmPolyline } from '@agm/core';

import { ParkenService } from './services/parken.service';
import { RestoService } from './services/resto.service';
import { WeatherService } from './services/weather.service';

import { MultiLineString, Polygon } from 'geojson';
import { WeatherComponent } from './weather/weather.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    PicnicComponent,
    RestaurantComponent,
    FeedbackComponent,
    MapComponent,
    WeatherComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'picnic', component: PicnicComponent },
      { path: 'restaurant', component: RestaurantComponent },
      { path: 'feedback', component: FeedbackComponent },
      { path: 'map', component: MapComponent },
      { path: 'contact', component: ContactComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ], { useHash: true }),
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDuYVCV_Lp_wErb9wBgNP3vHBieAeBEPm0',
      libraries: ["places"]
    }),
    ReactiveFormsModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [ParkenService, RestoService, WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
