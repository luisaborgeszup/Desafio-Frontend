'use strict'

const map = (array = [], func = (item) => item) => {
  return (function mapInternal(arrayInternal, counter) {
    const [head, ...tail] = arrayInternal
    
    return arrayInternal.length === 0 ? [] : [
      func(head, counter, array),
      ...mapInternal(tail, counter + 1)
    ]
  })(array, 0)
}

export default map
