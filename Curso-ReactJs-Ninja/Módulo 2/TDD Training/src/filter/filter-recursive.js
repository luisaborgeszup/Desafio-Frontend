'use strict'

const filter = (array, func) => {
  return (function filterIternal (arrayInternal, counter) {
    const [head, ...tail] = arrayInternal
    
    return arrayInternal.length === 0
      ? []
      : (func(head, counter, array) ? [head] : []).concat(filterIternal(tail, counter + 1))
  })(array, 0)
}

export default filter