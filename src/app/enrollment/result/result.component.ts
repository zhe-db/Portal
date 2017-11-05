import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {EnrollmentService} from '../enrollment.services';
import {Location} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LectureData} from '../lectureData';
import {TutData} from '../tutData';
import {ActivatedRoute} from '@angular/router';
import {LanguageConstant} from './language.constant';


@Component({
  selector: 'Result',
  templateUrl: './result.template.html',
  styleUrls: ['result.component.scss']
})

export class ResultComponent implements OnInit {
  TextConstant;
  lectures: LectureData[] = null;
  tutorials: TutData[] = null;
  btnMessage: string;
  resultSwitch: boolean;
  constructor(private location: Location, private enrollmentService: EnrollmentService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.lectures = this.enrollmentService.lectureCache;
    this.tutorials = this.enrollmentService.tutorialCache;
    this.resultSwitch = false;
    this.btnMessage = "Tutorial";
    console.log(this.lectures);
  }
  
  ngAfterViewInit(): void {

  }

  switchContent() {
    this.resultSwitch = !this.resultSwitch;
    this.btnMessage = this.resultSwitch? "Lecture" : "Tutorial";
  }

  goBack(): void {
    this.location.back();
  }
}
