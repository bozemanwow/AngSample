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

@NgModule({
  declarations: [
    AppComponent,
    DispatchControlComponent,
    JobDisplayComponent,
    MapDisplayComponent,
    JobitemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyChDgQZE7cX-u0QqdF92m6m8leel6Je5FU'})

  ],
  providers: [JobsServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
