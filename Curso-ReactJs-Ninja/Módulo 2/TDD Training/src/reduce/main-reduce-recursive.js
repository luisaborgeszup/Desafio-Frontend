'use strict'

const isUndefined = (initialValue) => initialValue === undefined

const mainReduce = (array, func, initialValue) => {
  const acc = isUndefined(initialValue) ? array[0] : initialValue
  const arrayCopy = isUndefined(initialValue) ? array.slice(1) : array

  return (function mainReduceInternal (accInternal, arrayInternal, counter) {
    const [head, ...tail] = arrayInternal
    const accNext = () => func(accInternal, head, counter, arrayCopy)
    
    return arrayInternal.length === 0
      ? accInternal
      : mainReduceInternal(accNext(), tail, counter + 1)

  })(acc, arrayCopy, 0)
}

export default mainReduce