class Logger {
    constructor() {
      this.logLevels = {
        DEBUG: 0,
        INFO: 1,
        WARNING: 2,
        ERROR: 3,
      };
      this.currentLogLevel = this.logLevels.INFO;
    }
  
    setLogLevel(level) {
      this.currentLogLevel = level;
    }
  
    log(message, level) {
      if (level >= this.currentLogLevel) {
        switch (level) {
          case this.logLevels.DEBUG:
            console.debug(message);
            break;
          case this.logLevels.INFO:
            console.info(message);
            break;
          case this.logLevels.WARNING:
            console.warn(message);
            break;
          case this.logLevels.ERROR:
            console.error(message);
            break;
          default:
            console.log(message);
        }
      }
    }
  }
  
  export default Logger;
  