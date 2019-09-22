const chai = require('chai');
const calculator = require('../demo-1/calculator');

const assert = chai.assert;

describe('Test operations of the calculator', () => {
  it('Test: Should add two numbers', () => {
    assert.equal(calculator.add(5, 5), 10);
  });

  it('Test: Should subtract two numbers', () => {
    assert.equal(calculator.sub(10, 5), 5);
  });

  it('Test: Should multiply two numbers', () => {
    assert.equal(calculator.mult(10, 5), 50);
  });

  it('Test: Should divide two numbers', () => {
    assert.equal(calculator.div(18, 2), 9);
  });
});

describe('Other types of assertions - Chai', () => {
  it('Test: Should verify is a given number is greater or equal', () => {
    assert.isAtLeast(6, 2, '6 is greater than two');
    assert.isAtLeast(7, 7, '7 is equal to 7');
  });
});