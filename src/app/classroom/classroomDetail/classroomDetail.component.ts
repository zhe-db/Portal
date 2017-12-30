import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { CalendarEvent } from 'angular-calendar';
import { LanguageConstant } from '../language.constant';
import { ClassroomService }  from '../classroom.services';
import { Classroom } from '../classroom';
import { ClassSchedule } from '../classSchedule';
declare var electron: any;
@Component({
  selector: 'classroom-detail',
  templateUrl: './classroomDetail.template.html',
  styleUrls: [ './classroomDetail.component.scss' ]
})
export class ClassroomDetailComponent implements OnInit {
  schedule: ClassSchedule;
  TextConstant;
  view: string = 'week';
  viewDate: Date = new Date();

  events: CalendarEvent<any>[] = [];
  todayEvents = [];

  constructor(
    private classroomService: ClassroomService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    console.log("classroomDetail starts!");
    this.route.params.subscribe(params => {
          this.schedule = {building: params['building'], room: params['room'], data: []};
          this.SearchClassroom();
      });
      this.TextConstant = LanguageConstant.EN;
  }

  SearchClassroom () {
    this.classroomService.searchClassroom(this.schedule).then((res) => {
      this.events = res.data;
      // this.events.forEach((event) => {
      //   if(event.weekday == new Date().getDay()+1) this.todayEvents.push(event);
      // });
      console.log(this.events);
    });
  }

  goBack(): void {
    this.location.back();
  }

}
