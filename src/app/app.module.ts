import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CalendarModule } from 'angular-calendar';

import { CourseModule } from './course/course.module';
import { EnrollmentModule } from './enrollment/enrollment.module';
import { ClassroomModule } from './classroom/classroom.module';
import { EnrollmentRoutingModule } from './enrollment/enrollment-routing.module';
import { ClassroomRoutingModule } from './classroom/classroom-routing.module';

import { UWAPIServices } from './uwaterloo-api.services';
import { LanguageService} from './language.services';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './MainMenu/MainMenu.component';
import { HeaderComponent } from './Header/Header.component';
import { AppRoutingModule } from './app-routing.module';
import { EnrollmentComponent } from './enrollment/enrollment.component';
import { TermComponent } from './term/term.component';
import { FinalsComponent } from './finals/finals.component';
import { UserComponent } from './user/user.component';
import { BuildingComponent } from './building/building.component';
import { PeopleComponent } from './people/people.component';
import { BotComponent } from './bot/bot.component';

import {SearchFilterPipe} from './searchFilter';


@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    HeaderComponent,
    TermComponent,
    FinalsComponent,
    UserComponent,
    BuildingComponent,
    PeopleComponent,
    BotComponent,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot(),
    FormsModule,
    HttpModule,
    AppRoutingModule,
    EnrollmentRoutingModule,
    ClassroomRoutingModule,
    CourseModule,
    EnrollmentModule,
    ClassroomModule,
    BrowserAnimationsModule
  ],
  providers: [UWAPIServices, LanguageService],
  bootstrap: [AppComponent, HeaderComponent]
})
export class AppModule { }
