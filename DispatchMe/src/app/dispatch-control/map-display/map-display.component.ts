import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-map-display',
  templateUrl: './map-display.component.html',
  styleUrls: ['./map-display.component.css']
})
export class MapDisplayComponent implements OnInit {
  title = 'angulargooglemap';
  lat = 43.653908;
  lng = -79.384293;
  constructor() { }

  ngOnInit(): void {
  }

}
