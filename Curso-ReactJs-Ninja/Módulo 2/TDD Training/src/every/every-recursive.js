'use strict'

const every = (array, func) => {
  return (function everyInternal(arrayInternal, counter) {
    const [head, ...tail] = arrayInternal

    return arrayInternal.length === 0
      ? true
      : !func(head, counter, array)
        ? false
        : everyInternal(tail, counter + 1)
  })(array, 0)
}

export default every