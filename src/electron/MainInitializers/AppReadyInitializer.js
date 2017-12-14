import { BrowserWindow } from 'electron';
import WindowReadyToShowInitializer from './WindowReadyToShowInitializer';
import WindowCloseInitializer from './WindowCloseInitializer';
import WindowDidFinishLoadInitializer from './WindowDidFinishLoadInitializer';
//import EnvironmentSetupInitializer from './EnvironmentSetupInitializer';
import WindowLoadedInitializer from './WindowLoadedInitializer';
import NewWindowInitializer from './NewWindowInitializer';
import WindowShowInitializer from './WindowShowInitializer';
import WindowHideInitializer from './WindowHideInitializer';
import AppBeforeQuitInitializer from './AppBeforeQuitInitializer';
//import AutoLauncher from '../AutoLauncher';
//import ErrorHandlers from './ErrorHandlers';
import SystemTray from '../SystemTray';
import Utils from '../Utils';

const MODULE_NAME = Utils.moduleName(__filename);
const AppReadyInitializer = (app, config, log, ipc) => {
    return new Promise((resolve) => {
        app.once('ready', () => {
            log.info(MODULE_NAME, 'App is ready!');
            const mainWindow = new BrowserWindow({width: 800, height: 600, resizable: false, frame: true});
            ipc.setWebContents(mainWindow.webContents);

            /* window did finish load initializer */
            WindowDidFinishLoadInitializer(app, mainWindow, log, ipc);

            /* IPC init */
            ipc.init();

            /* window close initialization */
            WindowCloseInitializer(app, mainWindow, log);

            /* window ready to show initializer */
            WindowReadyToShowInitializer(app, mainWindow, config, log);

            /* app tasks initializer */
            WindowLoadedInitializer(ipc, app, mainWindow, config, log);

            /* mainWindowErrorHanlder */
          //  ErrorHandlers.mainWindowErrorHandler(mainWindow, log);

            /* NewWindowInitializer */
            NewWindowInitializer(mainWindow, log);

            /* app before quit initialization */
            AppBeforeQuitInitializer(app, mainWindow, log);

            /* system tray initializer */
            mainWindow.setMenu(null);
            mainWindow.webContents.openDevTools()
            const systemTray = new SystemTray(app, mainWindow, log);
            WindowHideInitializer(app, mainWindow, log, systemTray.getTray());
            WindowShowInitializer(app, mainWindow, log, systemTray.getTray());
            /* load blank page */
          //  mainWindow.loadURL('about:blank');

            /* environment setup initializer */
            //EnvironmentSetupInitializer(mainWindow, log);
            resolve(mainWindow);
        });
    });
};

export default AppReadyInitializer;
