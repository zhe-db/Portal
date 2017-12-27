import {Injectable, OnInit} from '@angular/core';

import {UWAPIServices} from '../uwaterloo-api.services';
var uwaterlooApi = require('uwaterloo-api');
declare var electron: any;

@Injectable()
export class ClassroomService {
  uwclient;
  uwapi: UWAPIServices;
  constructor() {
   this.uwapi = new UWAPIServices;
   this.uwapi.generateCredentials().then(res => this.uwclient = res);
  }

  searchClassroom(schedule):Promise<any> {
    console.log(schedule);
    const self = this;
    if (schedule.building && schedule.room) {
      let building = schedule.building;
      let room = schedule.room;
      let url = `/buildings/${building}/${room}/courses`;
      console.log(url);
      return new Promise((resolve, reject) => {
        this.uwclient.get(url, function (err, res) {
          if (err) alert("There may be some network issue. Please try again later.");
          else {
            resolve(self.handleClassroom(res.data, schedule));
          }
        });
      });
    }
  }

  handleClassroom(courses, schedule) {
    console.log(schedule);
    let now = new Date();
    const todayDayValue = now.getDay();
    const todayDateValue = now.getDate();
    const todayMonth = now.getMonth();
    const todayYear = now.getFullYear();
    const numberOfDaysInWeek = 7;
    courses.forEach((course) => {
      const weekdays = this.handleDate(course.weekdays);
      weekdays.forEach((weekday) => {
        let dayValue;
        switch(weekday) {
          case 'M':
            dayValue = 1;
            break;
          case 'T':
            dayValue = 2;
            break;
          case 'W':
            dayValue = 3;
            break;
          case 'Th':
            dayValue = 4;
            break;
          case 'F':
            dayValue = 5;
            break;
          default:
            dayValue = 0;
        }
        const weekDayValue = dayValue - todayDayValue > 0? dayValue - todayDayValue : numberOfDaysInWeek + dayValue - todayDayValue;
        course.start = new Date(todayYear, todayMonth, todayDateValue + weekDayValue, course.start_time.match(/\d\d/g)[0], course.start_time.match(/\d\d/g)[1], 0, 0);
        course.end = new Date(todayYear, todayMonth, todayDateValue + weekDayValue, course.end_time .match(/\d\d/g)[0], course.end_time.match(/\d\d/g)[1], 0, 0);
        course.title = `${course.subject} ${course.catalog_number}: ${course.title}`;
        course.color = {
            primary: '#ad2121',
            secondary: '#FAE3E3'
        }
        course.weekday = dayValue;
        schedule.data.push(course);
      });
    });
    return schedule;
  }

  handleDate(date: string): string[] {
    let res = [];
    const dateList = date.match(/[A-Z][a-z]*/g);
    dateList.forEach((x) =>{
      res.push(x);
    });
    return res;
  }

}
