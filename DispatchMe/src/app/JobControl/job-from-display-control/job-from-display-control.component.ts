import { Subscription } from 'rxjs';
import { JobsServiceService } from './../../services/jobs-service.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-job-from-display-control',
  templateUrl: './job-from-display-control.component.html',
  styleUrls: ['./job-from-display-control.component.css']
})
export class JobFromDisplayControlComponent implements OnInit, OnDestroy {
  jobForm: FormGroup;
  selected = null;
  subSel: Subscription;
  constructor(private jobServ: JobsServiceService) { }
  ngOnDestroy(): void {
    this.subSel.unsubscribe();
  }

  ngOnInit(): void {
    this.selected = null;
    this.subSel =  this.jobServ.jobSelected.subscribe((selected: number) => {
          this.selected = selected;
          this.initForm();
    });
    this.initForm();

  }
  initForm()
  {
    let jobName = '';
    let jlat = '';
    let jlong = '';

    if (this.selected)
    {
     const recipeItem = this.jobServ.getJob(this.selected);
     jobName = recipeItem.name;
     jlat = recipeItem.lat;
     jlong = recipeItem.long;
    }
    this.jobForm = new FormGroup({
     name : new FormControl(jobName),
     lat : new FormControl(jlat),
     long : new FormControl(jlong)
   });
  }

  onCancel(){
    this.selected = null;
    this.initForm();
  }


   onSubmit(){
console.log('Save');
if (this.selected)
    {
      this.jobServ.updateJob(this.selected, this.jobForm.value );
    }
    else {
    this.jobServ.addJob( this.jobForm.value );
    }
   }
}
