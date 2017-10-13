import {Injectable, OnInit} from '@angular/core';

import {UWAPIServices} from '../uwaterloo-api.services';
var uwaterlooApi = require('uwaterloo-api');
import {Course} from './course';

@Injectable()
export class CourseService {
  uwclient;
  uwapi: UWAPIServices;
  constructor() {
   this.uwapi = new UWAPIServices;
   this.uwapi.generateCredentials().then(res => this.uwclient = res);
  }

  searchCourse(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.uwclient.get("/courses/CS/246", function (err, res) {
        resolve(res);
      })
    });
  }
}
