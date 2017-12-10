import {Injectable, OnInit} from '@angular/core';
declare var electron: any;

@Injectable()

export class LanguageService {
  public lang: string;
  constructor() {
    this.lang = 'EN';
  }

  SetLanguage(lang: string) {
    this.lang = lang;
    electron.ipcRenderer.send('SetLanguage', lang);
  }

  loadLanguage():Promise<any> {
    return new Promise((resolve, reject) => {
      electron.ipcRenderer.send('LoadLanguage');
      electron.ipcRenderer.on('LoadLanguage-reply', (event, lang) => {
        console.log(lang);
        this.lang = lang;
        resolve(this.lang);
      });
    })
  }
}
