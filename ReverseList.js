//const LinkedList = require('LinkedList') 
const Li = require('./LinkedListNoKeys')

function main (){


const SLL = new Li;
SLL.insertFirst('Zeus')
SLL.insertLast('Posiedon')
SLL.insertLast('Athena')
SLL.insertLast('Hercules')
//console.log(reverse2(SLL.head))
console.log(reverse(SLL))

function reverse(SLL){

 
 currNode = SLL.head 
// Get the last node 
// AS YOUR ITERATING POINTING IT TO THE NODE BEHIND IT 
let tempNode;
let previous;
while(currNode){
// tempNode = currNode.next --> Posiedon temp = poseidon //2) tempNode = Athena 3) tempNode = athena.next
tempNode = currNode.next 
// Zeus.next = null(undefined) // 2) posiedon.next = Zeus 3) athena.next = poseidon
currNode.next = previous

// previous = Zeus // 2) previous = poseidon 3) previous = athena
previous = currNode 
// Zeus/current = Poseidon // 2) current = Athena 3) current  = null - exit?
currNode = tempNode

}

return previous



}}

main()