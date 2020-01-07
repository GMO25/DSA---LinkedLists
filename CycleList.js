const Li = require('./LinkedListNoKeys')
const Node = require('./_Node')
function main (){

const CycleList = new Li
CycleList.insertFirst('Zeus')
CycleList.insertLast('Poseidon')
CycleList.insertLast('Athena')
CycleList.insertLast('Hercules')
CycleList.find('Athena').next = CycleList.head
// Hercules.next must equal Zues 
console.log(CycleTest(CycleList.head))
function CycleTest (head){

 let tortoise = head //node 1
 let hare = head // node 1

 while(hare && hare.next){ 
  tortoise = tortoise.next; // tortoise starts at node 2 and keeps going no matter what (if its a loop)
  hare = hare.next.next; // moves in 3s and keeps going no matter what (if its a loop - eventually will pick up each value)

  // important for this step --> so its a loop by nature just stop when you find the confirming repetition 
  if(tortoise === hare){
   return true
  }
 }
return false; 

}

//console.log(CycleList.head)
//console.log(CircularTest(CycleList.head))
function CircularTest(head){
node = head
let arr = []

while (node){
 arr.push(node)
 if (arr.includes(node)){
  console.log('yes')
 }
 node = node.next
 //if node.next is same as a value before ---> .match or .filter .includes

}

return arr


}

}
main()