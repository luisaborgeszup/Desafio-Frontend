'use strict'

const some = (array, func) => {
  for (let i = 0; i < array.length; i++) {
    if (func(array[i], i, array)) {
      return true
    }
  }
}

export default some