import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import {LanguageConstant} from './language.constant';
import { LanguageService } from '../language.services';
import {slideInDownAnimation} from '../animation';
import {ClassroomService} from './classroom.services';

import {ClassSchedule} from './classSchedule';
import {Classroom} from './classroom';

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  animations: [ slideInDownAnimation ],
  styleUrls: ['./classroom.component.scss']
})
export class ClassroomComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'relative';
  TextConstant;
  searchInput;
  classroomSchedule;
  constructor(private location: Location, private languageService: LanguageService, private classroomService: ClassroomService, private router: Router,
    private route: ActivatedRoute,) { }

  ngOnInit() {
    // this.languageService.loadLanguage().then((res) => {
    //   const lang = res;
    //   console.log(lang);
    //   this.TextConstant = LanguageConstant[lang];
    //   console.log("TextConstant: " + this.TextConstant.TITLE);
    // });
      this.classroomSchedule = false;
      this.TextConstant = LanguageConstant.EN;
      console.log("TextConstant: " + this.TextConstant);
  }

  submit(): void {
    let query = this.searchInput.replace(/[ \W]/g,'');
    let building = query.match(/\D+/g)[0].toUpperCase();
    let room = query.match(/\d+.*/g)[0];
    console.log(`Building: ${building}, room: ${room}`);
    if (building && room) this.classroomSchedule = true;
    this.router.navigate([{ outlets: { classroomResultRouter: [building, room]}}], { relativeTo: this.route });
  }

  RemoveClass(event) {
    event.target.classList.remove('bounce');
  }

  goBack(): void {
    this.router.navigate(['mainMenu'])
  }
}
