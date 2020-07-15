import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Job } from 'src/app/Objects/Job';
import { JobsServiceService } from 'src/app/services/jobs-service.service';

@Component({
  selector: 'app-job-list-display-control',
  templateUrl: './job-list-display-control.component.html',
  styleUrls: ['./job-list-display-control.component.css']

})
export class JobListDisplayControlComponent implements OnInit, OnDestroy {
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
          console.log('Jobs Loaded');
        }
      );

      this.jobs = this.jobsSer.getJobs();
    }
  selectPoint(i: number)
  {
this.jobsSer.selectJob(i);
  }
}
