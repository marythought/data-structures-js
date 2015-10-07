class Node
  constructor: (value, prev, next) ->
    @value = value
    @prev = prev || nil
    @next = next || nil

class LinkedList
  constructor: ->
    @head = nil
    @tail = nil

  add = (value) ->
    @head = Node.new(value, @head)

  remove = (value) ->
    current = @head
    while current
      if current.value == value && current == @head
        head = current.prev
        current.prev.next = nil
        return current
      else if current.value == value && current == @tail
        tail = current.next
        current.next.prev = nil
        return current
      else if current.value == value
        current.prev.next = current.next
        current.next.prev = current.prev
        return current
      else
        current = current.prev
    return "no match found"

  search = (value) ->
    current = @head
    while current












