import path from 'path';
import Utils from '../Utils';

const MODULE_NAME = Utils.moduleName(__filename);

const WindowReadyToShowInitializer = (app, mainWindow, config, log) => {
        if (process.argv.length > 1 && process.argv[1] === 'hidden') {
            log.debug(MODULE_NAME, `command line args: ${process.argv}`);
            log.info(MODULE_NAME, 'app starts in hidden mode');
            mainWindow.hide();
        } else {
            log.info(MODULE_NAME, 'Showing main window');
            mainWindow.show();
        }

        let url = '../../../dist/index.html';
            url = path.resolve(__dirname, url);
        log.info(MODULE_NAME, `Navigating to '${url}'...`);
        mainWindow.loadURL(`file://${url}`);
};


export default WindowReadyToShowInitializer;
