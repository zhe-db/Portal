import {Injectable, OnInit} from '@angular/core';

import {UWAPIServices} from '../uwaterloo-api.services';
import {LectureData} from './lectureData';
import {TutData} from './tutData';
var uwaterlooApi = require('uwaterloo-api');
declare var electron: any;

@Injectable()
export class EnrollmentService {
  uwclient;
  lectureCache: LectureData[] = null;
  tutorialCache: TutData[] = null;
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
      return new Promise((resolve, reject) => {
        var res = this.tutorialCache.find(tut => tut.class_number === classNumber)[0];
        resolve(res);
      });
  }

  getLecture(classNumber: number): Promise<LectureData> {
    return new Promise((resolve, reject) => {
      var res = this.lectureCache.find(tut => tut.class_number === classNumber)[0];
      resolve(res);
    });
  }


}
