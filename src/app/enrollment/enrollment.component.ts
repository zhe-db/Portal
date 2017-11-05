import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import { EnrollmentService } from './enrollment.services';
import { LanguageConstant } from './language.constant';
import { LectureData } from './lectureData';
import { TutData } from './tutData';
import { PartialCourse }   from '../course/partialCourse';
import {slideInDownAnimation} from '../animation';
@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.template.html',
  animations: [ slideInDownAnimation ],
  styleUrls: ['./enrollment.component.css']
})
export class EnrollmentComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'relative';
  TextConstant;
  lectureData: LectureData[] = null;
  tutorialData: TutData[] = null;
  searchInput: string;
  searchCourse: PartialCourse;
  resultSwitch: boolean;
  constructor(private enrollmentService: EnrollmentService, private router: Router, private location: Location, private route: ActivatedRoute) { }

  ngOnInit() {
    this.TextConstant = LanguageConstant.CN;
    this.searchCourse = new PartialCourse;
    this.resultSwitch = true;
  }

  submit(): void {
    let query = this.searchInput.replace(/[ \W]/g,'');
    let subject = query.match(/\D+/g)[0].toUpperCase();
    let catalog_number = query.match(/\d+.*/g)[0];
    this.searchCourse.subject = subject;
    this.searchCourse.catalog_number = catalog_number;
    console.log(this.searchCourse);
    this.SearchCourse();
  }

  SearchCourse() {
    this.enrollmentService.searchSection(this.searchCourse).then(res => {
      this.enrollmentService.handleLectureSection(res).then((res) => {
        this.lectureData = res;
        console.log(this.lectureData);
      });
      this.enrollmentService.handleTutorialSection(res).then((res) => {
        this.tutorialData = res;
        console.log(this.tutorialData);
      })
      console.log(this.enrollmentService.tutorialCache);
    });
  }

  RemoveClass(event) {
    event.target.classList.remove('bounce');
  }

  goBack(): void {
    this.location.back();
  }
}
