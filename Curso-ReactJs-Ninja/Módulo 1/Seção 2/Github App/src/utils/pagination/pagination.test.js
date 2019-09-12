'use strict'

import { expect } from 'chai'
import pagination from './index'

test('pagination should be a function', () => {
  expect(pagination).to.be.a('function')
})

test('pagination({ total: 1, activePage: 1}) should return [1]', () => {
  const parameters = pagination({ total: 1, activePage: 1})
  const result = [1]
  expect(parameters).to.be.deep.equal(result)
})

test('pagination({ total: 2, activePage: 1}) should return [1, 2]', () => {
  const parameters = pagination({ total: 2, activePage: 1})
  const result = [1, 2]
  expect(parameters).to.be.deep.equal(result)
})

test('pagination({ total: 5, activePage: 1}) should return [1, 2, 3, 4, 5]', () => {
  const parameters = pagination({ total: 5, activePage: 1})
  const result = [1, 2, 3, 4, 5]
  expect(parameters).to.be.deep.equal(result)
})

test("pagination({ total: 6, activePage: 1}) should return [1, 2, 3, '...', 6]", () => {
  const parameters = pagination({ total: 6, activePage: 1})
  const result = [1, 2, 3, '...', 6]
  expect(parameters).to.be.deep.equal(result)
})

test("pagination({ total: 6, activePage: 2}) should return [1, 2, 3, '...', 6]", () => {
  const parameters = pagination({ total: 6, activePage: 2})
  const result = [1, 2, 3, '...', 6]
  expect(parameters).to.be.deep.equal(result)
})

test("pagination({ total: 6, activePage: 3}) should return [1, 2, 3, 4, 5, 6]", () => {
  const parameters = pagination({ total: 6, activePage: 3})
  const result = [1, 2, 3, 4, 5, 6]
  expect(parameters).to.be.deep.equal(result)
})

test("pagination({ total: 6, activePage: 4}) should return [1, 2, 3, 4, 5, 6]", () => {
  const parameters = pagination({ total: 6, activePage: 4})
  const result = [1, 2, 3, 4, 5, 6]
  expect(parameters).to.be.deep.equal(result)
})

test("pagination({ total: 6, activePage: 5}) should return [1, '...', 4, 5, 6]", () => {
  const parameters = pagination({ total: 6, activePage: 5})
  const result = [1, '...', 4, 5, 6]
  expect(parameters).to.be.deep.equal(result)
})

test("pagination({ total: 6, activePage: 6}) should return [1, '...', 4, 5, 6]", () => {
  const parameters = pagination({ total: 6, activePage: 6})
  const result = [1, '...', 4, 5, 6]
  expect(parameters).to.be.deep.equal(result)
})

test("pagination({ total: 7, activePage: 1}) should return [1, 2, 3, '...', 7]", () => {
  const parameters = pagination({ total: 7, activePage: 1})
  const result = [1, 2, 3, '...', 7]
  expect(parameters).to.be.deep.equal(result)
})

test("pagination({ total: 7, activePage: 3}) should return [1, 2, 3, 4, '...', 7]", () => {
  const parameters = pagination({ total: 7, activePage: 3})
  const result = [1, 2, 3, 4, '...', 7]
  expect(parameters).to.be.deep.equal(result)
})

test("pagination({ total: 7, activePage: 4}) should return [1, 2, 3, 4, 5, 6, 7]", () => {
  const parameters = pagination({ total: 7, activePage: 4})
  const result = [1, 2, 3, 4, 5, 6, 7]
  expect(parameters).to.be.deep.equal(result)
})

test("pagination({ total: 7, activePage: 5}) should return [1, '...', 4, 5, 6, 7]", () => {
  const parameters = pagination({ total: 7, activePage: 5})
  const result = [1, '...', 4, 5, 6, 7]
  expect(parameters).to.be.deep.equal(result)
})

test("pagination({ total: 7, activePage: 6}) should return [1, '...', 5, 6, 7]", () => {
  const parameters = pagination({ total: 7, activePage: 6})
  const result = [1, '...', 5, 6, 7]
  expect(parameters).to.be.deep.equal(result)
})

test("pagination({ total: 7, activePage: 7}) should return [1, '...', 5, 6, 7]", () => {
  const parameters = pagination({ total: 7, activePage: 7})
  const result = [1, '...', 5, 6, 7]
  expect(parameters).to.be.deep.equal(result)
})

test("pagination({ total: 15 }) should return [1, 2, 3, '...', 15]", () => {
  const parameters = pagination({ total: 15 })
  const result = [1, 2, 3, '...', 15]
  expect(parameters).to.be.deep.equal(result)
})

test("pagination({}) should return [1]", () => {
  const parameters = pagination({})
  const result = [1]
  expect(parameters).to.be.deep.equal(result)
})

test("pagination() should return [1]", () => {
  const result = [1]
  expect(pagination()).to.be.deep.equal(result)
})

test("pagination({ total: 'abc', activePage: 1}) should throw a error", () => {
  const parameters = { total: 'abc', activePage: 1}
  const result = '"total" should be a number'
  try {
    pagination(parameters)
  } catch (e) {
    expect(e.message).to.be.equal(result)
  }
})

test("pagination({ total: 10, activePage: '1a'}) should throw a error", () => {
  const parameters = { total: 10, activePage: '1a'}
  const result = '"activePage" should be a number'
  try {
    pagination(parameters)
  } catch (e) {
    expect(e.message).to.be.equal(result)
  }
})