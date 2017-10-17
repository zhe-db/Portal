import {Component, OnInit} from '@angular/core';
import {CourseService} from './course.services';
import {Location} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {UWAPIServices} from '../uwaterloo-api.services';
import {Course} from './course';
import {PartialCourse} from './partialCourse';

@Component({
  selector: 'coursePortal',
  templateUrl: './course.template.html',
  styleUrls: ['course.component.scss'],
  providers: [CourseService]
})

export class CourseComponent implements OnInit {
  SearchCourse: PartialCourse;
  ResultCourse: Course = null;
  constructor(private location: Location, private courseSerice: CourseService) {}

  ngOnInit(): void {
    this.SearchCourse =  {subject: undefined, catalog_number: undefined};
  }

  goBack(): void {

  }

  searchCourse() {

  }

  SearchCourseChange(SearchCourse: PartialCourse) {
    this.SearchCourse = SearchCourse;
    console.log(this.SearchCourse)
  }

  ResultChange(ResultCourse: Course) {
    this.ResultCourse = ResultCourse;
    console.log(this.ResultCourse);
  }

  RemoveClass(event) {
    event.target.classList.remove('bounce'); // To Remove
  }
}
