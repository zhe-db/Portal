const {app, BrowserWindow} = require('electron')
const path = require('path')
import Storage from '../Storage';
import Utils from '../Utils';

const MODULE_NAME = Utils.moduleName(__filename);
const defaultLanguage = 'EN';

const filename = 'lang';

const getStorage = (app, logger) => {
    const filePath = path.join(app.getPath('userData'), `${filename}.json`);
    logger.info(MODULE_NAME, `Language file location: ${filePath}`);

    return new Storage(filePath, false);
};

const saveLanguage = (lang, logger) => {
    const storage = getStorage(app, logger);
    logger.info(MODULE_NAME, `SaveLanguage-ipcMain-SavedLanguage`);
    logger.info(MODULE_NAME, `SavedLanguage: ${lang}`);
    storage.write(filename, lang);
};

const loadLanguage = (logger) => {
    const storage = getStorage(app, logger);
    const result = storage.read(filename) || defaultLanguage;
    logger.info(MODULE_NAME, `loadLanguage-ipcMain-LoadedLanguage`);
    logger.info(MODULE_NAME, `LoadedLanguage: ${result}`);
    return result;
};


const language = {
    saveLanguage,
    loadLanguage
};

export default language;
