import { MapPointsServicesService } from './../../services/map-points-services.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { Subscription } from 'rxjs';
import { Job } from './../../Objects/Job';
@Component({
  selector: 'app-map-display',
  templateUrl: './map-display.component.html',
  styleUrls: ['./map-display.component.css']
})
export class MapDisplayComponent implements OnInit, OnDestroy {
  title = 'angulargooglemap';
  lat = 43.653908;
  lng = -79.384293;
  mapPointSub: Subscription;
  constructor(private mapSer: MapPointsServicesService) { }
  ngOnDestroy(): void {
    this.mapPointSub.unsubscribe();
  }

  ngOnInit(): void {
    this.mapPointSub = this.mapSer.selectedSub().subscribe(
      (mJob: Job) => {
        this.lat = +mJob.lat;
        this.lng = +mJob.long;
        this.title = mJob.name;
      }
    );
  }

}
