import {Injectable, OnInit} from '@angular/core';

import {UWAPIServices} from '../uwaterloo-api.services';
import {LectureData} from './lectureData';
import {TutData} from './tutData';
var uwaterlooApi = require('uwaterloo-api');
declare var electron: any;

@Injectable()
export class EnrollmentService {
  uwclient;
  lectureCache: LectureData[];
  tutorialCache: TutData[];
  uwapi: UWAPIServices;
  constructor() {
   this.uwapi = new UWAPIServices;
   this.uwapi.generateCredentials().then(res => this.uwclient = res);
  }

  handleLectureSection(data): Promise<LectureData[]> {
    return new Promise((resolve, reject) => {
      let res: LectureData[] = [];
      data.forEach((item, index) => {
          if (item.section.includes("LEC")) res.push(item);
      });
      this.lectureCache = res;
      resolve(res);
    });

  }

  handleTutorialSection(data): Promise<TutData[]> {
    return new Promise((resolve, reject) => {
      let res: TutData[] = [];
      data.forEach((item, index) => {
          if (item.section.includes("TUT")) res.push(item);
      });
      this.tutorialCache = res;
      console.log(this.tutorialCache);
      resolve(res);
    });
  }

  searchSection(course): Promise<any> {
    let url = `/courses/${course.subject}/${course.catalog_number}/schedule`;
    return new Promise((resolve, reject) => {
      this.uwclient.get(url, function (err, res) {
        if (err) alert("There may be some network issue. Please try again later.");
        else {
          resolve(res.data);
        }
      })
    });
  }

  getTutorial(classNumber: number): Promise<TutData> {
      console.log("gg");
      console.log(this.tutorialCache);
      return new Promise((resolve, reject) => {
        var res = this.tutorialCache.find(tut => tut.class_number === classNumber);
        resolve(res);
      });
  }

  getLecture(classNumber: number): Promise<LectureData> {
    return new Promise((resolve, reject) => {
      var res = this.lectureCache.find(tut => tut.class_number === classNumber);
      resolve(res);
    });
  }

  handleDate(date: string): string[] {
    let res = [];
    const dateList = date.match(/[A-Z][a-z]*/g);
    dateList.forEach((x) =>{
      switch(x) {
        case 'M':
          res.push('Monday');
          break;
        case 'T':
          res.push('Tuesday');
          break;
        case 'W':
          res.push('Wednesday');
          break;
        case 'Th':
          res.push('Thursday');
          break;
        case 'F':
          res.push('Friday');
          break;
      }
    });
    return res;
  }


}
