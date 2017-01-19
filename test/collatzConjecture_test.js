import { expect } from 'chai'
import collatz from '../src/collatzConjecture'

describe.only('collatz', () => {
    'use strict'
  it('should be a function', () =>{
    expect(collatzConjecture).to.be.a('function');
  })
  it('should calculate collatz conjecture for n', () =>{
    expect(collatzConjecture(7)).to.deep.equal([7, 22, 11, 34, 17, 52, 26, 13, 40,
    20, 10, 5, 16, 8, 4, 2, 1]);
    expect(collatzConjecture(4)).to.deep.equal([4, 2, 1]);

  })
})
