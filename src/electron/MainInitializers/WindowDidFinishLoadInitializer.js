import Utils from '../Utils';


const MODULE_NAME = Utils.moduleName(__filename);

const WindowDidFinishLoadInitializer = (app, mainWindow, log, ipc) => {
    mainWindow.webContents.on('did-finish-load', () => {
        const url = mainWindow.webContents.getURL();
        if (url.indexOf('/index.html') > -1) {
            log.info(MODULE_NAME, 'Finished loading');
            app.emit('loaded');
            mainWindow.focus();
        }
    });
};


export default WindowDidFinishLoadInitializer;
