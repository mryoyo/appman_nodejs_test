/**
 * Please write asynchronous function (and its test) 
 * that fetchs temperature data from OpenWeatherMap 
 * and returns Bangkok's maxTemp and minTemp (in celsius scale) 
 * for next 7 days. (You can find API key in openweather.key.txt)
 */


// please write test here !!
const { bangkokForecast } = require('./bangkok-forecast')
bangkokForecast().then(console.log).catch(console.error)
[{ date: '2018-01-29', minTemp: 25.21, maxTemp: 27 },
{ date: '2018-01-30', minTemp: 23.28, maxTemp: 31.26 },
{ date: '2018-01-31', minTemp: 20.88, maxTemp: 30.81 },
{ date: '2018-02-01', minTemp: 19.33, maxTemp: 28.77 },
{ date: '2018-02-02', minTemp: 17.3, maxTemp: 31.47 },
{ date: '2018-02-03', minTemp: 18.13, maxTemp: 26.23 },
    { date: '2018-02-04', minTemp: 14.49, maxTemp: 25.41 }]
