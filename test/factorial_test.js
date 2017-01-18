import { expect } from 'chai'
import factorial from '../src/factorial'

describe('factorial()', function(){
    'use strict'
  it('should be a function', function(){
    expect(factorial).to.be.a('function');
  })
  it('should calculate the factorial of a number',function (){
    expect(factorial(5)).to.equal(120);
    expect(factorial(6)).to.equal(720);
    expect(factorial(9)).to.equal(362880);
    expect(factorial(10)).to.equal(3628800);
  })
  context('when given a string', function(){
    it('should return false', function(){
      expect( () => factorial('string')).to.throw("Invalid Input")
      // why wont this work???
      // expect( () => factorial('string')).to.throw("Invalid Input")
    })
  })
})
