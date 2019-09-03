'use strict'

import mainReduce from "./main-reduce";
import reverse from "../reverse/reverse";

const reduceRight = (array, ...parameters) => mainReduce(reverse(array), ...parameters)

export default reduceRight