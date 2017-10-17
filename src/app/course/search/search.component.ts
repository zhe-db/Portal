import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {CourseService} from '../course.services';
import {Location} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {UWAPIServices} from '../../uwaterloo-api.services';
import {Course} from '../course';
import {PartialCourse} from '../partialCourse';
import {LanguageConstant} from './language.constant'
@Component({
  selector: 'Search',
  templateUrl: './search.template.html',
  styleUrls: ['search.component.scss'],
  providers: [CourseService]
})

export class SearchComponent implements OnInit {
  info: string;
  input: string;

  @Input('SearchCourse') SearchCourse: PartialCourse;
  @Output() SearchCourseChange = new EventEmitter<PartialCourse>();
  @Output() ResultChange = new EventEmitter<Course>();
  DisplayCourse: Course;
  language = 'EN';
  TextConstant;
  constructor(private location: Location, private courseSerice: CourseService) {}

  ngOnInit(): void {
    this.TextConstant = LanguageConstant.EN;
  }

  goBack(): void {

  }

  Submit(): void {
    let query = this.input.replace(/[ \W]/g,'');
    let subject = query.match(/\D+/g)[0].toUpperCase();
    let catalog_number = query.match(/\d+/g)[0];
    this.SearchCourse.subject = subject;
    this.SearchCourse.catalog_number = catalog_number;
    console.log(this.SearchCourse);
    this.searchCourse();
  }
  searchCourse() {
    this.courseSerice.searchCourse(this.SearchCourse).then(res => {
      this.DisplayCourse = res
      this.displayCourse();
    });
  }

  displayCourse() {
      console.log(this.DisplayCourse);
      this.SearchCourseChange.emit(this.SearchCourse);
      console.log(this.SearchCourse);
      this.ResultChange.emit(this.DisplayCourse);
  }


}
