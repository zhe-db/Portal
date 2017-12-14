import { Menu } from 'electron';
import Utils from '../Utils';

const MODULE_NAME = Utils.moduleName(__filename);
const productionSetup = (log) => {
    log.info(MODULE_NAME, 'production set up');
};

const devSetup = (mainWindow) => {
    Utils.devMenu(mainWindow, Menu);
};


const EnvironmentSetupInitializer = (mainWindow, log) => {
    if (process.env.NODE_ENV === 'production') {
        productionSetup(log);
    } else {
        devSetup(mainWindow);
    }
};

export default EnvironmentSetupInitializer;
