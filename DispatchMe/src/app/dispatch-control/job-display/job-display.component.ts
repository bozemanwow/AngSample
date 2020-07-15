import { JobsServiceService } from './../../services/jobs-service.service';
import { Job } from './../../Objects/Job';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MapPointsServicesService } from 'src/app/services/map-points-services.service';

@Component({
  selector: 'app-job-display',
  templateUrl: './job-display.component.html',
  styleUrls: ['./job-display.component.css']
})
export class JobDisplayComponent implements OnInit, OnDestroy {
jobs: Job[];
jobSubs: Subscription;
  constructor(private jobsSer: JobsServiceService, private mapSer: MapPointsServicesService) {

  }
  ngOnDestroy(): void {
    this.jobSubs.unsubscribe();
  }

  ngOnInit(): void {
    this.jobSubs = this.jobsSer.jobsChanged.subscribe(
      (jobs: Job[]) => {
        this.jobs = jobs;
        console.log('Jobs Loaded');
      }
    );

    this.jobs = this.jobsSer.getJobs();
  }
  selectPoint(i: number)
  {
this.mapSer.setJobPoint(i);
  }
}
