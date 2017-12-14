import Utils from '../Utils';

const MODULE_NAME = Utils.moduleName(__filename);
const WindowHideInitializer = (mainWindow, log, tray) => {
    mainWindow.on('hide', () => {
        log.info(MODULE_NAME, 'Main window hide');
        tray.setHighlightMode('never');
    });
};

export default WindowHideInitializer;
