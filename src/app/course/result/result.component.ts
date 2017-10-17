import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {CourseService} from '../course.services';
import {Location} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {UWAPIServices} from '../../uwaterloo-api.services';
import {Course} from '../course';
import {PartialCourse} from '../partialCourse';

@Component({
  selector: 'Result',
  templateUrl: './result.template.html',
  styleUrls: ['result.component.scss'],
  providers: [CourseService]
})

export class ResultComponent implements OnInit {
  @Input('ResultCourse') MainCourse: Course;
  constructor(private location: Location, private courseSerice: CourseService) {}

  ngOnInit(): void {
  }

  goBack(): void {

  }

}
