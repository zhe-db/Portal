import Utils from '../Utils';

const MODULE_NAME = Utils.moduleName(__filename);
const WindowShowInitializer = (mainWindow, log, tray) => {
    mainWindow.on('show', () => {
        log.info(MODULE_NAME, 'Main window show');
        tray.setHighlightMode('always');
    });
};

export default WindowShowInitializer;
