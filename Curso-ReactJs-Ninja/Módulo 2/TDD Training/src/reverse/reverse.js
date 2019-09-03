'use strict'

const reverse = (array, func) => {
  let newArray = []

  for (let i = array.length; i--;) {
    newArray.push(array[i])
  }

  return newArray
}

export default reverse