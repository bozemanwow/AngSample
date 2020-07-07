import { ScrollingModule } from '@angular/cdk/scrolling';
import { JobsServiceService } from './services/jobs-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ViewChild } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DispatchControlComponent } from './dispatch-control/dispatch-control.component';
import { JobDisplayComponent } from './dispatch-control/job-display/job-display.component';
import { MapDisplayComponent } from './dispatch-control/map-display/map-display.component';
import { JobitemComponent } from './dispatch-control/job-display/jobitem/jobitem.component';

import { AgmCoreModule } from '@agm/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarsComponent } from './headers/nav-bars/nav-bars.component';
import { JobListControlComponent } from './JobControl/job-list-control/job-list-control.component';
import { JobListDisplayControlComponent } from './JobControl/job-list-display-control/job-list-display-control.component';
import { JobFromDisplayControlComponent } from './JobControl/job-from-display-control/job-from-display-control.component';

@NgModule({
  declarations: [
    AppComponent,
    DispatchControlComponent,
    JobDisplayComponent,
    MapDisplayComponent,
    JobitemComponent,
    NavBarsComponent,
    JobListControlComponent,
    JobListDisplayControlComponent,
    JobFromDisplayControlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyChDgQZE7cX-u0QqdF92m6m8leel6Je5FU'}),
    BrowserAnimationsModule,
    ScrollingModule


  ],
  providers: [JobsServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
