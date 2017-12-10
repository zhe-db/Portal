import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CourseModule } from './course/course.module';
import { EnrollmentModule } from './enrollment/enrollment.module';
import { EnrollmentRoutingModule } from './enrollment/enrollment-routing.module';
import { UWAPIServices } from './uwaterloo-api.services';
import { LanguageService} from './language.services';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './MainMenu/MainMenu.component';
import { HeaderComponent } from './Header/Header.component';
import { AppRoutingModule } from './app-routing.module';
import { EnrollmentComponent } from './enrollment/enrollment.component';
import { ClassroomComponent } from './classroom/classroom.component';
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
    ClassroomComponent,
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
    FormsModule,
    HttpModule,
    AppRoutingModule,
    EnrollmentRoutingModule,
    CourseModule,
    EnrollmentModule,
    BrowserAnimationsModule
  ],
  providers: [UWAPIServices, LanguageService],
  bootstrap: [AppComponent, HeaderComponent]
})
export class AppModule { }
