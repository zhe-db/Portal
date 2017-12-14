import Utils from '../Utils';

const MODULE_NAME = Utils.moduleName(__filename);
const SingleInstanceInitializer = (app, mainWindow, log) => {
    const shouldQuit = app.makeSingleInstance(() => {
      //  log.debug(MODULE_NAME, 'Someone tried to run a second instance, we should focus our window');
        if (mainWindow) {
            log.debug(MODULE_NAME, 'mainWindow exists');
            if (mainWindow.isMinimized()) {
                mainWindow.restore();
            }
            mainWindow.show();
            mainWindow.focus();
        }
    });
    if (shouldQuit) {
        log.warn(MODULE_NAME, 'Second instance exiting...');
        app.exit();
    }
};

export default SingleInstanceInitializer;
