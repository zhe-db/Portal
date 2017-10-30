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
  styleUrls: ['result.component.scss'],
  providers: [EnrollmentService]
})

export class ResultComponent implements OnInit {
  TextConstant;
  @Input('lectureData') lectures: LectureData[];
  @Input('tutorialData') tutorials: TutData[];
  constructor(private location: Location, private enrollmentServiceSerice: EnrollmentService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    //this.TextConstant = LanguageConstant.EN;
    console.log(this.lectures);
    console.log(this.tutorials);
  }

  goBack(): void {

  }

  ngAfterViewInit(): void {

  }

}
