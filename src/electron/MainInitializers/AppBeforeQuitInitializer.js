import Utils from '../Utils';

const MODULE_NAME = Utils.moduleName(__filename);

const AppBeforeQuitInitializer = (app, mainWindow, log) => {
    app.on('before-quit', () => {
        log.info(MODULE_NAME, 'App before quit');
        mainWindow.removeAllListeners('close');
        log.debug(MODULE_NAME, 'removed close listener');
    });
};

export default AppBeforeQuitInitializer;
