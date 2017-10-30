const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')
const {ipcMain} = require('electron')
const {Tray} = require('electron')
const notifier = require('node-notifier');

const WindowsToaster = require('node-notifier').WindowsToaster;

// var notifier = new WindowsToaster({
//   withFallback: false, // Fallback to Growl or Balloons?
//   customPath: void 0 // Relative/Absolute path if you want to use your fork of SnoreToast.exe
// });



notifier.on('click', function (notifierObject, options) {
  // Triggers if `wait: true` and user clicks notification
});

notifier.on('timeout', function (notifierObject, options) {
  // Triggers if `wait: true` and notification closes
});

require('electron-reload')(__dirname, {
  electron: path.join(__dirname, 'node_modules', '.bin', 'elctron'),
  hardResetMethod: 'exit'
});

let win

function createWindow () {
  win = new BrowserWindow({width: 800, height: 600, resizable: false, frame: true})
  win.setMenu(null);

  win.loadURL(url.format({
    pathname: path.join(__dirname, '/dist/index.html'),
    protocol: 'file:',
    slashes: true
  }))

  // Open the DevTools.
  win.webContents.openDevTools()


  win.on('closed', () => {
    win = null
  })
}


app.on('ready', createWindow)


app.on('window-all-closed', () => {

  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})

ipcMain.on('CourseResultNotification', (event, ResultCourse) => {
  notifier.notify({
  'title': 'My notification',
  'message': 'Hello, there!'
});
  console.log('ipc process received!')
  let NotificationMessageTitle = `${ResultCourse.subject} ${ResultCourse.catalog_number}: ${ResultCourse.title}`;
  let NotificationMessageBody = ResultCourse.description;
  console.log(NotificationMessageTitle);
  console.log(NotificationMessageBody);
  notifier.notify({
    title: NotificationMessageTitle,
    message: NotificationMessageBody,
    icon: path.join(__dirname, '\\src\\assets\\img\\uw-notification.jpg'), // Absolute path (doesn't work on balloons)
    sound: true, // Only Notification Center or Windows Toasters
    wait: true, // Wait with callback, until user action is taken against notification
    reply: false // Boolean. If notification should take input. Value passed as third argument in callback and event emitter.
  }, function(error, response) {
      console.log(error)
      console.log(response)
  });

})
