const assert = require('chai').assert;
const demo = require('../demo-2/demo');

describe('Different types of tests using Mocha & Chai:', () => {
  it('Test: Should return the phrase: "Mocha & Chai are cool!"', () => {
    assert.equal(demo(), 'Mocha & Chai are cool!');
  });
});