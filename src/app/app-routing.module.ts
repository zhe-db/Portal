import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainMenuComponent }   from './MainMenu/MainMenu.component';
import { CourseComponent } from './course/course.component';
import { EnrollmentComponent } from './enrollment/enrollment.component';

const routes: Routes = [
  { path: '', redirectTo: '/mainMenu', pathMatch: 'full' },
  { path: 'mainMenu',  component: MainMenuComponent },
  { path: 'course', component: CourseComponent },
  { path: 'enrollment', component: EnrollmentComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
