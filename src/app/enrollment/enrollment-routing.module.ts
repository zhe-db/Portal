import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EnrollmentComponent }   from './enrollment.component';
import { ResultComponent } from './result/result.component';
import { TutorialDetailComponent } from './tutorialDetail/tutorialDetail.component';
import { LectureDetailComponent } from './lectureDetail/lectureDetail.component';

const result_routes: Routes = [
  { path: 'enrollment',
    component: EnrollmentComponent,
    children: [
      { path: '', component: ResultComponent, outlet: 'resultRouter', pathMatch: 'full' },
      { path: 'tutorial/:subject/:catalog_number/:id', component: TutorialDetailComponent, outlet: 'resultRouter', pathMatch: 'full' },
      { path: 'lecture/:subject/:catalog_number/:id', component: LectureDetailComponent, outlet: 'resultRouter', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(result_routes) ],
  exports: [ RouterModule ]
})
export class EnrollmentRoutingModule {}
