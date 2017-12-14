import Utils from '../Utils';

const MODULE_NAME = Utils.moduleName(__filename);

const mainWindowErrorHandler = (mainWindow, log) => {
    mainWindow.on('error', (args) => {
        log.error(MODULE_NAME, `Main Window Error ${args}`);
    });
};

const mainExceptionHandler = (app, log) => {
    process.on('uncaughtException', (error) => {
        log.error(MODULE_NAME, `UncaughtException: ${error.stack}`);
        app.quit();
    });
};

const ErrorHandlers = {
    mainWindowErrorHandler,
    mainExceptionHandler
};

export default ErrorHandlers;
