import { Job } from './../Objects/Job';
import { Injectable } from '@angular/core';
import { JobsServiceService } from './jobs-service.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapPointsServicesService  {

  private MainPoint = new Subject<Job>();
  private selectedJob: number;
  constructor(private jobsSer: JobsServiceService) { }

  public setJobPoint(index: number)
  {
    this.selectedJob = index;
    this.MainPoint.next(this.getSelectedJob());
  }
  public getSelectedJob()
  {
    return this.jobsSer.getJob(this.selectedJob);
  }
  public selectedSub(){
    return this.MainPoint;
  }

}
