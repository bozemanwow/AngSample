import { Component, OnInit, Input } from '@angular/core';
import { Job } from 'src/app/Objects/Job';

@Component({
  selector: 'app-job-item-display',
  templateUrl: './job-item-display.component.html',
  styleUrls: ['./job-item-display.component.css']
})
export class JobItemDisplayComponent implements OnInit {
  @Input() jobItem: Job;
  @Input() index: number;
  constructor() { }

  ngOnInit(): void {
  }

}
