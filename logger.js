const { createLogger, format, transports } = require('winston');

module.exports = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp(),
    format.json()
  ),
  transports: [
    new transports.File({ filename: 'logs/app.log' }),  // writes JSON logs here
    new transports.Console()                            // and still logs to console
  ],
});
