import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EnrollmentComponent }   from './enrollment.component';
import { ResultComponent } from './result/result.component';
import { TutorialDetailComponent } from './tutorialDetail/tutorialDetail.component';
import { LectureDetailComponent } from './lectureDetail/lectureDetail.component';

const routes: Routes = [
  { path: '', redirectTo: '/enrollment', pathMatch: 'full' },
  { path: 'enrollment',  component: ResultComponent },
  { path: 'tutorial/:id', component: TutorialDetailComponent },
  { path: 'lecture/:id', component: LectureDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class EnrollmentRoutingModule {}
