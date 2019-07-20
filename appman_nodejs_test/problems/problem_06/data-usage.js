const { readFileSync } = require('fs');
const logFilePath = __dirname + '/data-usage.log';
const moment = require("moment");

const raw = readFileSync(logFilePath, 'utf8');

const dataUsage = () => {
  // put your code here !!
  // let text = JSON.stringify(raw)
  var record2 = []

  var textRecord = raw.split("\r\n")
  record2 = convertToObj(textRecord)

  var a = record2.reduce((acc, value, key) => {

    if (acc[value.username] == undefined) {

      acc[value.username] = {
        total: 0,
        averrage: 0
      }

    }
    acc[value.username].total += value.data
    return acc
  }, {})

  console.log(a)
  debugger
  return a
};

function convertToObj(recordLists) {
  let result = []

  recordLists.forEach(record => {
    let value1 = record.split(",")
    result.push({
      date: value1[0],
      username: value1[1].replace("user=", ""),  //"user="
      data: Number(value1[2].replace("data=", ""))    //",data="
    })
  });
  return result
}

module.exports = { dataUsage };
