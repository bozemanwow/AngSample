import { TestBed } from '@angular/core/testing';

import { MapPointsServicesService } from './map-points-services.service';

describe('MapPointsServicesService', () => {
  let service: MapPointsServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapPointsServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
