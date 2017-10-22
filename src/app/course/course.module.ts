import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from '../app-routing.module';
import { CourseRoutingModule } from './courses-routing.module';

import {CourseService} from './course.services';
import {UWAPIServices} from '../uwaterloo-api.services';
import {CourseComponent} from './course.component';
import {SearchComponent} from './search/search.component';
import {ResultComponent} from './result/result.component';


@NgModule({
  declarations: [
    SearchComponent,
    CourseComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    CourseRoutingModule
  ],
  providers: [UWAPIServices, CourseService]
})
export class CourseModule { }
