import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CourseComponent} from './course.component';
import {ResultComponent} from './result/result.component';

const coursesRoutes: Routes = [
  { path: 'course/cs245', component: ResultComponent, outlet: 'course' }
]

@NgModule({
  imports: [
    RouterModule.forChild(coursesRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class CourseRoutingModule { }
