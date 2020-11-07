import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpaceExInterviewComponent } from './space-ex-interview/space-ex-interview.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'api.spacexdata.com/v3/launches'},
  {path:'api.spacexdata.com/v3/launches',component:SpaceExInterviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
