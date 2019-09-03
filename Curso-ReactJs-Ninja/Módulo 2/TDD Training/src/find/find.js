'use strict'

const find = (array, func) => {
  for (let i = 0; i < array.length; i++) {
    if (func(array[i], i, array)) {
      return array[i]
    }
  }
}

export default find