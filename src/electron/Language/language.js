const {app, BrowserWindow} = require('electron')
const path = require('path')
import Storage from '../Storage';

const defaultLanguage = 'EN';

const filename = 'lang';

const getStorage = (app) => {
    const filePath = path.join(app.getPath('userData'), `${filename}.json`);
    console.log(filePath);
    return new Storage(filePath, false);
};

const saveLanguage = (lang) => {
    const storage = getStorage(app);
    storage.write(filename, lang);
};

const loadLanguage = () => {
    const storage = getStorage(app);
    const result = storage.read(filename) || defaultLanguage;
    console.log(result);
    return result;
};


const language = {
    saveLanguage,
    loadLanguage
};

export default language;
