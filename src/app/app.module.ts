import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  NO_ERRORS_SCHEMA  } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PicnicComponent } from './picnic/picnic.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ParkenService } from './services/parken.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RestoService } from './services/resto.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    PicnicComponent,
    RestaurantComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot([
      {path: 'home',component: HomeComponent},
      {path: 'picnic',component: PicnicComponent},
      {path: 'restaurant',component: RestaurantComponent},
      {path: 'feedback',component: FeedbackComponent}
    ],{useHash:true}),
    FormsModule,
    HttpClientModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [ParkenService, RestoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
