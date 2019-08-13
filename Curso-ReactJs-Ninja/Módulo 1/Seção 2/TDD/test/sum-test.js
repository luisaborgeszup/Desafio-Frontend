'use strict' 

const sum = require('./sum')

console.assert(
    typeof sum === 'function',
    'sum should be a function'
)

console.assert(
    sum(1, 2) === 3,
    'sum(1, 2) should return 3'
)

console.assert(
    sum(2, 3) === 5,
    'sum(2, 3) should return 5'
)
