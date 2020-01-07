const Li = require('./LinkedListKeys')
const Node = require('./_Node')
function main (){


const SLL = new Li;
SLL.insertFirst(3,1)
SLL.insertLast(2,2)
SLL.insertLast(5,3)
SLL.insertLast(7,4)
SLL.insertLast(1,5)

console.log(sort(SLL.head))
function sort (head){
 prev = head // 3
 node = head.next // 2
 while(node){
  if (prev.value > node.value){ //3 > 2 Y 
   node.next = prev // 2.next = 3
   prev.next = null // 3.next = null 
  }
  //prev = prev.next
  node = node.next
  return node
 }
 
}

}

main()