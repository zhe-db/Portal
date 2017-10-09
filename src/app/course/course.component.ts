import {Component} from '@angular/core';
import {CourseService} from './course.services'

@Component({
  selector: 'coursePortal',
  templateUrl: './course.template.html',
  styleUrls: ['course.component.scss'],
  providers: [CourseService]
})

export class CourseComponent {

}
