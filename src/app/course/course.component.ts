import {Component, OnInit} from '@angular/core';
import {CourseService} from './course.services';
import {Location} from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {UWAPIServices} from '../uwaterloo-api.services';

@Component({
  selector: 'coursePortal',
  templateUrl: './course.template.html',
  styleUrls: ['course.component.scss'],
  providers: [CourseService]
})

export class CourseComponent implements OnInit {
  info: string;
  constructor(private location: Location, private courseSerice: CourseService) {}

  ngOnInit(): void {
    this.courseSerice.searchCourse().then(res => console.log(res.data));
  }
  goBack(): void {
  }
}
