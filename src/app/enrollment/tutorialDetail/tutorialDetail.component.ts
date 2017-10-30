import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { LanguageConstant } from '../language.constant';
import { TutData } from '../tutData';
import { EnrollmentService }  from '../enrollment.services';
@Component({
  selector: 'tutorial-detail',
  templateUrl: './tutorialDetail.template.html',
  styleUrls: [ './tutorialDetail.component.scss' ]
})
export class TutorialDetailComponent implements OnInit {
  Tutorial: TutData;
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
        return this.enrollmentService.getTutorial(+params.get('id'))
      })
      .subscribe(res => this.Tutorial = res);
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
