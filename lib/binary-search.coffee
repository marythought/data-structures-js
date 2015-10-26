class NullBinaryTree
  constructor: (@value=null) ->
  size: ->
    0
  contains: ->
    false
  depth: ->
    0


class BinarySearchTree
  constructor: (@value, @left=new NullBinaryTree, @right=new NullBinaryTree) ->

  insert: (value) ->
    if value == @value
      return "duplicate entry"
    else if @left instanceof NullBinaryTree && value < @value
      @left = new BinarySearchTree(value)
    else if @right instanceof NullBinaryTree && value > @value
      @right = new BinarySearchTree(value)
    else
      if value < @value then @left.insert(value) else @right.insert(value)

  contains: (value) ->
    return true if value == @value
    if value < @value
      @left.contains(value)
    else if value > @value
      @right.contains(value)
    else
      return false

  size: ->
    @left.size() + @right.size() + 1

  depth: ->
    left_height = @left.depth()
    right_height = @right.depth()
    if (left_height > right_height) then (left_height + 1) else (right_height + 1)

  balance: ->
    left_height = @left.depth() + 1
    right_height = @right.depth() + 1
    left_height - right_height

module.exports = {
  BinarySearchTree: BinarySearchTree,
  NullBinaryTree: NullBinaryTree
}
