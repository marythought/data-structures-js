class NullBinaryTree
  constructor: (@value=null) ->
  size: ->
    0
  contains: ->
    false
  depth: ->
    0
  inOrder: ->
    null
  postOrder: ->
    null
  preOrder: ->
    null


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

  inOrder: ->
    list = [@left.inOrder(), @value, @right.inOrder()]
    list = list.filter (n) -> return n != null
    merged = [].concat.apply([], list).join(', ')

  postOrder: ->
    list = [@left.postOrder(), @right.postOrder(), @value]
    list = list.filter (n) -> return n != null
    merged = [].concat.apply([], list).join(', ')

  preOrder: ->
    list = [@value, @left.preOrder(), @right.preOrder()]
    list = list.filter (n) -> return n != null
    merged = [].concat.apply([], list).join(', ')

  breadthFirst: ->
    list = []
    permalist = []
    permalist.push @value
    if !(@left instanceof NullBinaryTree)
      list.push @left
    if !(@right instanceof NullBinaryTree)
      list.push @right
    while list.length > 0
      current = list.shift()
      permalist.push current.value
      if !(current.left instanceof NullBinaryTree)
        list.push current.left
      if !(current.right instanceof NullBinaryTree)
        list.push current.right
    return permalist.join(', ')

module.exports = {
  BinarySearchTree: BinarySearchTree,
  NullBinaryTree: NullBinaryTree
}
