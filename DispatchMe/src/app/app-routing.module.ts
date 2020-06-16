import { DispatchControlComponent } from './dispatch-control/dispatch-control.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: '/dispatchcontrol', pathMatch: 'full'},
  {path: 'dispatchcontrol', component: DispatchControlComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }