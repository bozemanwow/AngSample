import { Job } from './../Objects/Job';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobsServiceService {
  jobsChanged = new Subject<Job[]>();
  private jobs: Job[] = [ new Job('first', 'today', '10', '10'), new Job('2', 'today', '20', '20')];
  constructor() { }

  getJob(index: number)
  {
    return this.jobs[index];

  }
  getJobs()
  {
    return this.jobs.slice();

  }
  updateSubs()
  {
    this.jobsChanged.next(this.jobs.slice());
  }
  addJob(job: Job)
  {
    this.jobs.push(job);
    this.updateSubs();
  }

  updateJob(index: number, nJob: Job)
  {
    this.jobs[index] = nJob;
    this.updateSubs();
  }

  removeJob(index: number, nJob: Job)
  {
    this.jobs.splice(index, 1);
    this.updateSubs();
  }

}
