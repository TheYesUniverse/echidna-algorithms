'use strict'

import { expect } from 'chai'
import collatz from '../src/collatzConjecture'

describe.only('collatz', () => {
    'use strict'
  it('should be a function', () =>{
    expect(collatz).to.be.a('function')
  })
  it('should calculate collatz conjecture for n', () =>{
    expect(collatz(7)).to.eql([7, 22, 11, 34, 17, 52, 26, 13, 40,
    20, 10, 5, 16, 8, 4, 2, 1]);
    expect(collatz(4)).to.eql([4, 2, 1]);
  })
})
