import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { LanguageConstant } from '../language.constant';
import { LectureData } from '../lectureData';
import { EnrollmentService }  from '../enrollment.services';
declare var electron: any;
@Component({
  selector: 'lecture-detail',
  templateUrl: './lectureDetail.template.html',
  styleUrls: [ './lectureDetail.component.scss' ]
})
export class LectureDetailComponent implements OnInit {
  Lecture: LectureData;
  TextConstant;
  availableSeats: boolean;
  seats: number;
  googleMapUrl: string;
  weekDays: string[];
  constructor(
    private enrollmentService: EnrollmentService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.TextConstant = LanguageConstant.EN;
    this.route.paramMap
      .switchMap((params: ParamMap) => {
        return this.enrollmentService.getLecture(+params.get('id'))
      })
      .subscribe((res) => {
        this.Lecture = res;
        this.availableSeats = res.enrollment_capacity - res.enrollment_total > 0 ? true : false;
        this.seats = this.availableSeats? res.enrollment_capacity - res.enrollment_total : 0;
        this.googleMapUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyDO6-L6eaEV_VofH98FSo0ehrZOCoXC6iI&q=${this.Lecture.classes[0].location.building}+${this.Lecture.classes[0].location.room}+Wateloo,Ontario`;
        this.weekDays = this.enrollmentService.handleDate(res.classes[0].date.weekdays);
        console.log(this.weekDays);
      });
  }

  goBack(): void {
    this.location.back();
  }

  goRateMyProf() {
    let profName = this.Lecture.classes[0].instructors[0];
    console.log('goRateMyProf sent');
    electron.ipcRenderer.send('OpenRateMyProfessor', profName);
  }
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
