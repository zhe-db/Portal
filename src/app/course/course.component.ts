import {Component, OnInit} from '@angular/core';
import {CourseService} from './course.services';
import {Location} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {UWAPIServices} from '../uwaterloo-api.services';
import {Course} from './course';
import {PartialCourse} from './partialCourse';
declare var electron: any;

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
    if(ResultCourse.subject) {
      this.ResultCourse = ResultCourse;
      console.log(this.ResultCourse);
      let NotificationMessage = `${ResultCourse.subject} ${ResultCourse.catalog_number}: ${ResultCourse.title}`;
      electron.ipcRenderer.send('CourseResultNotification', ResultCourse ,(event) => {})
    } else {
      alert(`${this.SearchCourse.subject} ${this.SearchCourse.catalog_number} does not exist. Please verify course code.`)
    }
  }

  RemoveClass(event) {
    event.target.classList.remove('bounce');
  }
}
