import { server } from 'electron-redux-connector';
import ElectronReduxConstant from '../../common/ElectronReduxConstant';
import { LocalEventConstant } from '../LocalEvent';
import Utils from '../Utils';

const MODULE_NAME = Utils.moduleName(__filename);
const listen = (app, logger, localEvent) => {
    server.listen(ElectronReduxConstant.LANGUAGE_SWITCHER, (event, arg) => {
        logger.debug(MODULE_NAME, `received IPC LanguageSwitcher message: ${JSON.stringify(arg)}`);
        Utils.language.saveLanguage(app, arg);
        localEvent.emit(LocalEventConstant.LANGUAGE_CHANGED, arg);
        event.sender.send(ElectronReduxConstant.ELECTRON_LISTENER_CHANNEL, {
            type: ElectronReduxConstant.LANGUAGE_SWITCHER_FULFILLED,
            payload: arg
        });
    });
};

const sendLanguage = (app, webContents, logger, localEvent) => {
    const language = Utils.language.loadLanguage(app, logger);
    if (language) {
        const action = {
            type: ElectronReduxConstant.LANGUAGE_SWITCHER_FULFILLED,
            payload: language
        };
        localEvent.emit(LocalEventConstant.LANGUAGE_CHANGED, language);
        logger.debug(MODULE_NAME, `sent IPC LanguageSwitcher message: ${JSON.stringify(action)}`);
        server.send(webContents, ElectronReduxConstant.ELECTRON_LISTENER_CHANNEL, action);
    }
};

const languageSwitcherIPC = {
    listen,
    sendLanguage
};

export default languageSwitcherIPC;
