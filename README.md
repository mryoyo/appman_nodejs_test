# AppMan Node.js Test

### Problem 01

Find all possible array of 3 unique `indices` of a given _n_ array that sum of all pointed numbers must be equal to a specific target.

```javascript
> const { threeSum } = require('./three-sum')
> const inputArr = [5, 4, 3, 2, 1, 0]
> const target = 5
> threeSum(inputArr, target)
[ [ 1, 4, 5 ], [ 2, 3, 5 ] ]
>
```

### Problem 02

We need to build an inverted pyramid from bricks. To complete the n-th floor, we have to use exactly `n` brick(s). Please find max floor can be built from given `input` bricks

```javascript
> const { maxFloor } = require('./max-floor')
> maxFloor(5)
2
>
```

### Problem 03

We need to transform any positive number to 1 step by step with 2 rules as below:

1. if number is even, must be transformed to (number / 2)
2. if number is odd, must be transformed to either (number + 1) or (number - 1)

Please find min of step(s) to transform given number to 1.

```javascript
> const { minStep } = require('./min-step')
> minStep(5) // 3 steps (n-1) to 4, (n/2) to 2, and (n/2) to 1.
3
>
```

### Problem 04

Please write asynchronous function that takes `n` array of Cryptocurrency symbols and returns their details. Must use data fetched from this [API server](https://coinbin.org).

```javascript
> const { crytoDetails } = require('./crypto-details')
> cryptoDetails(['eth', 'xrp']).then(console.log)
[ { btc: 0.10539134,
    name: 'Ethereum',
    rank: 2,
    ticker: 'eth',
    usd: 1194.4 },
  { btc: 0.00011824,
    name: 'Ripple',
    rank: 3,
    ticker: 'xrp',
    usd: 1.34 } ]
```

### Problem 05

Please write asynchronous function that fetchs temperature data from [OpenWeatherMap](https://openweathermap.org/api) and returns Bangkok's maxTemp and minTemp (in celsius scale) for **next 7 days**.

```javascript
> const { bangkokForecast } = require('./bangkok-forecast')
> bangkokForecast().then(console.log).catch(console.error)
[ { date: '2018-01-29', minTemp: 25.21, maxTemp: 27 },
  { date: '2018-01-30', minTemp: 23.28, maxTemp: 31.26 },
  { date: '2018-01-31', minTemp: 20.88, maxTemp: 30.81 },
  { date: '2018-02-01', minTemp: 19.33, maxTemp: 28.77 },
  { date: '2018-02-02', minTemp: 17.3, maxTemp: 31.47 },
  { date: '2018-02-03', minTemp: 18.13, maxTemp: 26.23 },
  { date: '2018-02-04', minTemp: 14.49, maxTemp: 25.41 } ]
```

### Problem 06

Please write asynchronous function that read a provided `data-usage.log` and generate summary report including `username`, `total usage`, `average daily` for each user.

```javascript
> const { dataUsage } = require('./data-usage')
> dataUsage().then(console.log).catch(console.error)
[ { username: 'user03', total: 19387, average: 1938.7 },
  { username: 'user01', total: 15232, average: 1384.7272727272727 },
  { username: 'user02', total: 15897, average: 1445.1818181818182 } ]
```
