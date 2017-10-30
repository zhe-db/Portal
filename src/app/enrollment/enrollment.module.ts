import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from '../app-routing.module';
import { EnrollmentRoutingModule } from './enrollment-routing.module';


import {EnrollmentService} from './enrollment.services';
import {UWAPIServices} from '../uwaterloo-api.services';
import {EnrollmentComponent} from './enrollment.component';
import {ResultComponent} from './result/result.component';
import {TutorialDetailComponent} from './tutorialDetail/tutorialDetail.component';
import {LectureDetailComponent} from './lectureDetail/lectureDetail.component';


@NgModule({
  declarations: [
    EnrollmentComponent,
    ResultComponent,
    TutorialDetailComponent,
    LectureDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    EnrollmentRoutingModule
  ],
  providers: [UWAPIServices, EnrollmentService]
})
export class EnrollmentModule { }
