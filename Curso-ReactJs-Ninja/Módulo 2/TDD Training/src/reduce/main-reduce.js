'use strict'

const mainReduce = (array, func, initialValue) => {
  let acc = initialValue
  let arrayCopy = array
  
  if (initialValue === undefined) {
    acc = array[0]
    arrayCopy = array.slice(1)
  }

  for (let i = 0; i < arrayCopy.length; i++) {
    acc = func(acc, arrayCopy[i], i, arrayCopy)
  }

  return acc
}

export default mainReduce