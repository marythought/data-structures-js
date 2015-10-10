var expect = require('chai').expect;
var LinkedList = require('../lib/double-linked-list').LinkedList;
var Node = require('../lib/double-linked-list').Node;
//required file must have a module.exports tag at the bottom

describe("The double-linked-list", function() {
  beforeEach(function() {
    var list = new LinkedList();
    list.add(0);
    list.add(1);
    list.add(2);
    list.add("apples");
    list.add(4);
  });

  it('should create an instance of a linked list', function() {
    var list = new LinkedList();
    expect(list).be.instanceOf(LinkedList);
    expect(list.head).be.null;
    expect(list.tail).be.null;
  });

  it('should add nodes and reassign the head to most recent node', function(){
    var list = new LinkedList();
    list.add(0);
    expect(list.head.value).equal(0);
    expect(list.tail.value).equal(list.head.value);
    list.add(2);
    expect(list.head.value).equal(2);
    expect(list.head.next).be.null;
    expect(list.head.prev.value).equal(0);
  })

  it('should assign the tail once and only once', function(){
    var list = new LinkedList();
    list.add(0);
    expect(list.tail.value).equal(0);
    list.add(1);
    expect(list.tail.value).not.equal(list.head.value);
    list.add(2);
    expect(list.tail.value).equal(0);
    expect(list.tail.next.value).equal(1);
    expect(list.tail.prev).be.null;
  })

  it('should remove a node at the tail', function(){
    var list = new LinkedList();
    list.add(0);
    list.add(1);
    list.add(2);
    list.add("apples");
    list.add(4);
    expect(list.remove(0).value).equal(0);
  })

  it('should remove a node at the head', function(){
    var list = new LinkedList();
    list.add(0);
    list.add(1);
    list.add(2);
    list.add("apples");
    list.add(4);
    expect(list.remove(4).value).equal(4);
  })

  it('should remove a node in the list', function(){
    var list = new LinkedList();
    list.add(0);
    list.add(1);
    list.add(2);
    list.add("apples");
    list.add(4);
    expect(list.remove("apples").value).equal("apples");
  })

  it('should return not found on remove if node not in list', function(){
    var list = new LinkedList();
    list.add(0);
    list.add(1);
    list.add(2);
    list.add("apples");
    list.add(4);
    expect(list.remove(5)).equal("no match found");
  })

  it('should return node at head on search if node in list', function(){
    var list = new LinkedList();
    list.add(0);
    list.add(1);
    list.add(2);
    list.add("apples");
    list.add(4);
    expect(list.search(4).value).equal(4);
  })

  it('should return node at tail on search if node in list', function(){
    var list = new LinkedList();
    list.add(0);
    list.add(1);
    list.add(2);
    list.add("apples");
    list.add(4);
    expect(list.search(0).value).equal(0);
  })

  it('should return node in list on search if node in list', function(){
    var list = new LinkedList();
    list.add(0);
    list.add(1);
    list.add(2);
    list.add("apples");
    list.add(4);
    expect(list.search("apples").value).equal("apples");
  })

  it('should return not found if node not list', function(){
    var list = new LinkedList();
    list.add(0);
    list.add(1);
    list.add(2);
    list.add("apples");
    list.add(4);
    expect(list.search(5)).equal("no match found");
  })

  it('should return list of values on toString', function(){
    var list = new LinkedList();
    list.add(0);
    list.add(1);
    list.add(2);
    list.add("apples");
    list.add(4);
    expect(list.toString()).equal("0, 1, 2, apples, 4");
  })
})

