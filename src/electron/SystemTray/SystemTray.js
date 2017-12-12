import { Tray, Menu } from 'electron';

class SystemTray {
  constructor(app, mainWindow) {
    this.app = app;
    this.mainWindow = mainWindow;
    this.tray = null;
    this.menu = null;
    this.init();
  }

  init () {
    this.menuInit();
    const iconPath = './dist/assets/img/uwTray.ico';
    this.tray = new Tray(iconPath);
    this.tray.setToolTip(`Σ(っ°Д°;)っ WATHUB`);
    this.tray.on('click', () => {
      this.menu.closePopup(this.mainWindow);
      if (this.mainWindow.isMinimized()) {
          this.mainWindow.restore();
      } else if (this.mainWindow.isVisible()) {
          this.mainWindow.hide();
      } else {
          this.mainWindow.show();
      }
    });
    this.tray.on('right-click', () => {
        this.menu.popup(this.mainWindow);
    });
  }
  menuInit () {
    this.menu = Menu.buildFromTemplate([{
      label: 'Exit',
      click: () => {
        this.app.quit();
      }
    }]);
  }

  getTray () {
    return this.tray;
  }
}
export default SystemTray;
