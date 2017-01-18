import { expect } from 'chai'
import factorial from '../src/factorial'

describe.only('factorial()', function(){
    'use strict'
  it('should be a function', function(){
    expect(factorial).to.be.a('function');
  })
  it('',function (){
    expect(factorial(5)).to.equal(120);
    expect(factorial(6)).to.equal(720);
    expect(factorial(9)).to.equal(1772928);
    expect(factorial(10)).to.equal(13003200);
  })
  context('when given a string', function(){
    it('should return false', function(){
      expect(factorial('someword')).to.equal(false)
    })
