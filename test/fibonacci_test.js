import { expect } from 'chai'
import Fibonacci from '../src/fibonacci'

describe.only('fibonacci', () => {
    'use strict'
  it('should be a function', () =>{
    expect(fibonacci).to.be.a('function');
  })
  it('should return the fibonacci sequence to n', () =>{
    expect(fibonacci(5)).to.deep.equal([0, 1, 1, 2, 3]);
    expect(fibonacci(6)).to.equal([0, 1, 1, 2, 3, 5]);
    expect(fibonacci(9)).to.equal([0, 1, 1, 2, 3, 5, 8, 13, 21]);
    expect(fibonacci(10)).to.equal([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
  })
