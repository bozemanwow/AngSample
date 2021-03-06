import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DispatchControlComponent } from './dispatch-control/dispatch-control.component';
import { JobListControlComponent } from './JobControl/job-list-control.component';


const routes: Routes = [
  {path: '', redirectTo: '/dispatchcontrol', pathMatch: 'full'},
  {path: 'dispatchcontrol', component: DispatchControlComponent, pathMatch: 'full'},
  {path: 'JobListcontrol', component: JobListControlComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
