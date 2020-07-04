import { Job } from './../Objects/Job';
import { Injectable } from '@angular/core';
import { JobsServiceService } from './jobs-service.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapPointsServicesService  {

  MainPoint = new Subject<Job>();
  selectedJob: Job;
  constructor(private jobsSer: JobsServiceService) { }

  setJobPoint(index: number)
  {
    this.selectedJob = this.jobsSer.getJob(index);
    this.MainPoint.next(this.selectedJob);
  }
}
