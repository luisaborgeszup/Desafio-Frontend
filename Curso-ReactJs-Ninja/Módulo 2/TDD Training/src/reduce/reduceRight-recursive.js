'use strict'

import mainReduce from './main-reduce-recursive'
import reverse from '../reverse/reverse-recursive'

const reduceRight = (array, ...parameters) => mainReduce(reverse(array), ...parameters)

export default reduceRight