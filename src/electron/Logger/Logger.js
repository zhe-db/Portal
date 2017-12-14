import log from 'electron-log';

const LOG_FORMAT = '[{y}-{m}-{d} {h}:{i}:{s}][{level}] {text}';
const LOG_SIZE = 10 * 1024 * 1024;
class Logger {
    constructor(logPath) {
        this.logPath = logPath;
        this.logger = log;
        // console log config
        this.logger.transports.console.format = LOG_FORMAT;
        this.logger.transports.console.level = 'debug';

        // file log config
        this.logger.transports.file.level = 'debug';
        this.logger.transports.file.format = LOG_FORMAT;
        this.logger.transports.file.maxSize = LOG_SIZE;
        this.logger.transports.file.file = logPath;
    }

    debug (moduleName, msg) {
        this.logger.debug(`[${moduleName}] - ${msg}`);
    };

    info (moduleName, msg) {
        this.logger.info(`[${moduleName}] - ${msg}`);
    };

    warn (moduleName, msg) {
        this.logger.warn(`[${moduleName}] - ${msg}`);
    };

    error (moduleName, msg) {
        this.logger.error(`[${moduleName}] - ${msg}`);
    };
}

export default Logger;
