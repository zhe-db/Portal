import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {CourseService} from '../course.services';
import {Location} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {UWAPIServices} from '../../uwaterloo-api.services';
import {Course} from '../course';
import {PartialCourse} from '../partialCourse';
import {ActivatedRoute} from '@angular/router';
import {LanguageConstant} from './language.constant';


@Component({
  selector: 'Result',
  templateUrl: './result.template.html',
  styleUrls: ['result.component.scss'],
  providers: [CourseService]
})

export class ResultComponent implements OnInit {
  private fragment: String;
  TextConstant;
  @Input('ResultCourse') MainCourse: Course;
  constructor(private location: Location, private courseSerice: CourseService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.TextConstant = LanguageConstant.EN;
  }

  goBack(): void {

  }

  ngAfterViewInit(): void {
   try {
     document.querySelector('#' + this.fragment).scrollIntoView();
   } catch (e) { }
 }

}
