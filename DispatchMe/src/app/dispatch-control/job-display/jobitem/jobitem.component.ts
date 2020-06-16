import { Job } from './../../../Objects/Job';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-jobitem',
  templateUrl: './jobitem.component.html',
  styleUrls: ['./jobitem.component.css']
})
export class JobitemComponent implements OnInit {
@Input() jobItem: Job;
@Input() index: number;
  constructor() { }

  ngOnInit(): void {
  }

}
