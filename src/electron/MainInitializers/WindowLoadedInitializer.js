import Utils from '../Utils';

const MODULE_NAME = Utils.moduleName(__filename);
const WindowLoadedInitializer = (ipc, app, mainWindow, config, log) => {
    app.once('loaded', () => {
        log.info(MODULE_NAME, 'App window is loaded!');
    });
};

export default WindowLoadedInitializer;
