import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from '../app-routing.module';
import { ClassroomService } from './classroom.services';

import {ClassroomComponent} from './classroom.component';
import { ClassroomDetailComponent } from './classroomDetail/classroomDetail.component';

import { CalendarModule } from 'angular-calendar';

@NgModule({
  declarations: [
    ClassroomComponent,
    ClassroomDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    CalendarModule.forRoot()
  ],
  providers: [ClassroomService]
})
export class ClassroomModule { }
