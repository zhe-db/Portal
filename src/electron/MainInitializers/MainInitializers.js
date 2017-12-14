import path from 'path';
import { app } from 'electron';
// eslint-disable-next-line import/extensions,import/no-unresolved
//import Config from 'ElectronConfig';
import Logger from '../Logger';
import IPC from '../IPC';
import Utils from '../Utils';
import ErrorHandlers from './ErrorHandlers';
import AppReadyInitializer from './AppReadyInitializer';
import SingleInstanceInitializer from './SingleInstanceInitializer';


const config = {width: 800, height: 600, resizable: false, frame: true};
// eslint-disable-next-line prefer-const
let mainWindow = null;
const userDataPath = app.getPath('userData');
const logPath = path.join(userDataPath, 'portal.log');
const log = new Logger(logPath);
const ipc = new IPC(app, log);
const init = async () => {
    /* main exception handler initialization */
    //ErrorHandlers.mainExceptionHandler(app, log);
    /* app ready Initialization */
    mainWindow = await AppReadyInitializer(app, config, log, ipc);
    /* single instance initializer */
    //mainWindow.webContents.show();
    SingleInstanceInitializer(app, mainWindow, log);
};

const MainInitializers = {
    init
};

export default MainInitializers;
