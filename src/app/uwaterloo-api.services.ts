import {Injectable} from '@angular/core';
var uwaterlooApi = require('uwaterloo-api');
var os = require('os');

export class UWAPIServices {
  uwclient = new uwaterlooApi({
     API_KEY : '743887d93f1df944a7acae0f78741746'
     });
   generateCredentials(): Promise<any> {
     return Promise.resolve(this.uwclient);
   }
}
