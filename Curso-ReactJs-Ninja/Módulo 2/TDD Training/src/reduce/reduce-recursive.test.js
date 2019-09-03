'use strict'

import { expect } from 'chai'
import reduce from './reduce-recursive'
import reduceRight from './reduceRight-recursive'

it('reduce should be a function', () => {
  expect(reduce).to.be.a('function')
})

it('reduce([1, 2, 3], (acc, item) => acc + item) should be equal to 6', () => {
  const before = reduce([1, 2, 3], (acc, item) => acc + item)
  const after = 6
  expect(before).to.be.deep.equal(after)
})

it('reduce([2, 3, 4], (acc, item) => acc + item) should be equal to 9', () => {
  const before = reduce([2, 3, 4], (acc, item) => acc + item)
  const after = 9
  expect(before).to.be.deep.equal(after)
}) 

it('reduce([1, 2, 3], (acc, item) => acc + item, 1) should be equal to 7', () => {
  const before = reduce([1, 2, 3], (acc, item) => acc + item, 1)
  const after = 7
  expect(before).to.be.deep.equal(after)
})

it("reduce([1, 2, 3], (acc, item) => { acc['number' + item] = item; return acc}, {}) should return { number1: 1, number2: 2, number3: 3 }", () => {
  const before = reduce([1, 2, 3], (acc, item) => { acc['number' + item] = item; return acc}, {})
  const after = { number1: 1, number2: 2, number3: 3 }
  expect(before).to.be.deep.equal(after)
})

it('reduce([1, 2], (acc, item, index) => acc + index, 0) should return 1', () => {
  const before = reduce([1, 2], (acc, item, index) => acc + index, 0)
  const after = 1
  expect(before).to.be.deep.equal(after)
})

it('reduce([1, 2], (acc, item, index) => acc + index, 0) should return 1', () => {
  const before = reduce([1, 2], (acc, item, index, array) => acc + array[index], 0)
  const after = 3
  expect(before).to.be.deep.equal(after)
})

it("reduceRight(['sa', 'i', 'lu'], (acc, item) => acc + item, '') should return 'luisa'", () => {
  const before = reduceRight(['sa', 'i', 'lu'], (acc, item) => acc + item, '')
  const after = 'luisa'
  expect(before).to.be.deep.equal(after)
})
