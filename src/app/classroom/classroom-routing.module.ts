import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClassroomComponent }   from './classroom.component';
import { ClassroomDetailComponent } from './classroomDetail/classroomDetail.component';

const result_routes: Routes = [
  { path: 'classroom',
    component: ClassroomComponent,
    children: [
      { path: ':building/:room', component: ClassroomDetailComponent, outlet: 'classroomResultRouter', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(result_routes) ],
  exports: [ RouterModule ]
})
export class ClassroomRoutingModule {}
