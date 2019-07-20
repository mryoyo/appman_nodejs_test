// please write test here !!
/**
 * Please write asynchronous function (and its test) 
 * that read a provided data-usage.log and generate summary report 
 * including username, total usage, average daily for each user.
 */

const { dataUsage } = require('./data-usage')
dataUsage().then(console.log).catch(console.error)
[{ username: 'user03', total: 19387, average: 1938.7 },
{ username: 'user01', total: 15232, average: 1384.7272727272727 },
    { username: 'user02', total: 15897, average: 1445.1818181818182 }]