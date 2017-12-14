import { shell } from 'electron';
import Utils from '../Utils';

const MODULE_NAME = Utils.moduleName(__filename);

const openExternal = (mainWindow, event, url) => {
    if (url !== mainWindow.webContents.getURL()) {
        event.preventDefault();
        shell.openExternal(url);
    }
};
const NewWindowInitializer = (mainWindow, log) => {
    mainWindow.webContents.on('new-window', (event, url) => {
        log.info(MODULE_NAME, 'Open new window');
        openExternal(mainWindow, event, url);
    });
    mainWindow.webContents.on('will-navigate', (event, url) => {
        log.info(MODULE_NAME, 'navigation');
        openExternal(mainWindow, event, url);
    });
};

export default NewWindowInitializer;
