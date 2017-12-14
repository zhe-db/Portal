import Utils from '../Utils';

const MODULE_NAME = Utils.moduleName(__filename);
const WindowCloseInitializer = (app, mainWindow, log) => {
    mainWindow.on('close', (event) => {
        log.info(MODULE_NAME, 'Main window hide');
        event.preventDefault();
        mainWindow.hide();
    });
};

export default WindowCloseInitializer;
