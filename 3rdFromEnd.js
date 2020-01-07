const Li = require('./LinkedListNoKeys')

function main (){

const SLL = new Li
SLL.insertFirst('Zeus')
SLL.insertLast('Poseidon')
SLL.insertLast('Athena')
SLL.insertLast('Hercules')
SLL.insertLast('Moon')
//console.log(SLL)


function End3rd () {

 let currNode = SLL.head
 let temp;
 let previous;
let array;
// have to find last and then go back 2 

 while (currNode){
  
  temp = currNode.next // temp 
  // store prior and store prior prior 
  // could reverse it then find out after 3 iterations 
  currNode.next = previous

  previous = currNode
  currNode = temp // step 1 over
 if (temp === null){
 
  return previous.next.next

 }
 }



}

console.log(End3rd())
}

main()