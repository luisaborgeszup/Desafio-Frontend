'use strict'

import { expect } from 'chai'
import find from './find-recursive'

it('find should be a function', () => {
  expect(find).to.be.a('function')
})

it('find([1, 2, 3], (item) => item === 1) should be equal to 1', () => {
  const before = find([1, 2, 3], (item) => item === 1)
  const after = 1
  expect(before).to.be.equal(after)
})

it('find([1, 2, 3], (item) => item === 2) should be equal to 2', () => {
  const before = find([1, 2, 3], (item) => item === 2)
  const after = 2
  expect(before).to.be.equal(after)
})

it("find([1, 2, 3], (item) => item === 5) should be equal to 'undefined'", () => {
  const before = find([1, 2, 3], (item) => item === 5)
  const after = undefined
  expect(before).to.be.equal(after)
})

it('find([1, 2, 3], (item) => item < 3) should be equal to 1', () => {
  const before = find([1, 2, 3], (item) => item < 3)
  const after = 1
  expect(before).to.be.equal(after)
})