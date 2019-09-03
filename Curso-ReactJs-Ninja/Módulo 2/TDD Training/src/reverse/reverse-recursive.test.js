'use strict'

import { expect } from 'chai'
import reverse from './reverse-recursive'

it('reverse should be a function', () => {
  expect(reverse).to.be.a('function')
})

it('reverse([1, 2, 3], (item) => item) should return [3, 2, 1]', () => {
  expect(reverse([1, 2, 3], (item) => item)).to.be.deep.equal([3, 2, 1])
})

it('reverse([0, 2, 3], (item) => item) should return [3, 2, 0]', () => {
  expect(reverse([0, 2, 3], (item) => item)).to.be.deep.equal([3, 2, 0])
})

it("reverse(['luisa', 'lichfett']) should return ['lichfett', 'luisa']", () => {
  expect(reverse(['luisa', 'lichfett'], (item) => item)).to.be.deep.equal(['lichfett', 'luisa'])
})

it('reverse([1, 2, 3, 5], (item, index) => item === index + 1) should return [5, 3, 2, 1]', () => {
  expect(reverse([1, 2, 3, 5], (item, index) => item === index + 1)).to.be.deep.equal([5, 3, 2, 1])
})