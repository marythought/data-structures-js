var expect = require('chai').expect;
var Classes = require('../lib/pumpkinPatch');
var Node = Classes.Node
var LinkedList = Classes.LinkedList
//required file must have a module.exports tag at the bottom

describe("The Pumpkin Patch", function() {
  it('should have a name', function() {
    var farm = new PumpkinPatch('The Great Pumpkin Patch', 100);
    expect(farm.name).to.equal('The Great Pumpkin Patch');
  });

  it('should report correct number of Pumpkins', function() {
    var farm = new PumpkinPatch('The Great Pumpkin Patch', 100);
    expect(farm.pumpkinsLeft()).to.equal(100);
  });
})

//go look at chaijs.com documentation for more BDD language
//don't forget to require chai

// this would also work:

//var chai = require('chai');
//...
//chai.expect(farm.name)...
