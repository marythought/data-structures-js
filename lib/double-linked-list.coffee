class Node
  constructor: (@value, @prev=null, @next=null) ->

class LinkedList
  constructor: (@head=null, @tail=null) ->

  add: (value) ->
    if @head == null
      @head = new Node(value)
      @tail = @head
    else
      current = new Node(value, @head)
      @head = current
      current.prev.next = current

  remove: (value) ->
    current = @head
    while current
      if current.value == value
        if current == @head
          @head = current.prev
          current.prev.next = null
        else if current == @tail
          @tail = current.next
          current.next.prev = null
        else
          current.prev.next = current.next
          current.next.prev = current.prev
        return current
      else
        current = current.prev
    return "no match found"

  search: (value) ->
    current = @head
    while current != @tail
      if current.value == value
        return current
      else
        current = current.prev
    if current.value == value
      return current
    else
      return "no match found"

  toString: () ->
    current = @tail
    string = ""
    while current.next
      string += current.value + ", "
      current = current.next
    string += current.value
    return string

module.exports = {
  LinkedList: LinkedList,
  Node: Node
}





