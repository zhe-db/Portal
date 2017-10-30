import { Component, OnInit } from '@angular/core';
import { EnrollmentService } from './enrollment.services';
import { LanguageConstant } from './language.constant';
import { LectureData } from './lectureData';
import { TutData } from './tutData';
import { PartialCourse }   from '../course/partialCourse';

@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.template.html',
  styleUrls: ['./enrollment.component.css'],
  providers: [EnrollmentService]
})
export class EnrollmentComponent implements OnInit {
  TextConstant;
  lectureData: LectureData[] = null;
  tutorialData: TutData[] = null;
  searchInput: string;
  searchCourse: PartialCourse;
  constructor(private enrollmentService: EnrollmentService) { }

  ngOnInit() {
    this.TextConstant = LanguageConstant.EN;
    this.searchCourse = new PartialCourse;
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
    });
  }
  
  RemoveClass(event) {
    event.target.classList.remove('bounce');
  }
}
