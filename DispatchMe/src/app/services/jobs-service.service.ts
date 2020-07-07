import { Job } from './../Objects/Job';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobsServiceService {
  jobsChanged = new Subject<Job[]>();
  private jobs: Job[] = [ new Job('Sebring Golf Course', '12:30pm', '27.469190662588694', '-81.47010610810553'),
  new Job('Original Vincent\'s New York Style Pizza', '3:00pm', '27.449845836867976', '-81.42015264741083'),
  new Job('Sebring Golf Course', '12:30pm', '27.469190662588694', '-81.47010610810553'),
  new Job('Sebring Golf Course', '12:30pm', '27.469190662588694', '-81.47010610810553'),
  new Job('Sebring Golf Course', '12:30pm', '27.469190662588694', '-81.47010610810553'),
  new Job('Sebring Golf Course', '12:30pm', '27.469190662588694', '-81.47010610810553'),
  new Job('Sebring Golf Course', '12:30pm', '27.469190662588694', '-81.47010610810553'),
  new Job('Sebring Golf Course', '12:30pm', '27.469190662588694', '-81.47010610810553'),
  new Job('Sebring Golf Course', '12:30pm', '27.469190662588694', '-81.47010610810553'),
  new Job('Sebring Golf Course', '12:30pm', '27.469190662588694', '-81.47010610810553'),
  new Job('Sebring Golf Course', '12:30pm', '27.469190662588694', '-81.47010610810553'),
  new Job('Sebring Golf Course', '12:30pm', '27.469190662588694', '-81.47010610810553'),
  new Job('Sebring Golf Course', '12:30pm', '27.469190662588694', '-81.47010610810553'),
  new Job('Sebring Golf Course', '12:30pm', '27.469190662588694', '-81.47010610810553'),
  new Job('Sebring Golf Course', '12:30pm', '27.469190662588694', '-81.47010610810553'),
];
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