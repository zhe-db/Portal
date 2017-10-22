import {Injectable, OnInit} from '@angular/core';

import {PartialCourse} from './partialCourse';
import {Course} from './course';
import {UWAPIServices} from '../uwaterloo-api.services';
var uwaterlooApi = require('uwaterloo-api');
declare var electron: any;

@Injectable()
export class CourseService {
  uwclient;
  uwapi: UWAPIServices;
  constructor() {
   this.uwapi = new UWAPIServices;
   this.uwapi.generateCredentials().then(res => this.uwclient = res);
  }

  searchCourse(course: PartialCourse): Promise<any> {
    let url = "/courses/" + course.subject + "/" + course.catalog_number;
    return new Promise((resolve, reject) => {
      this.uwclient.get(url, function (err, res) {
        if (err) alert("There may be some network issue. Please try again later.");
        else {
          let resultCourse: Course = res.data;
          resolve(resultCourse);
         }
      })
    });
  }


}
