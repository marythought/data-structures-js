var expect = require('chai').expect;
var BinarySearchTree = require('../lib/binary-search').BinarySearchTree;
var NullBinaryTree = require('../lib/binary-search').NullBinaryTree;
//required file must have a module.exports tag at the bottom

describe("The binary-search-tree", function() {
  var tree = new BinarySearchTree(50);

  it('should create an instance of a binary search tree', function() {
    expect(tree).be.instanceOf(BinarySearchTree);
    expect(tree.left).be.instanceOf(NullBinaryTree);
    expect(tree.right).be.instanceOf(NullBinaryTree);
    expect(tree.value).equal(50);
  });

  it('should report size of tree and zero for empty trees', function(){
    expect(tree.size()).equal(1);
    expect(tree.left.size()).equal(0);
  });

  it('should insert trees and assign to left or right based on value', function(){
    tree.insert(22);
    expect(tree.left.value).equal(22);
    tree.insert(75);
    expect(tree.right.value).equal(75);
    tree.insert(10);
    expect(tree.left.left.value).equal(10);
    tree.insert(35);
    expect(tree.left.right.value).equal(35);
    tree.insert(55);
    expect(tree.right.left.value).equal(55);
    tree.insert(57);
    expect(tree.right.left.right.value).equal(57);
    tree.insert(56);
    expect(tree.right.left.right.left.value).equal(56);
    expect(tree.size()).equal(8);
  });

  it('should ignore duplicate entries', function(){
    expect(tree.insert(22)).equal("duplicate entry");
    expect(tree.size()).equal(8);
  });

  it('should report if a binary tree contains a value', function(){
    expect(tree.contains(57)).equal(true);
    expect(tree.contains(23)).equal(false);
    expect(tree.contains(10)).equal(true);
    expect(tree.contains(50)).equal(true);
    expect(tree.contains(56)).equal(true);
  });

  it('should report number of levels and balance in the tree', function(){
    expect(tree.depth()).equal(5);
    expect(tree.balance()).equal(-2);
    tree = new BinarySearchTree(50);
    expect(tree.depth()).equal(1);
    expect(tree.left.depth()).equal(0);
  });

  it('should report the balance of a tree', function(){
    tree.insert(10);
    tree.insert(70);
    expect(tree.balance()).equal(0);
    tree.insert(25);
    expect(tree.balance()).equal(1);
    tree.insert(80);
    expect(tree.balance()).equal(0);
    tree.insert(90);
    expect(tree.balance()).equal(-1);
  });

  it('should traverse a tree 4 ways: in-order', function(){
    expect(tree.inOrder()).equal('10, 25, 50, 70, 80, 90')
  });

  it('should traverse a tree 4 ways: pre-order', function(){
    expect(tree.preOrder()).equal('50, 10, 25, 70, 80, 90')
  });

  it('should traverse a tree 4 ways: post-order', function(){
    expect(tree.postOrder()).equal('25, 10, 90, 80, 70, 50')
  });

})
