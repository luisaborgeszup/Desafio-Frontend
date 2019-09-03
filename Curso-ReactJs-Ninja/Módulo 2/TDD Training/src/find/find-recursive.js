'use strict'

const find = (array, func) => {
  return (function findInternal (arrayInternal, counter) {
    const [head, ...tail] = arrayInternal

    return arrayInternal.length === 0
      ? undefined
      : func(head, counter, array) 
        ? head
        : findInternal(tail, counter + 1)
  })(array, 0)
}

export default find