import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { LanguageConstant } from '../language.constant';
import { LectureData } from '../lectureData';
import { EnrollmentService }  from '../enrollment.services';
@Component({
  selector: 'lecture-detail',
  templateUrl: './lectureDetail.template.html',
  styleUrls: [ './lectureDetail.component.scss' ]
})
export class LectureDetailComponent implements OnInit {
  Lecture: LectureData;
  TextConstant;

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
      .subscribe(res => this.Lecture = res);
  }

  goBack(): void {
    this.location.back();
  }
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
