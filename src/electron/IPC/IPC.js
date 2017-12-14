import language from '../Language/language.js';
const {ipcMain} = require('electron');
const {BrowserWindow} = require('electron')
const notifier = require('node-notifier');
const path = require('path');
const url = require('url');
import Utils from '../Utils';

const MODULE_NAME = Utils.moduleName(__filename);
const WindowsToaster = require('node-notifier').WindowsToaster;

class IPC {
    constructor(app, logger, localEvent) {
        this.app = app;
        this.logger = logger;
        this.localEvent = localEvent;
    }

    setWebContents (webContents) {
        this.webContents = webContents;
    }

    init () {
      this.courseInit();
      this.languageInit();
    }

    courseInit() {
      ipcMain.on('CourseResultNotification', (event, ResultCourse) => {
        notifier.notify({
        'title': 'My notification',
        'message': 'Hello, there!'
        });
        this.logger.info(MODULE_NAME, `CourseResultNotification-ipcMain-received`);
        let NotificationMessageTitle = `${ResultCourse.subject} ${ResultCourse.catalog_number}: ${ResultCourse.title}`;
        let NotificationMessageBody = ResultCourse.description;
        this.logger.info(MODULE_NAME, `Notification title: ${NotificationMessageTitle}`);
        this.logger.info(MODULE_NAME, `Notification body: ${NotificationMessageBody}`);
        notifier.notify({
          title: NotificationMessageTitle,
          message: NotificationMessageBody,
          icon: path.join(__dirname, '\\src\\assets\\img\\uw-notification.jpg'), // Absolute path (doesn't work on balloons)
          sound: true, // Only Notification Center or Windows Toasters
          wait: true, // Wait with callback, until user action is taken against notification
          reply: false // Boolean. If notification should take input. Value passed as third argument in callback and event emitter.
        }, function(error, response) {
            // if(error) this.logger.debug(MODULE_NAME, `Notification Error: ${error}`);
            // if(response) this.logger.info(MODULE_NAME, `Notification Response: ${response}`);
        });
      });

      ipcMain.on('OpenRateMyProfessor', (event, profName) => {
        this.logger.info(MODULE_NAME, `OpenRateMyProfessor-ipcMain-received`);
        this.logger.info(MODULE_NAME, `Professor Name: ${profName}`)
        const firstName = profName.split(',')[0];
        const lastName = profName.split(',')[1];
        var rateMyProf = new BrowserWindow({width: 800, height: 600, resizable: true, frame: true});
        rateMyProf.setMenu(null);
        rateMyProf.loadURL(`http://www.ratemyprofessors.com/search.jsp?query=${lastName}+${firstName}`)
        rateMyProf.on('closed', () => {
          rateMyProf = null;
        });
      });
    }

    languageInit() {
      ipcMain.on('SetLanguage', (event, lang) => {
        this.logger.info(MODULE_NAME, `SetLanauge-ipcMain-received`);
        this.logger.info(MODULE_NAME, `Language: ${lang}`);
        language.saveLanguage(lang, this.logger);
      });

      ipcMain.on('LoadLanguage', (event) =>{
        this.logger.info(MODULE_NAME, `LoadLanauge-ipcMain-received`);
        const lang = language.loadLanguage(this.logger);
        this.logger.info(MODULE_NAME, `Language: ${lang}`);
        event.sender.send('LoadLanguage-reply', lang);
      });
    }
}

export default IPC;
