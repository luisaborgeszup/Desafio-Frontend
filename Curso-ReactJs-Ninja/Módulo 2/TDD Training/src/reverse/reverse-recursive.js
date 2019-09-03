'use strict'

const reverse = (array) => {
  return array.length === 0
    ? []
    : [
      array.slice(-1)[0],
      ...reverse(array.slice(0, -1))
    ]
}

export default reverse