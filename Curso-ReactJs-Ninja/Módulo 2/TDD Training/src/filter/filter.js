'use strict'

const filter = (array, func) => {
  let newarray = []

  for (let i = 0; i < array.length; i++) {
    if (func(array[i], i, array)) {
      newarray.push(array[i])
    }
  }

  return newarray
}

export default filter