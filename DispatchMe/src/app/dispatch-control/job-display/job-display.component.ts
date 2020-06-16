import { Job } from './../../Objects/Job';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-display',
  templateUrl: './job-display.component.html',
  styleUrls: ['./job-display.component.css']
})
export class JobDisplayComponent implements OnInit {
jobs: Job[];
  constructor() {
    this.jobs =  [ new Job('first', 'today', 'home'), new Job('2', 'today', 'work')];
  }

  ngOnInit(): void {
  }

}
