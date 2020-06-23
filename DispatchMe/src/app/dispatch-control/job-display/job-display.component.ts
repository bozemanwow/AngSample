import { JobsServiceService } from './../../services/jobs-service.service';
import { Job } from './../../Objects/Job';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-job-display',
  templateUrl: './job-display.component.html',
  styleUrls: ['./job-display.component.css']
})
export class JobDisplayComponent implements OnInit, OnDestroy {
jobs: Job[];
jobSubs: Subscription;
  constructor(private jobsSer: JobsServiceService) {

  }
  ngOnDestroy(): void {
    this.jobSubs.unsubscribe();
  }

  ngOnInit(): void {
    this.jobSubs = this.jobsSer.jobsChanged.subscribe(
      (jobs: Job[]) => {
        this.jobs = jobs;
        console.log("Jobs Loaded");
      }
    );
    this.jobs = this.jobsSer.getJobs();
  }

}
