const { readFileSync } = require('fs');
const logFilePath = __dirname + '/data-usage.log';

const raw = readFileSync(logFilePath, 'utf8');

const dataUsage = () => {
  // put your code here !!
};

module.exports = { dataUsage };
