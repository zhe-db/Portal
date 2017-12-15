import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import {LanguageConstant} from './language.constant';
import { LanguageService } from '../language.services';
import {slideInDownAnimation} from '../animation';
@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  animations: [ slideInDownAnimation ],
  styleUrls: ['./classroom.component.scss']
})
export class ClassroomComponent implements OnInit {
  TextConstant;
  constructor(private location: Location, private languageService: LanguageService) { }

  ngOnInit() {
    this.languageService.loadLanguage().then((res) => {
      const lang = res;
      console.log(lang);
      this.TextConstant = LanguageConstant[lang];
      console.log("TextConstant: " + this.TextConstant.TITLE);
    });
      // this.TextConstant = LanguageConstant.EN;
      // console.log("TextConstant: " + this.TextConstant);
  }
  
  RemoveClass(event) {
    event.target.classList.remove('bounce');
  }
  goBack(): void {
    this.location.back();
  }
}
