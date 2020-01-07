const Li = require('./LinkedListNoKeys')

function main (){

const SLL = new Li
SLL.insertFirst('Zeus')
SLL.insertLast('Poseidon')
SLL.insertLast('Athena')
SLL.insertLast('Hercules')
SLL.insertLast('Moon')
SLL.insertLast('Hades')
//console.log(SLL)
console.log(mid(SLL.head))
function mid(head){
let count = 0
 currNode = head
 nodeForMid = head
 // start to end counting each node and then divide by 2 
 while(currNode){
  currNode = currNode.next
  count ++
 }
let middleNode = count/2 

// nodeForMId 3 times - middleNode
for(let i=0; i<middleNode -1;i++){
 nodeForMid = nodeForMid.next
}
return nodeForMid
}

}

main()