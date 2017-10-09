import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainMenuComponent } from './MainMenu/MainMenu.component';
import { HeaderComponent } from './Header/Header.component';
import { AppRoutingModule } from './app-routing.module';
import { CourseComponent } from './course/course.component';
import { EnrollmentComponent } from './enrollment/enrollment.component';
import { ClassroomComponent } from './classroom/classroom.component';
import { TermComponent } from './term/term.component';
import { FinalsComponent } from './finals/finals.component';
import { UserComponent } from './user/user.component';
import { BuildingComponent } from './building/building.component';
import { PeopleComponent } from './people/people.component';
import { BotComponent } from './bot/bot.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    HeaderComponent,
    CourseComponent,
    EnrollmentComponent,
    ClassroomComponent,
    TermComponent,
    FinalsComponent,
    UserComponent,
    BuildingComponent,
    PeopleComponent,
    BotComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent, HeaderComponent]
})
export class AppModule { }
