const logLevels = {
    DEBUG: 0,
    INFO: 1,
    WARNING: 2,
    ERROR: 3,
  };
  
  let currentLogLevel = logLevels.INFO; 
  
  function setLogLevel(level) {
    currentLogLevel = level;
  }
  
  function log(message, level) {
    if (level >= currentLogLevel) {
      switch (level) {
        case logLevels.DEBUG:
          console.debug(message);
          break;
        case logLevels.INFO:
          console.info(message);
          break;
        case logLevels.WARNING:
          console.warn(message);
          break;
        case logLevels.ERROR:
          console.error(message);
          break;
        default:
          console.log(message);
      }
    }
  }
  
  module.exports = {
    logLevels,
    log,
    setLogLevel,
  };